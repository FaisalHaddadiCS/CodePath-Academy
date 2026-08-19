import { Request, Response } from "express";
import prisma from "../utils/db";

export const globalSearch = async (req: Request, res: Response) => {
  try {
    const { q } = req.query;
    if (!q || typeof q !== "string") {
      return res.status(400).json({ success: false, error: { code: "BAD_REQUEST", message: "Query parameter 'q' is required" } });
    }

    const searchQuery = `%${q}%`;

    // Search Courses
    const courses = await prisma.course.findMany({
      where: {
        OR: [
          { title: { contains: q } },
          { description: { contains: q } }
        ]
      },
      take: 5
    });

    // Search Lessons
    const lessons = await prisma.lesson.findMany({
      where: {
        OR: [
          { title: { contains: q } },
          { description: { contains: q } }
        ]
      },
      include: {
        module: {
          include: {
            course: true
          }
        }
      },
      take: 5
    });

    return res.json({
      success: true,
      data: {
        courses,
        lessons: lessons.map(l => ({
          id: l.id,
          title: l.title,
          courseId: l.module.course.id,
          courseTitle: l.module.course.title
        }))
      }
    });

  } catch (error) {
    console.error("Search Error:", error);
    return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Search failed" } });
  }
};
