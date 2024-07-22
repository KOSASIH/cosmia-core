import express from 'express';
import * as Qiskit from 'qiskit';

const router = express.Router();
const { QuantumCircuit, execute } = Qiskit;

router.post('/run-quantum-circuit', async (req, res) => {
  const { circuitData } = req.body;
  const circuit = new QuantumCircuit(circuitData);
  const job = await execute(circuit, 'ibmq_qasm_simulator');
  const result = await job.result();
  res.json({ result });
});

export default router;
