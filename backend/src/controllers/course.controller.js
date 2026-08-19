"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLessonDetails = exports.getCourseDetails = exports.getCourses = exports.getCategories = void 0;
const db_1 = __importDefault(require("../utils/db"));
const getCategories = async (req, res) => {
    try {
        const categories = await db_1.default.category.findMany({
            include: {
                _count: {
                    select: { courses: true },
                },
            },
        });
        return res.json({ success: true, data: categories });
    }
    catch (error) {
        return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to fetch categories" } });
    }
};
exports.getCategories = getCategories;
const getCourses = async (req, res) => {
    try {
        const { categoryId } = req.query;
        const query = {
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
        const courses = await db_1.default.course.findMany(query);
        return res.json({ success: true, data: courses });
    }
    catch (error) {
        return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to fetch courses" } });
    }
};
exports.getCourses = getCourses;
const getCourseDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const course = await db_1.default.course.findUnique({
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
    }
    catch (error) {
        return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to fetch course details" } });
    }
};
exports.getCourseDetails = getCourseDetails;
const getLessonDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const lesson = await db_1.default.lesson.findUnique({
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
    }
    catch (error) {
        return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to fetch lesson details" } });
    }
};
exports.getLessonDetails = getLessonDetails;
//# sourceMappingURL=course.controller.js.map