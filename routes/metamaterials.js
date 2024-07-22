import express from 'express';
import * as MM from 'metamaterials.js';

const router = express.Router();
const mm = new MM.Metamaterials();

router.post('/metamaterial-design', async (req, res) => {
  const { design } = req.body;
  const metamaterial = await mm.design(design);
  res.json({ metamaterial });
});

router.post('/metamaterial-simulation', async (req, res) => {
  const { metamaterial } = req.body;
  const simulationResult = await mm.simulate(metamaterial);
  res.json({ simulationResult });
});

router.post('/metamaterial-fabrication', async (req, res) => {
  const { metamaterial } = req.body;
  const fabricationResult = await mm.fabricate(metamaterial);
  res.json({ fabricationResult });
});

export default router;
