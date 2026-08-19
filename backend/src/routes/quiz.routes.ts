import { Router } from "express";
import { getQuizzes, getQuizDetails, submitQuiz } from "../controllers/quiz.controller";
import { requireAuth } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", getQuizzes);
router.get("/:id", requireAuth, getQuizDetails);
router.post("/:id/submit", requireAuth, submitQuiz);

export default router;
