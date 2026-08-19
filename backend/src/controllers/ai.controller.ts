import { Request, Response } from "express";
import { z } from "zod";
import { generateTutorResponse, generateQuiz } from "../services/ai.service";
import prisma from "../utils/db";

export const chatSchema = z.object({
  body: z.object({
    mode: z.string().optional(),
    currentMessage: z.string().min(1).max(2000),
    messages: z.array(z.object({
      role: z.enum(["user", "assistant"]),
      content: z.string().max(4000),
    })).max(20),
    context: z.string().optional(),
    language: z.string().optional(),
  }).refine((data) => {
    const totalChars = data.messages.reduce((acc, msg) => acc + msg.content.length, 0);
    return totalChars <= 50000;
  }, { message: "Conversation history is too large" }),
});

export const chatWithTutor = async (req: Request, res: Response) => {
  try {
    const { mode, messages, currentMessage, context, language } = req.body;
    const userId = req.user?.id || 'anonymous';

    const reply = await generateTutorResponse(userId, mode, messages, currentMessage, context, language);

    return res.json({ success: true, reply });
  } catch (error: any) {
    return res.status(500).json({ 
      success: false, 
      error: "AI Tutor is temporarily unavailable. Please try again.", 
      code: "AI_PROVIDER_ERROR" 
    });
  }
};

export const createAiQuiz = async (req: Request, res: Response) => {
  try {
    const { topic, difficulty, numQuestions, language } = req.body;
    const userId = req.user?.id || 'anonymous';

    const quizData = await generateQuiz(userId, topic, difficulty, numQuestions, language);

    // Save the generated quiz to the database (optional, or just return it to frontend)
    // For now, we'll just return it so the frontend can render it immediately
    return res.json({ success: true, quiz: quizData });
  } catch (error) {
    return res.status(500).json({ success: false, error: "AI Quiz generation is temporarily unavailable. Please try again.", code: "AI_PROVIDER_ERROR" });
  }
};
