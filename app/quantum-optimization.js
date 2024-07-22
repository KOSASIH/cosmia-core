import { QuantumCircuit } from 'qiskit';

const circuit = new QuantumCircuit(5, 5);

async function optimizeFunction(functionToOptimize) {
  const parameters = [];
  for (let i = 0; i < 5; i++) {
    parameters.push(circuit.ry(Math.PI / 2, i));
  }
  const optimizedParameters = await circuit.optimize(functionToOptimize, parameters);
  return optimizedParameters;
}

export default optimizeFunction;
