// teleportation.js
import * as Teleport from 'teleport';

const teleportationUtils = {
  createTeleportationPortal: (location) => {
    return new Teleport.TeleportationPortal(location);
  },
  teleport: (portal, entity) => {
    return portal.teleport(entity);
  },
};

export default teleportationUtils;
