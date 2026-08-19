import { Router } from "express";
import { getDashboard } from "../controllers/user.controller";
import { requireAuth } from "../middlewares/auth.middleware";

const router = Router();

router.get("/dashboard", requireAuth, getDashboard);

export default router;
