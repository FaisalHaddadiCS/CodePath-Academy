"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitQuiz = exports.getQuizDetails = exports.getQuizzes = void 0;
const db_1 = __importDefault(require("../utils/db"));
const getQuizzes = async (req, res) => {
    try {
        const quizzes = await db_1.default.quiz.findMany({
            include: {
                lesson: true,
            },
        });
        return res.json({ success: true, data: quizzes });
    }
    catch (error) {
        return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to fetch quizzes" } });
    }
};
exports.getQuizzes = getQuizzes;
const getQuizDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const quiz = await db_1.default.quiz.findUnique({
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
    }
    catch (error) {
        return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to fetch quiz details" } });
    }
};
exports.getQuizDetails = getQuizDetails;
const zod_1 = require("zod");
const SubmitQuizSchema = zod_1.z.object({
    body: zod_1.z.object({
        answers: zod_1.z.record(zod_1.z.string(), zod_1.z.number())
    })
});
const submitQuiz = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId)
            return res.status(401).json({ success: false, error: { code: "UNAUTHORIZED", message: "Unauthorized" } });
        const quizId = req.params.id;
        const validation = SubmitQuizSchema.safeParse(req);
        if (!validation.success) {
            return res.status(400).json({ success: false, error: { code: "BAD_REQUEST", message: "Invalid payload format" } });
        }
        const { answers } = validation.data.body;
        // 1. Fetch quiz with correct answers
        const quiz = await db_1.default.quiz.findUnique({
            where: { id: quizId },
            include: {
                questions: {
                    include: { options: true }
                }
            }
        });
        if (!quiz)
            return res.status(404).json({ success: false, error: { code: "NOT_FOUND", message: "Quiz not found" } });
        // 2. Grade the quiz
        let correctCount = 0;
        const gradedAnswers = [];
        for (const q of quiz.questions) {
            const selectedOptionId = answers[q.id];
            const correctOption = q.options.find((o) => o.isCorrect);
            const isCorrect = selectedOptionId === correctOption?.id;
            if (isCorrect)
                correctCount++;
            gradedAnswers.push({
                questionId: q.id,
                selectedOptionId,
                isCorrect,
                correctOptionId: correctOption?.id,
                explanation: q.explanation
            });
        }
        const score = (correctCount / quiz.questions.length) * 100;
        // 3. Save attempt
        const attempt = await db_1.default.quizAttempt.create({
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
            await db_1.default.user.update({
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
    }
    catch (error) {
        console.error("Quiz Submit Error:", error);
        return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to submit quiz" } });
    }
};
exports.submitQuiz = submitQuiz;
//# sourceMappingURL=quiz.controller.js.map