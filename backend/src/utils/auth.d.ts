export declare const hashPassword: (password: string) => Promise<string>;
export declare const verifyPassword: (password: string, hash: string) => Promise<boolean>;
export declare const generateToken: (payload: object) => string;
export declare const verifyToken: (token: string) => any;
//# sourceMappingURL=auth.d.ts.map