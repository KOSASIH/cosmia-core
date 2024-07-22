import express from 'express';
import * as BM from 'biomechanics.js';

const router = express.Router();
const bm = new BM.Biomechanics();

router.post('/musculoskeletal-modeling', async (req, res) => {
  const { model } = req.body;
  const musculoskeletalModel = await bm.model(model);
  res.json({ musculoskeletalModel });
});

router.post('/movement-analysis', async (req, res) => {
  const { data } = req.body;
  const movementAnalysis = await bm.analyze(data);
  res.json({ movementAnalysis });
});

router.post('/prosthetic-design', async (req, res) => {
  const { design } = req.body;
  const prostheticDesign = await bm.design(design);
  res.json({ prostheticDesign });
});

export default router;
