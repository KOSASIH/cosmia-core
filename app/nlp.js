import * as spacy from 'spacy';

const nlp = spacy.load('en_core_web_sm');

async function processText(text) {
  const doc = nlp(text);
  const entities = [];
  doc.ents.forEach((entity) => {
    entities.push({ text: entity.text, label: entity.label_ });
  });
  return entities;
}

export default processText;
