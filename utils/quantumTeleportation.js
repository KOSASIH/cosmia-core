// quantumTeleportation.js
import * as QuantumTeleportation from 'quantum-teleportation';

const quantumTeleportationUtils = {
  createQuantumTeleportationChannel: (origin, destination) => {
    return new QuantumTeleportation.QuantumTeleportationChannel(origin, destination);
  },
  teleportQuantumState: (channel, quantumState) => {
    return channel.teleport(quantumState);
  },
};

export default quantumTeleportationUtils;
