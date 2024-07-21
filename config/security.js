// security.js
import { JWT_SECRET_KEY, JWT_EXPIRATION_TIME } from './constants';

const security = {
  jwt: {
    secretKey: JWT_SECRET_KEY,
    expirationTime: JWT_EXPIRATION_TIME,
  },
  authentication: {
    strategies: ['local', 'oauth'],
  },
  authorization: {
    roles: ['admin', 'user'],
  },
};

export default security;
