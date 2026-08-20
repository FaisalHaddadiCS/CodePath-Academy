import { Request, Response, NextFunction } from "express";

export const csrfOriginCheck = (req: Request, res: Response, next: NextFunction) => {
  if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(req.method)) {
    const origin = req.headers.origin || req.headers.referer;
    const allowedOrigin = process.env.ALLOWED_ORIGIN || "http://localhost:5173";
    
    if (!origin) {
      if (process.env.NODE_ENV !== 'production') {
        // Allow missing origin in development for local tools
        return next();
      } else {
        return res.status(403).json({
          success: false,
          error: { code: "FORBIDDEN", message: "Missing Origin or Referer" }
        });
      }
    }

    try {
      const originUrl = new URL(origin);
      const allowedUrl = new URL(allowedOrigin);

      if (
        originUrl.protocol !== allowedUrl.protocol ||
        (originUrl.hostname !== allowedUrl.hostname && originUrl.hostname !== 'localhost' && originUrl.hostname !== '127.0.0.1') ||
        (originUrl.port !== allowedUrl.port && originUrl.hostname !== 'localhost' && originUrl.hostname !== '127.0.0.1')
      ) {
        return res.status(403).json({
          success: false,
          error: { code: "FORBIDDEN", message: "Invalid Origin or Referer" }
        });
      }
    } catch (error) {
      return res.status(403).json({
        success: false,
        error: { code: "FORBIDDEN", message: "Malformed Origin or Referer" }
      });
    }
  }
  next();
};
