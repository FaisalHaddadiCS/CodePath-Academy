"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboard = void 0;
const db_1 = __importDefault(require("../utils/db"));
const getDashboard = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId)
            return res.status(401).json({ success: false, error: { code: "UNAUTHORIZED", message: "Unauthorized" } });
        // 1. Get recent progress (Continue Learning)
        const recentProgress = await db_1.default.userProgress.findFirst({
            where: { userId },
            orderBy: { lastAccessed: "desc" },
            include: {
                course: true,
                lesson: {
                    include: {
                        module: true
                    }
                }
            }
        });
        // 2. Get active courses progress
        const activeCoursesData = await db_1.default.userProgress.findMany({
            where: { userId },
            include: {
                course: {
                    include: {
                        _count: {
                            select: { modules: true }
                        }
                    }
                }
            }
        });
        // Group progress by course to calculate completion
        const courseMap = new Map();
        activeCoursesData.forEach(p => {
            if (p.courseId && p.course) {
                if (!courseMap.has(p.courseId)) {
                    courseMap.set(p.courseId, {
                        id: p.course.id,
                        title: p.course.title,
                        imageUrl: p.course.imageUrl,
                        totalModules: p.course._count.modules,
                        completedLessons: 0
                    });
                }
                if (p.completed) {
                    courseMap.get(p.courseId).completedLessons += 1;
                }
            }
        });
        const activeCourses = Array.from(courseMap.values());
        // 3. Get recent quizzes
        const recentQuizzes = await db_1.default.quizAttempt.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
            take: 5,
            include: {
                quiz: {
                    include: {
                        lesson: true
                    }
                }
            }
        });
        // 4. Get User profile and XP
        const user = await db_1.default.user.findUnique({
            where: { id: userId },
            select: { email: true, role: true, xp: true, profile: true }
        });
        // 5. Weak Topics Analysis
        const weakTopics = [];
        if (recentQuizzes.length > 0) {
            const topicScores = {};
            recentQuizzes.forEach(q => {
                if (q && q.quiz) {
                    const topic = q.quiz.title;
                    const entry = topicScores[topic] || { total: 0, count: 0 };
                    entry.total += q.score;
                    entry.count += 1;
                    topicScores[topic] = entry;
                }
            });
            for (const [topic, data] of Object.entries(topicScores)) {
                const avg = data.total / data.count;
                if (avg < 70) {
                    weakTopics.push({ topic, score: Math.round(avg) });
                }
            }
        }
        return res.json({
            success: true,
            data: {
                user,
                continueLearning: recentProgress,
                activeCourses,
                recentQuizzes,
                weakTopics
            }
        });
    }
    catch (error) {
        console.error("Dashboard Error:", error);
        return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to load dashboard data" } });
    }
};
exports.getDashboard = getDashboard;
//# sourceMappingURL=user.controller.js.map