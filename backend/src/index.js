"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const course_routes_1 = __importDefault(require("./routes/course.routes"));
const quiz_routes_1 = __importDefault(require("./routes/quiz.routes"));
const ai_routes_1 = __importDefault(require("./routes/ai.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const search_routes_1 = __importDefault(require("./routes/search.routes"));
const challenge_routes_1 = __importDefault(require("./routes/challenge.routes"));
const rateLimiter_middleware_1 = require("./middlewares/rateLimiter.middleware");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "http://localhost:5173";
if (process.env.NODE_ENV === "production") {
    app.set('trust proxy', 1);
}
app.use((0, helmet_1.default)({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'"],
        },
    },
    hsts: process.env.NODE_ENV === "production" ? { maxAge: 31536000, includeSubDomains: true } : false,
}));
app.use((req, res, next) => {
    res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
    next();
});
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        if (!origin || origin === ALLOWED_ORIGIN) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));
app.use("/api/ai/chat", express_1.default.json({ limit: "256kb" }));
app.use(express_1.default.json({ limit: "10kb" }));
app.use((0, cookie_parser_1.default)());
const csrf_middleware_1 = require("./middlewares/csrf.middleware");
// Apply rate limiter to all /api routes by default (can be overridden by stricter ones)
app.use("/api", rateLimiter_middleware_1.generalApiLimiter);
// CSRF check for state-changing routes
app.use("/api", csrf_middleware_1.csrfOriginCheck);
app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        message: "CS Academy API is running",
        demoMode: process.env.AI_DEMO_MODE === 'true'
    });
});
app.use("/api/auth", auth_routes_1.default);
app.use("/api/courses", course_routes_1.default);
app.use("/api/quizzes", quiz_routes_1.default);
app.use("/api/ai", ai_routes_1.default);
app.use("/api/users", user_routes_1.default);
app.use("/api/search", search_routes_1.default);
app.use("/api/challenges", challenge_routes_1.default);
// Global error handler
app.use((err, req, res, next) => {
    console.error("Unhandled Error:", err.message);
    const status = err.status || err.statusCode || 500;
    res.status(status).json({ success: false, error: { code: "SERVER_ERROR", message: "An unexpected error occurred" } });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map