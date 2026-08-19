"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csrfOriginCheck = void 0;
const csrfOriginCheck = (req, res, next) => {
    if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(req.method)) {
        const origin = req.headers.origin || req.headers.referer;
        const allowedOrigin = process.env.ALLOWED_ORIGIN || "http://localhost:5173";
        if (!origin) {
            if (process.env.NODE_ENV !== 'production') {
                // Allow missing origin in development for local tools
                return next();
            }
            else {
                return res.status(403).json({
                    success: false,
                    error: { code: "FORBIDDEN", message: "Missing Origin or Referer" }
                });
            }
        }
        try {
            const originUrl = new URL(origin);
            const allowedUrl = new URL(allowedOrigin);
            if (originUrl.protocol !== allowedUrl.protocol ||
                originUrl.hostname !== allowedUrl.hostname ||
                originUrl.port !== allowedUrl.port) {
                return res.status(403).json({
                    success: false,
                    error: { code: "FORBIDDEN", message: "Invalid Origin or Referer" }
                });
            }
        }
        catch (error) {
            return res.status(403).json({
                success: false,
                error: { code: "FORBIDDEN", message: "Malformed Origin or Referer" }
            });
        }
    }
    next();
};
exports.csrfOriginCheck = csrfOriginCheck;
//# sourceMappingURL=csrf.middleware.js.map