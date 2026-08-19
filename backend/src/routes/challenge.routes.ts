import { Router } from "express";
import { getChallenges, getChallengeDetails, runCode, analyzeCode } from "../controllers/challenge.controller";
import { requireAuth } from "../middlewares/auth.middleware";
import rateLimit from "express-rate-limit";

const router = Router();

// Stricter rate limits for execution and AI
const executeLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10, // Limit each IP to 10 execute requests per windowMs
  message: { success: false, error: { message: "Too many execution requests from this IP, please try again after a minute" } }
});

router.get("/", requireAuth, getChallenges);
router.get("/:id", requireAuth, getChallengeDetails);
router.post("/:id/run", requireAuth, executeLimiter, runCode);
router.post("/:id/analyze", requireAuth, executeLimiter, analyzeCode);

export default router;
