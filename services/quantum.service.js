// quantum.service.js
import { quantumUtils } from '../utils/quantum';

const quantumService = {
  async executeQuantumAlgorithm(algorithm) {
    const circuit = quantumUtils.createQuantumCircuit(algorithm.numQubits);
    algorithm.gates.forEach((gate) => {
      circuit.addGate(gate);
    });
    const result = await quantumUtils.executeQuantumCircuit(circuit);
    return result;
  },
};

export default quantumService;
