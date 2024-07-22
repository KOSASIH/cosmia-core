import express from 'express';
import * as Nengo from 'nengo';

const router = express.Router();
const nengo = new Nengo.Nengo();

router.post('/neural-network-simulation', async (req, res) => {
  const { network } = req.body;
  const simulationResult = await nengo.simulate(network);
  res.json({ simulationResult });
});

router.post('/spiking-neural-network-execution', async (req, res) => {
  const { network, inputs } = req.body;
  const executionResult = await nengo.execute(network, inputs);
  res.json({ executionResult });
});

router.post('/neuromorphic-learning', async (req, res) => {
  const { network, data } = req.body;
  const learningResult = await nengo.learn(network, data);
  res.json({ learningResult });
});

export default router;
