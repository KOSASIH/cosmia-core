// teleportation.service.js
import { teleportationUtils } from '../utils/teleportation';

const teleportationService = {
  async createTeleportationPortal(location) {
    const portal = teleportationUtils.createTeleportationPortal(location);
    // Save portal to database
    return portal;
  },
  async teleport(portalId, entityId) {
    const portal = await getPortalFromDatabase(portalId);
    const entity = await getEntityFromDatabase(entityId);
    const teleportationResult = teleportationUtils.teleport(portal, entity);
    return teleportationResult;
  },
};

export default teleportationService;
