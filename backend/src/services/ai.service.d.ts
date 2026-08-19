export declare const generateTutorResponse: (userId: string, mode: string, messages: any[], userMessage: string, context?: any, language?: string) => Promise<string>;
export declare const generateQuiz: (userId: string, topic: string, difficulty: string, numQuestions: number, language?: string) => Promise<{
    title: string;
    questions: {
        question: string;
        type: string;
        options: string[];
        correctAnswer: number;
        id?: string | undefined;
        explanation?: string | undefined;
    }[];
    description?: string | undefined;
}>;
export declare const generateCodeReview: (userId: string, challenge: any, code: string, executionOutput: any) => Promise<string>;
//# sourceMappingURL=ai.service.d.ts.map