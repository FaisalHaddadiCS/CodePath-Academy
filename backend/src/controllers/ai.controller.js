"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAiQuiz = exports.chatWithTutor = exports.chatSchema = void 0;
const zod_1 = require("zod");
const ai_service_1 = require("../services/ai.service");
exports.chatSchema = zod_1.z.object({
    body: zod_1.z.object({
        mode: zod_1.z.string().optional(),
        currentMessage: zod_1.z.string().min(1).max(2000),
        messages: zod_1.z.array(zod_1.z.object({
            role: zod_1.z.enum(["user", "assistant"]),
            content: zod_1.z.string().max(4000),
        })).max(20),
        context: zod_1.z.string().optional(),
        language: zod_1.z.string().optional(),
    }).refine((data) => {
        const totalChars = data.messages.reduce((acc, msg) => acc + msg.content.length, 0);
        return totalChars <= 50000;
    }, { message: "Conversation history is too large" }),
});
const chatWithTutor = async (req, res) => {
    try {
        const { mode, messages, currentMessage, context, language } = req.body;
        const userId = req.user?.id || 'anonymous';
        const reply = await (0, ai_service_1.generateTutorResponse)(userId, mode, messages, currentMessage, context, language);
        return res.json({ success: true, reply });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: "AI Tutor is temporarily unavailable. Please try again.",
            code: "AI_PROVIDER_ERROR"
        });
    }
};
exports.chatWithTutor = chatWithTutor;
const createAiQuiz = async (req, res) => {
    try {
        const { topic, difficulty, numQuestions, language } = req.body;
        const userId = req.user?.id || 'anonymous';
        const quizData = await (0, ai_service_1.generateQuiz)(userId, topic, difficulty, numQuestions, language);
        // Save the generated quiz to the database (optional, or just return it to frontend)
        // For now, we'll just return it so the frontend can render it immediately
        return res.json({ success: true, quiz: quizData });
    }
    catch (error) {
        return res.status(500).json({ success: false, error: "AI Quiz generation is temporarily unavailable. Please try again.", code: "AI_PROVIDER_ERROR" });
    }
};
exports.createAiQuiz = createAiQuiz;
//# sourceMappingURL=ai.controller.js.map