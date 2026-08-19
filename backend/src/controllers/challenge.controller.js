"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeCode = exports.runCode = exports.getChallengeDetails = exports.getChallenges = void 0;
const db_1 = __importDefault(require("../utils/db"));
const execution_service_1 = require("../services/execution.service");
const ai_service_1 = require("../services/ai.service");
const getChallenges = async (req, res) => {
    try {
        const challenges = await db_1.default.codingChallenge.findMany({
            include: {
                lesson: {
                    select: { title: true }
                }
            }
        });
        return res.json({ success: true, data: challenges });
    }
    catch (error) {
        return res.status(500).json({ success: false, error: { message: "Failed to fetch challenges" } });
    }
};
exports.getChallenges = getChallenges;
const getChallengeDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const challenge = await db_1.default.codingChallenge.findUnique({
            where: { id },
            include: {
                lesson: { select: { title: true, id: true, moduleId: true } },
                testCases: {
                    where: { isHidden: false }, // DO NOT EXPOSE HIDDEN TESTS
                    select: { id: true, input: true, expected: true }
                }
            }
        });
        if (!challenge) {
            return res.status(404).json({ success: false, error: { message: "Challenge not found" } });
        }
        return res.json({ success: true, data: challenge });
    }
    catch (error) {
        return res.status(500).json({ success: false, error: { message: "Failed to fetch challenge details" } });
    }
};
exports.getChallengeDetails = getChallengeDetails;
const runCode = async (req, res) => {
    try {
        const id = req.params.id;
        const { code } = req.body;
        const userId = req.user?.id;
        if (!userId || !code)
            return res.status(400).json({ success: false, error: { code: "BAD_REQUEST", message: "Invalid request" } });
        const challenge = await db_1.default.codingChallenge.findUnique({
            where: { id },
            include: { testCases: true }
        });
        if (!challenge) {
            return res.status(404).json({ success: false, error: { code: "NOT_FOUND", message: "Challenge not found" } });
        }
        const executionResult = await (0, execution_service_1.executeCode)({
            language: challenge.language,
            code,
            testCases: challenge.testCases.map((tc) => ({ input: tc.input, expected: tc.expected }))
        });
        // Save attempt (whether passed or failed)
        const allPassed = executionResult.tests.length > 0 && executionResult.tests.every(t => t.passed);
        await db_1.default.challengeAttempt.create({
            data: {
                userId,
                challengeId: id,
                code,
                passed: allPassed
            }
        });
        let xpEarned = 0;
        if (allPassed) {
            // Check if already completed to prevent farming
            const existingCompletion = await db_1.default.challengeCompletion.findUnique({
                where: { userId_challengeId: { userId, challengeId: id } }
            });
            if (!existingCompletion) {
                xpEarned = challenge.xpReward;
                await db_1.default.$transaction([
                    db_1.default.challengeCompletion.create({
                        data: { userId, challengeId: id, xpEarned }
                    }),
                    db_1.default.user.update({
                        where: { id: userId },
                        data: { xp: { increment: xpEarned } }
                    })
                ]);
            }
        }
        // Ensure hidden test expected outputs are stripped from the response
        const safeTestsResult = executionResult.tests.map((t, idx) => {
            const isHidden = challenge.testCases[idx].isHidden;
            return {
                passed: t.passed,
                output: t.output,
                expected: isHidden ? "HIDDEN" : t.expected,
                error: t.error
            };
        });
        return res.json({
            success: true,
            data: {
                status: executionResult.status,
                message: executionResult.message,
                tests: safeTestsResult,
                xpEarned
            }
        });
    }
    catch (error) {
        return res.status(500).json({ success: false, error: { message: "Execution failed" } });
    }
};
exports.runCode = runCode;
const analyzeCode = async (req, res) => {
    try {
        const id = req.params.id;
        const { code, output } = req.body;
        const userId = req.user?.id;
        if (!userId || !code)
            return res.status(400).json({ success: false, error: { message: "Invalid request" } });
        const challenge = await db_1.default.codingChallenge.findUnique({
            where: { id },
            include: { lesson: true }
        });
        if (!challenge)
            return res.status(404).json({ success: false, error: { message: "Challenge not found" } });
        const reviewMessage = await (0, ai_service_1.generateCodeReview)(userId, challenge, code, output);
        return res.json({ success: true, data: { message: reviewMessage } });
    }
    catch (error) {
        console.error("AI Analysis Error:", error);
        return res.status(500).json({ success: false, error: { message: "AI analysis failed" } });
    }
};
exports.analyzeCode = analyzeCode;
//# sourceMappingURL=challenge.controller.js.map