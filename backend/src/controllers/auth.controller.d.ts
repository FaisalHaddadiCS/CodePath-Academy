import { Request, Response } from "express";
import { z } from "zod";
export declare const signupSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodString;
        firstName: z.ZodString;
        lastName: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const signinSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const signup: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const signin: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const signout: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getProfile: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=auth.controller.d.ts.map