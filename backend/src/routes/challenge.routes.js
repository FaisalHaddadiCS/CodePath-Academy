"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const challenge_controller_1 = require("../controllers/challenge.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const router = (0, express_1.Router)();
// Stricter rate limits for execution and AI
const executeLimiter = (0, express_rate_limit_1.default)({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 10, // Limit each IP to 10 execute requests per windowMs
    message: { success: false, error: { message: "Too many execution requests from this IP, please try again after a minute" } }
});
router.get("/", auth_middleware_1.requireAuth, challenge_controller_1.getChallenges);
router.get("/:id", auth_middleware_1.requireAuth, challenge_controller_1.getChallengeDetails);
router.post("/:id/run", auth_middleware_1.requireAuth, executeLimiter, challenge_controller_1.runCode);
router.post("/:id/analyze", auth_middleware_1.requireAuth, executeLimiter, challenge_controller_1.analyzeCode);
exports.default = router;
//# sourceMappingURL=challenge.routes.js.map