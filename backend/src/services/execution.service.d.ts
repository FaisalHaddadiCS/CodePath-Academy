export interface ExecutionRequest {
    language: string;
    code: string;
    testCases: {
        input: string | null;
        expected: string;
    }[];
}
export interface ExecutionResult {
    status: 'SUCCESS' | 'ERROR' | 'TIMEOUT';
    message: string;
    tests: {
        passed: boolean;
        output: string;
        expected: string;
        error?: string;
    }[];
}
/**
 * Executes code in a secure, isolated sandbox.
 *
 * MVP SECURITY OVERRIDE:
 * This environment currently lacks a configured Docker/Piston sandbox.
 * To adhere strictly to security requirements, we MUST NOT execute untrusted
 * user code via eval() or child_process inside the main Node process.
 *
 * Therefore, this abstraction returns a safe fallback message.
 */
export declare const executeCode: (req: ExecutionRequest) => Promise<ExecutionResult>;
//# sourceMappingURL=execution.service.d.ts.map