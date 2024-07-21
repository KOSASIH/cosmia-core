// hyperSpace.js
import * as HyperSpace from 'hyper-space';

const hyperSpaceUtils = {
  createHyperSpacePortal: (location) => {
    return new HyperSpace.HyperSpacePortal(location);
  },
  travelThroughHyperSpace: (portal, destination) => {
    return portal.travel(destination);
  },
};

export default hyperSpaceUtils;
