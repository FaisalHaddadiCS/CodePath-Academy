import rateLimit from "express-rate-limit";

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP+Email to 5 auth requests per window
  keyGenerator: (req) => {
    const key = req.body?.email ? `${req.ip}_${req.body.email}` : (req.ip || 'unknown');
    return `auth_${key}`;
  },
  message: {
    success: false,
    error: {
      code: "RATE_LIMITED",
      message: "Too many authentication attempts, please try again after 15 minutes",
    },
  },
  skipSuccessfulRequests: true,
  standardHeaders: true,
  legacyHeaders: false,
});

export const aiChatLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 20, // Limit each IP to 20 chat requests per minute
  keyGenerator: (req) => `chat_${req.ip}`,
  message: {
    success: false,
    error: {
      code: "RATE_LIMITED",
      message: "Too many AI chat requests, please slow down.",
    },
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const aiQuizLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 quiz generation requests per 15 mins
  keyGenerator: (req) => `quiz_${req.ip}`,
  message: {
    success: false,
    error: {
      code: "RATE_LIMITED",
      message: "Too many AI quizzes generated, please try again later.",
    },
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const generalApiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300, // Safe higher limit for normal browsing
  keyGenerator: (req) => `api_${req.ip}`,
  message: {
    success: false,
    error: {
      code: "RATE_LIMITED",
      message: "Too many requests, please try again later",
    },
  },
  standardHeaders: true,
  legacyHeaders: false,
});
