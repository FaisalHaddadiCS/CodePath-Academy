import { Request, Response } from "express";
import prisma from "../utils/db";

import { z } from "zod";

const ProgressSchema = z.object({
  body: z.object({
    courseId: z.string().min(1),
    lessonId: z.string().min(1),
    completed: z.boolean().optional()
  })
});

export const updateProgress = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ success: false, error: { code: "UNAUTHORIZED", message: "Unauthorized" } });

    const validation = ProgressSchema.safeParse(req);
    if (!validation.success) {
      return res.status(400).json({ success: false, error: { code: "BAD_REQUEST", message: "Invalid payload format" } });
    }
    const { courseId, lessonId, completed } = validation.data.body;

    const progress = await prisma.userProgress.upsert({
      where: {
        userId_courseId_lessonId: {
          userId,
          courseId,
          lessonId
        }
      },
      update: {
        completed: completed || true,
        lastAccessed: new Date()
      },
      create: {
        userId,
        courseId,
        lessonId,
        completed: completed || true
      }
    });

    // Add XP if completed
    if (completed) {
      await prisma.user.update({
        where: { id: userId },
        data: {
          xp: { increment: 50 } // Award 50 XP per lesson completion
        }
      });
    }

    return res.json({ success: true, data: progress });
  } catch (error) {
    console.error("Update Progress Error:", error);
    return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to update progress" } });
  }
};
