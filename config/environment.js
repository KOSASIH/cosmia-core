// environment.js
import { APP_NAME, APP_VERSION } from './constants';

const environment = {
  development: {
    app: {
      name: APP_NAME,
      version: APP_VERSION,
    },
    network: {
      host: 'localhost',
      port: 8080,
    },
    database: {
      host: 'localhost',
      port: 5432,
      username: 'cosmia',
      password: 'cosmia123',
      name: 'cosmia_core',
    },
    security: {
      jwtSecretKey: 'super_secret_key',
      jwtExpirationTime: '1h',
    },
    logging: {
      level: 'debug',
      file: 'cosmia-core.log',
    },
  },
  staging: {
    // Staging environment config
  },
  production: {
    // Production environment config
  },
};

export default environment;
