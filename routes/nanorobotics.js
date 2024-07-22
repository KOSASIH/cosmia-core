import express from 'express';
import * as NR from 'nanorobotics.js';

const router = express.Router();
const nr = new NR.Nanorobotics();

router.post('/nanorobot-design', async (req, res) => {
  const { design } = req.body;
  const nanorobotDesign = await nr.design(design);
  res.json({ nanorobotDesign });
});

router.post('/nanorobot-simulation', async (req, res) => {
  const { simulation } = req.body;
  const nanorobotSimulation = await nr.simulate(simulation);
  res.json({ nanorobotSimulation });
});

router.post('/nanorobot-control', async (req, res) => {
  const { control } = req.body;
  const nanorobotControl = await nr.control(control);
  res.json({ nanorobotControl });
});

export default router;
