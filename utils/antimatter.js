// antimatter.js
import * as Antimatter from 'antimatter';

const antimatterUtils = {
  createAntimatter: (type) => {
    return new Antimatter.Antimatter(type);
  },
  annihilateAntimatter: (antimatter) => {
    return antimatter.annihilate();
  },
};

export default antimatterUtils;
