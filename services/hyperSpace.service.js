// hyperSpace.service.js
import { hyperSpaceUtils } from '../utils/hyperSpace';

const hyperSpaceService = {
  async createHyperSpacePortal(location) {
    const portal = hyperSpaceUtils.createHyperSpacePortal(location);
    // Save portal to database
    return portal;
  },
  async travelThroughHyperSpace(portalId, destination) {
    const portal = await getPortalFromDatabase(portalId);
    const travelResult = hyperSpaceUtils.travelThroughHyperSpace(portal, destination);
    return travelResult;
  },
};

export default hyperSpaceService;
