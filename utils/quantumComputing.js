// quantumComputing.js
import * as QuantumComputer from 'quantum-computer';

const quantumComputingUtils = {
  createQuantumComputer: (qubits) => {
    return new QuantumComputer.QuantumComputer(qubits);
  },
  executeQuantumAlgorithm: (quantumComputer, algorithm) => {
    return quantumComputer.execute(algorithm);
  },
};

export default quantumComputingUtils;
