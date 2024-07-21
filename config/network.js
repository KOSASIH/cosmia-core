// network.js
import { NETWORK_ID, NETWORK_PROTOCOL, NETWORK_PORT } from './constants';

const network = {
  id: NETWORK_ID,
  protocol: NETWORK_PROTOCOL,
  port: NETWORK_PORT,
  nodes: [
    {
      id: 'node-1',
      host: 'localhost',
      port: 8080,
    },
    {
      id: 'node-2',
      host: 'localhost',
      port: 8081,
    },
  ],
  connections: {
    maxConnections: 100,
    connectionTimeout: 30000,
  },
};

export default network;
