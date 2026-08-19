"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const quiz_controller_1 = require("../controllers/quiz.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.get("/", quiz_controller_1.getQuizzes);
router.get("/:id", auth_middleware_1.requireAuth, quiz_controller_1.getQuizDetails);
router.post("/:id/submit", auth_middleware_1.requireAuth, quiz_controller_1.submitQuiz);
exports.default = router;
//# sourceMappingURL=quiz.routes.js.map