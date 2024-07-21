// cyberneticEnhancements.js
import * as CyberneticEnhancements from 'cybernetic-enhancements';

const cyberneticEnhancementsUtils = {
  createCyberneticEnhancement: (enhancementType) => {
    return new CyberneticEnhancements.CyberneticEnhancement(enhancementType);
  },
  applyCyberneticEnhancement: (cyberneticEnhancement, entity) => {
    return cyberneticEnhancement.apply(entity);
  },
};

export default cyberneticEnhancementsUtils;
