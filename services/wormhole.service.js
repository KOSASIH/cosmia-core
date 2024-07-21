// wormhole.service.js
import { wormholeUtils } from '../utils/wormhole';

const wormholeService = {
  async createWormhole(origin, destination) {
    const wormhole = wormholeUtils.createWormhole(origin, destination);
    // Save wormhole to database
    return wormhole;
  },
  async stabilizeWormhole(wormholeId) {
    const wormhole = await getWormholeFromDatabase(wormholeId);
    const stabilizedResult = wormholeUtils.stabilizeWormhole(wormhole);
    return stabilizedResult;
  },
};

export default wormholeService;
