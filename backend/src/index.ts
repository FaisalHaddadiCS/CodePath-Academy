import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes";
import courseRoutes from "./routes/course.routes";
import quizRoutes from "./routes/quiz.routes";
import aiRoutes from "./routes/ai.routes";
import userRoutes from "./routes/user.routes";
import searchRoutes from "./routes/search.routes";
import challengeRoutes from "./routes/challenge.routes";
import { generalApiLimiter } from "./middlewares/rateLimiter.middleware";

const app = express();
const PORT = process.env.PORT || 5000;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "http://localhost:5173";

if (process.env.NODE_ENV === "production") {
  app.set('trust proxy', 1);
}

app.use(helmet({
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
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || origin === ALLOWED_ORIGIN || origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:')) {
      callback(null, true);
    } else {
      console.error(`CORS rejected origin: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use("/api/ai/chat", express.json({ limit: "256kb" }));
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

import { csrfOriginCheck } from "./middlewares/csrf.middleware";

// Apply rate limiter to all /api routes by default (can be overridden by stricter ones)
app.use("/api", generalApiLimiter);

// CSRF check for state-changing routes
app.use("/api", csrfOriginCheck);

app.get("/api/health", (req: express.Request, res: express.Response) => {
  res.json({ 
    status: "ok", 
    message: "CS Academy API is running",
    demoMode: process.env.AI_DEMO_MODE === 'true'
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/users", userRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/challenges", challengeRoutes);

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("Unhandled Error:", err.message);
  const status = err.status || err.statusCode || 500;
  res.status(status).json({ success: false, error: { code: "SERVER_ERROR", message: "An unexpected error occurred" } });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
