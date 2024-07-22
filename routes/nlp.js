import express from 'express';
import * as natural from 'natural';
import * as spaCy from 'pacy';

const router = express.Router();
const nlp = natural.NLP();
const spacy = spaCy.load('en_core_web_sm');

router.post('/sentiment-analysis', (req, res) => {
  const { text } = req.body;
  const sentiment = nlp.sentiment(text);
  res.json({ sentiment });
});

router.post('/entity-recognition', (req, res) => {
  const { text } = req.body;
  const entities = spacy(text);
  res.json({ entities });
});

export default router;
