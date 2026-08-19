import { Request, Response } from "express";
import prisma from "../utils/db";
import { executeCode } from "../services/execution.service";
import { generateCodeReview } from "../services/ai.service";

export const getChallenges = async (req: Request, res: Response) => {
  try {
    const challenges = await prisma.codingChallenge.findMany({
      include: {
        lesson: {
          select: { title: true }
        }
      }
    });
    return res.json({ success: true, data: challenges });
  } catch (error) {
    return res.status(500).json({ success: false, error: { message: "Failed to fetch challenges" } });
  }
};

export const getChallengeDetails = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const challenge = await prisma.codingChallenge.findUnique({
      where: { id },
      include: {
        lesson: { select: { title: true, id: true, moduleId: true } },
        testCases: {
          where: { isHidden: false }, // DO NOT EXPOSE HIDDEN TESTS
          select: { id: true, input: true, expected: true }
        }
      }
    });

    if (!challenge) {
      return res.status(404).json({ success: false, error: { message: "Challenge not found" } });
    }

    return res.json({ success: true, data: challenge });
  } catch (error) {
    return res.status(500).json({ success: false, error: { message: "Failed to fetch challenge details" } });
  }
};

export const runCode = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { code } = req.body;
    const userId = req.user?.id;

    if (!userId || !code) return res.status(400).json({ success: false, error: { code: "BAD_REQUEST", message: "Invalid request" } });

    const challenge = await prisma.codingChallenge.findUnique({
      where: { id },
      include: { testCases: true }
    });

    if (!challenge) {
      return res.status(404).json({ success: false, error: { code: "NOT_FOUND", message: "Challenge not found" } });
    }

    const executionResult = await executeCode({
      language: challenge.language,
      code,
      testCases: (challenge as any).testCases.map((tc: any) => ({ input: tc.input, expected: tc.expected }))
    });

    // Save attempt (whether passed or failed)
    const allPassed = executionResult.tests.length > 0 && executionResult.tests.every(t => t.passed);
    
    await prisma.challengeAttempt.create({
      data: {
        userId,
        challengeId: id,
        code,
        passed: allPassed
      }
    });

    let xpEarned = 0;
    if (allPassed) {
      // Check if already completed to prevent farming
      const existingCompletion = await prisma.challengeCompletion.findUnique({
        where: { userId_challengeId: { userId, challengeId: id } }
      });

      if (!existingCompletion) {
        xpEarned = challenge.xpReward;
        await prisma.$transaction([
          prisma.challengeCompletion.create({
            data: { userId, challengeId: id, xpEarned }
          }),
          prisma.user.update({
            where: { id: userId },
            data: { xp: { increment: xpEarned } }
          })
        ]);
      }
    }
    
    // Ensure hidden test expected outputs are stripped from the response
    const safeTestsResult = executionResult.tests.map((t, idx) => {
      const isHidden = (challenge as any).testCases[idx].isHidden;
      return {
        passed: t.passed,
        output: t.output,
        expected: isHidden ? "HIDDEN" : t.expected,
        error: t.error
      };
    });

    return res.json({
      success: true,
      data: {
        status: executionResult.status,
        message: executionResult.message,
        tests: safeTestsResult,
        xpEarned
      }
    });

  } catch (error) {
    return res.status(500).json({ success: false, error: { message: "Execution failed" } });
  }
};

export const analyzeCode = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const { code, output } = req.body;
    const userId = req.user?.id;

    if (!userId || !code) return res.status(400).json({ success: false, error: { message: "Invalid request" } });

    const challenge = await prisma.codingChallenge.findUnique({
      where: { id },
      include: { lesson: true }
    });

    if (!challenge) return res.status(404).json({ success: false, error: { message: "Challenge not found" } });

    const reviewMessage = await generateCodeReview(userId, challenge, code, output);

    return res.json({ success: true, data: { message: reviewMessage } });

  } catch (error) {
    console.error("AI Analysis Error:", error);
    return res.status(500).json({ success: false, error: { message: "AI analysis failed" } });
  }
};
