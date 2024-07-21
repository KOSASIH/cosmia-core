// neuralNetwork.service.js
import { neuralNetworkUtils } from '../utils/neuralNetwork';

const neuralNetworkService = {
  async createNeuralNetwork(architecture) {
    const neuralNetwork = neuralNetworkUtils.createNeuralNetwork(architecture);
    // Save neural network to database
    return neuralNetwork;
  },
  async trainNeuralNetwork(neuralNetworkId, dataset) {
    const neuralNetwork = await getNeuralNetworkFromDatabase(neuralNetworkId);
    const trainedResult = neuralNetworkUtils.trainNeuralNetwork(neuralNetwork, dataset);
    return trainedResult;
  },
  async predictWithNeuralNetwork(neuralNetworkId, input) {
    const neuralNetwork = await getNeuralNetworkFromDatabase(neuralNetworkId);
    const predictionResult = neuralNetworkUtils.predictWithNeuralNetwork(neuralNetwork, input);
    return predictionResult;
  },
};

export default neuralNetworkService;
