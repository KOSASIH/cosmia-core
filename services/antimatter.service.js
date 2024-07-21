// antimatter.service.js
import { antimatterUtils } from '../utils/antimatter';

const antimatterService = {
  async createAntimatter(type) {
    const antimatter = antimatterUtils.createAntimatter(type);
    // Save antimatter to database
    return antimatter;
  },
  async annihilateAntimatter(antimatterId) {
    const antimatter = await getAntimatterFromDatabase(antimatterId);
    const annihilationResult = antimatterUtils.annihilateAntimatter(antimatter);
    return annihilationResult;
  },
};

export default antimatterService;
