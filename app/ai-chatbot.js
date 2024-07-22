import { Brain } from 'brain.js';
import { NLP } from 'nlp.js';

const brain = new Brain();
const nlp = new NLP();

// Train the AI model
brain.train([
  { input: 'Hello', output: 'Hello! How can I assist you?' },
  { input: 'What is Cosmia?', output: 'Cosmia is a revolutionary, high-tech network that interconnects stars and galaxies across the universe.' },
  // ...
]);

// Create a chatbot function
async function chatbot(message) {
  const input = nlp.process(message);
  const output = brain.run(input);
  return output;
}

export default chatbot;
