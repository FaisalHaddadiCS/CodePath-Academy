import { Router } from "express";
import { getCategories, getCourses, getCourseDetails, getLessonDetails } from "../controllers/course.controller";
import { updateProgress } from "../controllers/progress.controller";
import { requireAuth } from "../middlewares/auth.middleware";

const router = Router();

// Public routes for course discovery
router.get("/categories", getCategories);
router.get("/", getCourses);
router.get("/:id", getCourseDetails);

// Protected routes (require auth to view lesson content)
router.get("/lessons/:id", requireAuth, getLessonDetails);
router.post("/progress", requireAuth, updateProgress);

export default router;
