import { Request, Response, NextFunction } from "express";
import { ZodTypeAny, ZodError } from "zod";

export const validateRequest = (schema: ZodTypeAny) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const isDev = process.env.NODE_ENV !== "production";
        const errorMessage = error.issues && error.issues.length > 0
          ? error.issues[0]?.message || "Invalid request"
          : "Invalid request";

        return res.status(400).json({
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: errorMessage,
            details: isDev ? error.issues : undefined,
          },
        });
      }
      return res.status(500).json({ success: false, error: { code: "SERVER_ERROR", message: "Internal server error" } });
    }
  };
};
