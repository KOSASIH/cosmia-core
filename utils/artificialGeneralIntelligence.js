// artificialGeneralIntelligence.js
import * as AGI from 'agi';

const agiUtils = {
  createAGI: (knowledgeGraph) => {
    return new AGI.ArtificialGeneralIntelligence(knowledgeGraph);
  },
  askAGI: (agi, question) => {
    return agi.answer(question);
  },
};

export default agiUtils;
