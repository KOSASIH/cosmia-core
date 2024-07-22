import express from 'express';
import * as NLTK from 'nltk';
import * as spaCy from 'spacy';

const router = express.Router();
const nlp = new NLTK.NLP();
const spacy = new spaCy.SpaCy();

router.post('/sentiment-analysis', async (req, res) => {
  const { text } = req.body;
  const sentiment = await nlp.sentiment(text);
  res.json({ sentiment });
});

router.post('/entity-recognition', async (req, res) => {
  const { text } = req.body;
  const entities = await spacy.entities(text);
  res.json({ entities });
});

router.post('/language-translation', async (req, res) => {
  const { text, sourceLang, targetLang } = req.body;
  const translation = await nlp.translate(text, sourceLang, targetLang);
  res.json({ translation });
});

export default router;
