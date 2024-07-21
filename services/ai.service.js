// ai.service.js
import { aiUtils } from '../utils/ai';

const aiService = {
  async trainModel(data) {
    const net = aiUtils.trainNeuralNetwork(data);
    // Save model to database
    return net;
  },
  async predict(input) {
    const net = await getModelFromDatabase();
    const output = aiUtils.predict(net, input);
    return output;
  },
};

export default aiService;
