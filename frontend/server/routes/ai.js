const express = require('express');
const router = express.Router();
const geminiService = require('../services/geminiService');

router.post('/chat', async (req, res) => {
  try {
    const { message, conversationHistory, lessonContext } = req.body;
    
    if (!geminiService.hasKey) {
      return res.status(503).json({ error: 'Live mode unavailable (No API Key)' });
    }

    const responseText = await geminiService.generateChatResponse(message, conversationHistory, lessonContext);
    res.json({ response: responseText });
  } catch (error) {
    console.error('Chat API Error:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

router.post('/generate-quiz', async (req, res) => {
  try {
    const { topic, difficulty, count, scopeContext } = req.body;

    if (!geminiService.hasKey) {
      return res.status(503).json({ error: 'Live mode unavailable (No API Key)' });
    }

    const quiz = await geminiService.generateQuiz(topic, difficulty, count, scopeContext);
    res.json(quiz);
  } catch (error) {
    console.error('Quiz Generation API Error:', error);
    res.status(500).json({ error: 'Failed to generate quiz' });
  }
});

module.exports = router;
