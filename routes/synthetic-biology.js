import express from 'express';
import * as SBOL from 'sboljs';

const router = express.Router();
const sbol = new SBOL.SBOL();

router.post('/genetic-circuit-design', async (req, res) => {
  const { design } = req.body;
  const geneticCircuit = await sbol.design(design);
  res.json({ geneticCircuit });
});

router.post('/genetic-circuit-simulation', async (req, res) => {
  const { circuit } = req.body;
  const simulationResult = await sbol.simulate(circuit);
  res.json({ simulationResult });
});

router.post('/genetic-circuit-optimization', async (req, res) => {
  const { circuit, objectives } = req.body;
  const optimizedCircuit = await sbol.optimize(circuit, objectives);
  res.json({ optimizedCircuit });
});

export default router;
