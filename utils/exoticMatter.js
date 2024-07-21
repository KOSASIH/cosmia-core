// exoticMatter.js
import * as ExoticMatter from 'exotic-matter';

const exoticMatterUtils = {
  createExoticMatter: (type) => {
    return new ExoticMatter.ExoticMatter(type);
  },
  manipulateExoticMatter: (exoticMatter, operation) => {
    return exoticMatter.manipulate(operation);
  },
};

export default exoticMatterUtils;
