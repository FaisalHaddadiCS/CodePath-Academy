"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeCode = void 0;
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
const executeCode = async (req) => {
    // Validate limits (even if we are mocking execution, we enforce interface limits)
    if (req.code.length > 5000) {
        return { status: 'ERROR', message: 'Code size limit exceeded', tests: [] };
    }
    if (req.language !== 'python') {
        return { status: 'ERROR', message: 'Only python is supported currently', tests: [] };
    }
    // MOCKED SECURE EXECUTION
    // In a production environment, this function would send `req` to an isolated microservice.
    return {
        status: 'SUCCESS',
        message: 'MVP Security Constraint: Code execution environment is not configured yet. Your code was received but not executed directly on the host.',
        tests: req.testCases.map(tc => ({
            passed: false,
            output: 'Sandbox not configured',
            expected: tc.expected
        }))
    };
};
exports.executeCode = executeCode;
//# sourceMappingURL=execution.service.js.map