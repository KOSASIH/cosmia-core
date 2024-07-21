// logging.js
import { LOG_LEVEL, LOG_FILE } from './constants';

const logging = {
  level: LOG_LEVEL,
  file: LOG_FILE,
  console: {
    level: 'debug',
  },
};

export default logging;
