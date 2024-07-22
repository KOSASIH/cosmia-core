import express from 'express';
import * as brain from 'brain.js';

const router = express.Router();
const net = new brain.NeuralNetwork();

router.post('/train-neural-network', (req, res) => {
  const { trainingData } = req.body;
  net.train(trainingData);
  res.json({ trainingError: net.error });
});

router.post('/make-prediction', (req, res) => {
  const { inputData } = req.body;
  const output = net.run(inputData);
  res.json({ output });
});

export default router;
