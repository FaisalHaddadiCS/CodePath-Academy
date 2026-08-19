const { GoogleGenAI } = require('@google/genai');

let ai;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
}

async function generateChatResponse(message, conversationHistory, lessonContext) {
  if (!ai) {
    throw new Error('Gemini API key is not configured');
  }

  const systemPrompt = `You are the CodePath Academy AI Tutor. You help computer science students understand concepts clearly. 
${lessonContext ? `The student is currently studying: ${lessonContext}.` : ''}
Provide clear, educational responses with practical code examples where appropriate. 
Keep responses focused and pedagogically sound.`;

  let history = conversationHistory.map(m => {
    return `${m.role === 'user' ? 'User' : 'Tutor'}: ${m.content}`;
  }).join('\n');

  const prompt = `${systemPrompt}\n\nHistory:\n${history}\n\nUser: ${message}\nTutor:`;

  const response = await ai.models.generateContent({
    model: 'gemini-3.5-flash',
    contents: prompt,
  });

  return response.text;
}

async function generateQuiz(topic, difficulty, count, scopeContext) {
  if (!ai) {
    throw new Error('Gemini API key is not configured');
  }

  const systemPrompt = `You are an expert computer science educator. 
Create a quiz about ${topic} at a ${difficulty} level with exactly ${count} questions.
Context: ${scopeContext}

Return ONLY a valid JSON object matching this schema exactly, with NO markdown formatting, NO backticks, and NO additional text:
{
  "title": "Generated Quiz Title",
  "topic": "${topic}",
  "difficulty": "${difficulty}",
  "questions": [
    {
      "id": "unique-id-1",
      "question": "Question text",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0,
      "explanation": "Explanation for the correct answer."
    }
  ]
}

Rules:
- Exactly 4 plausible options per question.
- correctAnswer must be 0, 1, 2, or 3.
- Do NOT generate questions outside the topic context.
- Use basic definitions and concepts before trick questions.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3.5-flash',
    contents: systemPrompt,
  });

  let raw = response.text.trim();
  if (raw.startsWith('```json')) {
    raw = raw.substring(7);
  } else if (raw.startsWith('```')) {
    raw = raw.substring(3);
  }
  if (raw.endsWith('```')) {
    raw = raw.substring(0, raw.length - 3);
  }

  return JSON.parse(raw);
}

module.exports = {
  generateChatResponse,
  generateQuiz,
  hasKey: !!process.env.GEMINI_API_KEY
};
