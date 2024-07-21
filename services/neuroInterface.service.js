// neuroInterface.service.js
import { neuroInterfaceUtils } from '../utils/neuroInterface';

const neuroInterfaceService = {
  async createNeuroInterface(brainSignals) {
    const neuroInterface = neuroInterfaceUtils.createNeuroInterface(brainSignals);
    // Save neuro interface to database
    return neuroInterface;
  },
  async readBrainSignals(neuroInterfaceId) {
    const neuroInterface = await getNeuroInterfaceFromDatabase(neuroInterfaceId);
    const brainSignals = neuroInterfaceUtils.readBrainSignals(neuroInterface);
    return brainSignals;
  },
};

export default neuroInterfaceService;
