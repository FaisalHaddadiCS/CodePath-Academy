import { Request, Response } from "express";
import { z } from "zod";
export declare const chatSchema: z.ZodObject<{
    body: z.ZodObject<{
        mode: z.ZodOptional<z.ZodString>;
        currentMessage: z.ZodString;
        messages: z.ZodArray<z.ZodObject<{
            role: z.ZodEnum<{
                user: "user";
                assistant: "assistant";
            }>;
            content: z.ZodString;
        }, z.core.$strip>>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const chatWithTutor: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const createAiQuiz: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=ai.controller.d.ts.map