"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const course_controller_1 = require("../controllers/course.controller");
const progress_controller_1 = require("../controllers/progress.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
// Public routes for course discovery
router.get("/categories", course_controller_1.getCategories);
router.get("/", course_controller_1.getCourses);
router.get("/:id", course_controller_1.getCourseDetails);
// Protected routes (require auth to view lesson content)
router.get("/lessons/:id", auth_middleware_1.requireAuth, course_controller_1.getLessonDetails);
router.post("/progress", auth_middleware_1.requireAuth, progress_controller_1.updateProgress);
exports.default = router;
//# sourceMappingURL=course.routes.js.map