// artificialReality.js
import * as ArtificialReality from 'artificial-reality';

const artificialRealityUtils = {
  createArtificialReality: (environment) => {
    return new ArtificialReality.ArtificialReality(environment);
  },
  simulateArtificialReality: (artificialReality) => {
    return artificialReality.simulate();
  },
};

export default artificialRealityUtils;
