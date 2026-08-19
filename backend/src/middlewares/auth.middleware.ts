import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/auth";

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  let token = req.cookies?.token;
  if (!token && req.headers.authorization?.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ success: false, error: { code: "UNAUTHORIZED", message: "Missing or invalid token" } });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded as any;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, error: { code: "UNAUTHORIZED", message: "Invalid or expired token" } });
  }
};

export const requireRole = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ success: false, error: { code: "UNAUTHORIZED", message: "Authentication required" } });
    }

    if (req.user.role !== role && req.user.role !== "ADMIN") {
      return res.status(403).json({ success: false, error: { code: "FORBIDDEN", message: "Insufficient permissions" } });
    }

    next();
  };
};
