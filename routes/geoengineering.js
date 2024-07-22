import express from 'express';
import * as GE from 'geoengineering.js';

const router = express.Router();
const ge = new GE.Geoengineering();

router.post('/climate-modeling', async (req, res) => {
  const { model } = req.body;
  const climateModel = await ge.model(model);
  res.json({ climateModel });
});

router.post('/carbon-capture-simulation', async (req, res) => {
  const { simulation } = req.body;
  const carbonCaptureSimulation = await ge.simulate(simulation);
  res.json({ carbonCaptureSimulation });
});

router.post('/geoengineering-strategy-optimization', async (req, res) => {
  const { strategy } = req.body;
  const optimizedStrategy = await ge.optimize(strategy);
  res.json({ optimizedStrategy });
});

export default router;
