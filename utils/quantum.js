// quantum.js
import * as Qiskit from 'qiskit';

const quantumUtils = {
  createQuantumCircuit: (numQubits) => {
    return new Qiskit.QuantumCircuit(numQubits);
  },
  executeQuantumCircuit: (circuit) => {
    const backend = new Qiskit.Aer.get_backend('qasm_simulator');
    const job = backend.run(circuit);
    return job.result();
  },
};

export default quantumUtils;
