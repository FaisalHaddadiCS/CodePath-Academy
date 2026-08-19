export interface ExecutionRequest {
  language: string;
  code: string;
  testCases: { input: string | null; expected: string }[];
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
export const executeCode = async (req: ExecutionRequest): Promise<ExecutionResult> => {
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
