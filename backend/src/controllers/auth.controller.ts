import { Request, Response } from "express";
import { z } from "zod";
import prisma from "../utils/db";
import { hashPassword, verifyPassword, generateToken } from "../utils/auth";

export const signupSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8).max(128).regex(/[A-Z]/).regex(/[a-z]/).regex(/[0-9]/).regex(/[^a-zA-Z0-9]/),
    firstName: z.string().min(2, "Please enter your first and last name.").max(80),
    lastName: z.string().min(2, "Please enter your first and last name.").max(80),
  }),
});

export const signinSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string(),
  }),
});

const setAuthCookie = (res: Response, token: string) => {
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });
};

export const signup = async (req: Request, res: Response) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ success: false, error: { code: "EMAIL_EXISTS", message: "An account with this email already exists." } });
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
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

    const token = generateToken({ id: user.id, email: user.email, role: user.role });
    setAuthCookie(res, token);

    return res.status(201).json({
      success: true,
      data: {
        user: { id: user.id, email: user.email, role: user.role, firstName, lastName },
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Authentication is temporarily unavailable. Please try again later." } });
  }
};

// In-memory store for failed sign-ins
interface LockoutState {
  count: number;
  lockUntil: number;
}
const lockoutMap = new Map<string, LockoutState>();

export const signin = async (req: Request, res: Response) => {
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
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
      include: { profile: true },
    });

    if (!user) {
      return handleFailedAttempt();
    }

    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      return handleFailedAttempt();
    }

    // Success - reset lockout
    lockoutMap.delete(lockoutKey);

    const token = generateToken({ id: user.id, email: user.email, role: user.role });
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
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Authentication is temporarily unavailable. Please try again later." } });
  }
};

export const signout = async (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
  return res.json({ success: true, message: "Signed out successfully" });
};

export const getProfile = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.id },
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
        profile: (user as any).profile,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Authentication is temporarily unavailable. Please try again later." } });
  }
};
