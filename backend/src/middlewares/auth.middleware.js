"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireRole = exports.requireAuth = void 0;
const auth_1 = require("../utils/auth");
const requireAuth = (req, res, next) => {
    let token = req.cookies?.token;
    if (!token && req.headers.authorization?.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
        return res.status(401).json({ success: false, error: { code: "UNAUTHORIZED", message: "Missing or invalid token" } });
    }
    try {
        const decoded = (0, auth_1.verifyToken)(token);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ success: false, error: { code: "UNAUTHORIZED", message: "Invalid or expired token" } });
    }
};
exports.requireAuth = requireAuth;
const requireRole = (role) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ success: false, error: { code: "UNAUTHORIZED", message: "Authentication required" } });
        }
        if (req.user.role !== role && req.user.role !== "ADMIN") {
            return res.status(403).json({ success: false, error: { code: "FORBIDDEN", message: "Insufficient permissions" } });
        }
        next();
    };
};
exports.requireRole = requireRole;
//# sourceMappingURL=auth.middleware.js.map