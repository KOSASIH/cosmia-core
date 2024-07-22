import express from 'express';
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

const router = express.Router();
const model = await cocoSsd.load();

router.post('/object-detection', async (req, res) => {
  const { image } = req.body;
  const predictions = await model.detect(image);
  res.json({ predictions });
});

export default router;
