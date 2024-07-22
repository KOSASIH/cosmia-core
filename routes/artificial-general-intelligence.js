import express from 'express';
import * as AGI from 'agi.js';

const router = express.Router();
const agi = new AGI.AGI();

router.post('/cognitive-reasoning', async (req, res) => {
  const { knowledgeGraph } = req.body;
  const reasoningResult = await agi.reason(knowledgeGraph);
  res.json({ reasoningResult });
});

router.post('/learning-from-experience', async (req, res) => {
  const { experienceData } = req.body;
  const learnedKnowledge = await agi.learn(experienceData);
  res.json({ learnedKnowledge });
});

router.post('/natural-language-understanding', async (req, res) => {
  const { text } = req.body;
  const understandingResult = await agi.understand(text);
  res.json({ understandingResult });
});

export default router;
