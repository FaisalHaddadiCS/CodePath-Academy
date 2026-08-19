import { Request, Response } from "express";
import prisma from "../utils/db";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        _count: {
          select: { courses: true },
        },
      },
    });
    return res.json({ success: true, data: categories });
  } catch (error) {
    return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to fetch categories" } });
  }
};

export const getCourses = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.query;
    
    const query: any = {
      include: {
        category: true,
        _count: {
          select: { modules: true },
        },
      },
    };

    if (categoryId) {
      query.where = { categoryId: String(categoryId) };
    }

    const courses = await prisma.course.findMany(query);

    return res.json({ success: true, data: courses });
  } catch (error) {
    return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to fetch courses" } });
  }
};

export const getCourseDetails = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    
    const course = await prisma.course.findUnique({
      where: { id },
      include: {
        category: true,
        modules: {
          include: {
            lessons: {
              select: {
                id: true,
                title: true,
                titleAr: true,
                description: true,
                descriptionAr: true,
                order: true,
              },
              orderBy: {
                order: "asc"
              }
            },
          },
          orderBy: {
            order: "asc"
          }
        },
      },
    });

    if (!course) {
      return res.status(404).json({ success: false, error: { code: "NOT_FOUND", message: "Course not found" } });
    }

    return res.json({ success: true, data: course });
  } catch (error) {
    return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to fetch course details" } });
  }
};

export const getLessonDetails = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    const lesson = await prisma.lesson.findUnique({
      where: { id },
      include: {
        slides: {
          orderBy: {
            order: "asc"
          }
        },
        quizzes: {
          select: {
            id: true,
            title: true,
            description: true
          }
        }
      },
    });

    if (!lesson) {
      return res.status(404).json({ success: false, error: { code: "NOT_FOUND", message: "Lesson not found" } });
    }

    return res.json({ success: true, data: lesson });
  } catch (error) {
    return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to fetch lesson details" } });
  }
};
