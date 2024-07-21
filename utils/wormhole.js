// wormhole.js
import * as Wormhole from 'wormhole';

const wormholeUtils = {
  createWormhole: (origin, destination) => {
    return new Wormhole.Wormhole(origin, destination);
  },
  stabilizeWormhole: (wormhole) => {
    return wormhole.stabilize();
  },
};

export default wormholeUtils;
