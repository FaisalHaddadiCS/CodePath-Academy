import { jest, describe, it, expect, beforeEach, afterEach } from '@jest/globals';
import request from "supertest";
import express from "express";
import aiRoutes from "../src/routes/ai.routes";
import { GoogleGenAI } from "@google/genai";

// Mock the GenAI client
jest.mock("@google/genai", () => {
  const mockGenerateContent = jest.fn();
  return {
    GoogleGenAI: jest.fn().mockImplementation(() => {
      return {
        models: {
          generateContent: mockGenerateContent
        }
      };
    }),
    __mockGenerateContent: mockGenerateContent
  };
});

// @ts-ignore
import { __mockGenerateContent } from "@google/genai";

describe("AI Tutor Endpoint", () => {
  let app: express.Express;

  beforeEach(() => {
    jest.clearAllMocks();
    
    // Set a fake key for testing so getAiClient doesn't throw on init
    process.env.GEMINI_API_KEY = "test_key";

    app = express();
    app.use("/api/ai/chat", express.json({ limit: "256kb" }));
    app.use(express.json({ limit: "10kb" }));
    
    app.use((req, res, next) => {
      req.user = { id: "test-user-id", email: "test@example.com", role: "USER" };
      Object.defineProperty(req, 'ip', { value: "127.0.0.1" });
      next();
    });
    
    app.use("/api/ai", aiRoutes);

    // Global generic error handler
    app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "An unexpected error occurred" } });
    });
  });

  afterEach(() => {
    delete process.env.GEMINI_API_KEY;
  });

  it("returns HTTP 200 and success reply on successful generation", async () => {
    // @ts-ignore
    __mockGenerateContent.mockResolvedValue({ text: "Python is great." });

    const response = await request(app)
      .post("/api/ai/chat")
      .send({
        mode: "EXPLAIN",
        currentMessage: "What is Python?",
        messages: []
      });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      reply: "Python is great."
    });
  });

  it("returns safe structured error with expected status on provider failure", async () => {
    // @ts-ignore
    __mockGenerateContent.mockRejectedValue(new Error("Google AI Provider is down"));

    const response = await request(app)
      .post("/api/ai/chat")
      .send({
        mode: "EXPLAIN",
        currentMessage: "What is Python?",
        messages: []
      });

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      success: false,
      error: "AI Tutor is temporarily unavailable. Please try again.",
      code: "AI_PROVIDER_ERROR"
    });
    
    expect(response.body.stack).toBeUndefined();
    expect(response.body.message).toBeUndefined();
  });

  it("returns safe structured error on malformed provider response (empty)", async () => {
    // @ts-ignore
    __mockGenerateContent.mockResolvedValue({ text: "" });

    const response = await request(app)
      .post("/api/ai/chat")
      .send({
        mode: "EXPLAIN",
        currentMessage: "What is Python?",
        messages: []
      });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      reply: "I'm sorry, I couldn't generate a response."
    });
  });
  
  it("does not let provider exceptions reach global generic error handler", async () => {
    // @ts-ignore
    __mockGenerateContent.mockRejectedValue(new Error("Internal API Error from Gemini"));

    const response = await request(app)
      .post("/api/ai/chat")
      .send({
        mode: "EXPLAIN",
        currentMessage: "What is Python?",
        messages: []
      });

    expect(response.body.error).not.toEqual(expect.objectContaining({
      message: "An unexpected error occurred"
    }));
    
    expect(response.status).toBe(500);
    expect(response.body.code).toBe("AI_PROVIDER_ERROR");
  });
});
