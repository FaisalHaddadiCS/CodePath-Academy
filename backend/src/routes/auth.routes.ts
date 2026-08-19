import { Router } from "express";
import { signup, signin, signout, getProfile, signupSchema, signinSchema } from "../controllers/auth.controller";
import { validateRequest } from "../middlewares/validate.middleware";
import { requireAuth } from "../middlewares/auth.middleware";
import { authLimiter } from "../middlewares/rateLimiter.middleware";

const router = Router();

router.post("/signup", authLimiter, validateRequest(signupSchema), signup);
router.post("/signin", validateRequest(signinSchema), signin);
router.post("/signout", signout);
router.get("/me", requireAuth, getProfile);

export default router;
