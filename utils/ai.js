// ai.js
import * as brain from 'brain.js';

const aiUtils = {
  trainNeuralNetwork: (data) => {
    const net = new brain.NeuralNetwork();
    net.train(data);
    return net;
  },
  predict: (net, input) => {
    return net.run(input);
  },
};

export default aiUtils;
