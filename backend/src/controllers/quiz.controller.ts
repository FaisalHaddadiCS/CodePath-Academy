import { Request, Response } from "express";
import prisma from "../utils/db";

export const getQuizzes = async (req: Request, res: Response) => {
  try {
    const quizzes = await prisma.quiz.findMany({
      include: {
        lesson: true,
      },
    });
    return res.json({ success: true, data: quizzes });
  } catch (error) {
    return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to fetch quizzes" } });
  }
};

export const getQuizDetails = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const quiz = await prisma.quiz.findUnique({
      where: { id },
      include: {
        questions: {
          include: {
            options: {
              select: { id: true, text: true } // Don't expose isCorrect
            }
          }
        }
      }
    });

    if (!quiz) {
      return res.status(404).json({ success: false, error: { code: "NOT_FOUND", message: "Quiz not found" } });
    }

    return res.json({ success: true, data: quiz });
  } catch (error) {
    return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to fetch quiz details" } });
  }
};

import { z } from "zod";

const SubmitQuizSchema = z.object({
  body: z.object({
    answers: z.record(z.string(), z.number())
  })
});

export const submitQuiz = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ success: false, error: { code: "UNAUTHORIZED", message: "Unauthorized" } });
    const quizId = req.params.id as string;

    const validation = SubmitQuizSchema.safeParse(req);
    if (!validation.success) {
      return res.status(400).json({ success: false, error: { code: "BAD_REQUEST", message: "Invalid payload format" } });
    }
    const { answers } = validation.data.body;

    // 1. Fetch quiz with correct answers
    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
      include: {
        questions: {
          include: { options: true }
        }
      }
    });

    if (!quiz) return res.status(404).json({ success: false, error: { code: "NOT_FOUND", message: "Quiz not found" } });

    // 2. Grade the quiz
    let correctCount = 0;
    const gradedAnswers: any[] = [];

    for (const q of (quiz as any).questions) {
      const selectedOptionId = answers[q.id];
      const correctOption = q.options.find((o: any) => o.isCorrect);
      
      const isCorrect = selectedOptionId === correctOption?.id;
      if (isCorrect) correctCount++;

      gradedAnswers.push({
        questionId: q.id,
        selectedOptionId,
        isCorrect,
        correctOptionId: correctOption?.id,
        explanation: q.explanation
      });
    }

    const score = (correctCount / (quiz as any).questions.length) * 100;

    // 3. Save attempt
    const attempt = await prisma.quizAttempt.create({
      data: {
        userId,
        quizId,
        score,
        answers: {
          create: gradedAnswers.map(ga => ({
            questionId: ga.questionId,
            selectedOptionId: ga.selectedOptionId,
            isCorrect: ga.isCorrect
          }))
        }
      }
    });

    // 4. Award XP (e.g. 10 XP per correct answer)
    const xpEarned = correctCount * 10;
    if (xpEarned > 0) {
      await prisma.user.update({
        where: { id: userId },
        data: { xp: { increment: xpEarned } }
      });
    }

    return res.json({ 
      success: true, 
      data: { 
        attemptId: attempt.id, 
        score, 
        xpEarned,
        results: gradedAnswers 
      } 
    });

  } catch (error) {
    console.error("Quiz Submit Error:", error);
    return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to submit quiz" } });
  }
};
