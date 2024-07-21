// nanotech.js
import * as Nanolab from 'nanolab';

const nanotechUtils = {
  createNanoRobot: (design) => {
    return new Nanolab.NanoRobot(design);
  },
  simulateNanoRobot: (nanoRobot) => {
    return nanoRobot.simulate();
  },
};

export default nanotechUtils;
