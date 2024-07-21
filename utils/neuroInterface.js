// neuroInterface.js
import * as NeuroInterface from 'neuro-interface';

const neuroInterfaceUtils = {
  createNeuroInterface: (brainSignals) => {
    return new NeuroInterface.NeuroInterface(brainSignals);
  },
  readBrainSignals: (neuroInterface) => {
    return neuroInterface.read();
  },
};

export default neuroInterfaceUtils;
