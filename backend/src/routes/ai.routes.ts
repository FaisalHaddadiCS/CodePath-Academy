import express, { Router } from "express";
import { chatWithTutor, createAiQuiz, chatSchema } from "../controllers/ai.controller";
import { requireAuth } from "../middlewares/auth.middleware";
import { aiChatLimiter, aiQuizLimiter } from "../middlewares/rateLimiter.middleware";
import { validateRequest } from "../middlewares/validate.middleware";

const router = Router();

router.post("/chat", express.json({ limit: "256kb" }), aiChatLimiter, validateRequest(chatSchema), chatWithTutor);
router.post("/generate-quiz", requireAuth, aiQuizLimiter, createAiQuiz);

export default router;
