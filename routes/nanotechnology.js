import express from 'express';
import * as Nano from 'nano.js';

const router = express.Router();
const nano = new Nano.Nano();

router.post('/molecular-modeling', async (req, res) => {
  const { moleculeData } = req.body;
  const molecularModel = await nano.model(moleculeData);
  res.json({ molecularModel });
});

router.post('/nanoscale-simulation', async (req, res) => {
  const { simulationData } = req.body;
  const simulationResult = await nano.simulate(simulationData);
  res.json({ simulationResult });
});

router.post('/nanofabrication', async (req, res) => {
  const { fabricationData } = req.body;
  const fabricationResult = await nano.fabricate(fabricationData);
  res.json({ fabricationResult });
});

export default router;
