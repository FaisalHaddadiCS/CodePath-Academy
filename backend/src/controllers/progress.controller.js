"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProgress = void 0;
const db_1 = __importDefault(require("../utils/db"));
const zod_1 = require("zod");
const ProgressSchema = zod_1.z.object({
    body: zod_1.z.object({
        courseId: zod_1.z.string().min(1),
        lessonId: zod_1.z.string().min(1),
        completed: zod_1.z.boolean().optional()
    })
});
const updateProgress = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId)
            return res.status(401).json({ success: false, error: { code: "UNAUTHORIZED", message: "Unauthorized" } });
        const validation = ProgressSchema.safeParse(req);
        if (!validation.success) {
            return res.status(400).json({ success: false, error: { code: "BAD_REQUEST", message: "Invalid payload format" } });
        }
        const { courseId, lessonId, completed } = validation.data.body;
        const progress = await db_1.default.userProgress.upsert({
            where: {
                userId_courseId_lessonId: {
                    userId,
                    courseId,
                    lessonId
                }
            },
            update: {
                completed: completed || true,
                lastAccessed: new Date()
            },
            create: {
                userId,
                courseId,
                lessonId,
                completed: completed || true
            }
        });
        // Add XP if completed
        if (completed) {
            await db_1.default.user.update({
                where: { id: userId },
                data: {
                    xp: { increment: 50 } // Award 50 XP per lesson completion
                }
            });
        }
        return res.json({ success: true, data: progress });
    }
    catch (error) {
        console.error("Update Progress Error:", error);
        return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Failed to update progress" } });
    }
};
exports.updateProgress = updateProgress;
//# sourceMappingURL=progress.controller.js.map