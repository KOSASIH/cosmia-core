// neuralNetwork.js
import * as NeuralNetwork from 'neural-network';

const neuralNetworkUtils = {
  createNeuralNetwork: (architecture) => {
    return new NeuralNetwork.NeuralNetwork(architecture);
  },
  trainNeuralNetwork: (neuralNetwork, dataset) => {
    return neuralNetwork.train(dataset);
  },
  predictWithNeuralNetwork: (neuralNetwork, input) => {
    return neuralNetwork.predict(input);
  },
};

export default neuralNetworkUtils;
