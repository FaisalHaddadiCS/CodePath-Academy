"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = exports.signout = exports.signin = exports.signup = exports.signinSchema = exports.signupSchema = void 0;
const zod_1 = require("zod");
const db_1 = __importDefault(require("../utils/db"));
const auth_1 = require("../utils/auth");
exports.signupSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email(),
        password: zod_1.z.string().min(8).max(128).regex(/[A-Z]/).regex(/[a-z]/).regex(/[0-9]/).regex(/[^a-zA-Z0-9]/),
        firstName: zod_1.z.string().min(2, "Please enter your first and last name.").max(80),
        lastName: zod_1.z.string().min(2, "Please enter your first and last name.").max(80),
    }),
});
exports.signinSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email(),
        password: zod_1.z.string(),
    }),
});
const setAuthCookie = (res, token) => {
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });
};
const signup = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    try {
        const existingUser = await db_1.default.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ success: false, error: { code: "EMAIL_EXISTS", message: "An account with this email already exists." } });
        }
        const hashedPassword = await (0, auth_1.hashPassword)(password);
        const user = await db_1.default.user.create({
            data: {
                email,
                password: hashedPassword,
                profile: {
                    create: {
                        firstName,
                        lastName,
                    },
                },
            },
        });
        const token = (0, auth_1.generateToken)({ id: user.id, email: user.email, role: user.role });
        setAuthCookie(res, token);
        return res.status(201).json({
            success: true,
            data: {
                user: { id: user.id, email: user.email, role: user.role, firstName, lastName },
            },
        });
    }
    catch (error) {
        console.error("Register error:", error);
        return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Authentication is temporarily unavailable. Please try again later." } });
    }
};
exports.signup = signup;
const lockoutMap = new Map();
const signin = async (req, res) => {
    const { email, password } = req.body;
    const normalizedEmail = email.toLowerCase().trim();
    const lockoutKey = `${req.ip}_${normalizedEmail}`;
    const maxAttempts = parseInt(process.env.AUTH_FAILED_ATTEMPTS_MAX || "5", 10);
    const lockoutWindow = parseInt(process.env.AUTH_LOCKOUT_WINDOW_MS || "60000", 10);
    const state = lockoutMap.get(lockoutKey) || { count: 0, lockUntil: 0 };
    if (state.lockUntil > Date.now()) {
        return res.status(429).json({
            success: false,
            error: { code: "RATE_LIMITED", message: "Too many failed attempts. Please try again in a minute." }
        });
    }
    const handleFailedAttempt = () => {
        state.count += 1;
        if (state.count >= maxAttempts) {
            state.lockUntil = Date.now() + lockoutWindow;
        }
        lockoutMap.set(lockoutKey, state);
        return res.status(401).json({ success: false, error: { code: "INVALID_CREDENTIALS", message: "The email or password is incorrect." } });
    };
    try {
        const user = await db_1.default.user.findUnique({
            where: { email: normalizedEmail },
            include: { profile: true },
        });
        if (!user) {
            return handleFailedAttempt();
        }
        const isPasswordValid = await (0, auth_1.verifyPassword)(password, user.password);
        if (!isPasswordValid) {
            return handleFailedAttempt();
        }
        // Success - reset lockout
        lockoutMap.delete(lockoutKey);
        const token = (0, auth_1.generateToken)({ id: user.id, email: user.email, role: user.role });
        setAuthCookie(res, token);
        return res.json({
            success: true,
            data: {
                user: {
                    id: user.id,
                    email: user.email,
                    role: user.role,
                    firstName: user.profile?.firstName,
                    lastName: user.profile?.lastName,
                    avatarUrl: user.profile?.avatarUrl,
                },
            },
        });
    }
    catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Authentication is temporarily unavailable. Please try again later." } });
    }
};
exports.signin = signin;
const signout = async (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
    });
    return res.json({ success: true, message: "Signed out successfully" });
};
exports.signout = signout;
const getProfile = async (req, res) => {
    try {
        const user = await db_1.default.user.findUnique({
            where: { id: req.user.id },
            include: { profile: true },
        });
        if (!user) {
            return res.status(404).json({ success: false, error: { code: "NOT_FOUND", message: "User not found" } });
        }
        return res.json({
            success: true,
            data: {
                id: user.id,
                email: user.email,
                role: user.role,
                profile: user.profile,
                createdAt: user.createdAt,
            },
        });
    }
    catch (error) {
        return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Authentication is temporarily unavailable. Please try again later." } });
    }
};
exports.getProfile = getProfile;
//# sourceMappingURL=auth.controller.js.map