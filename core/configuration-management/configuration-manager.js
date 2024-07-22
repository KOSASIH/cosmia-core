// configuration-manager.js
import { ConfigurationManager } from 'configuration-manager-sdk';
import { Configuration } from 'configuration-sdk';

class ConfigurationManager {
  constructor() {
    this.configurationManager = new ConfigurationManager();
    this.configuration = new Configuration();
  }

  getConfigurations() {
    // Get all configurations for the system
    return this.configurationManager.getConfigurations();
  }

  getConfiguration(configurationId) {
    // Get a specific configuration by ID
    return this.configurationManager.getConfiguration(configurationId);
  }

  updateConfiguration(configurationId, updates) {
    // Update a specific configuration
    const configuration = this.configurationManager.getConfiguration(configurationId);
    return this.configurationManager.updateConfiguration(configuration, updates);
  }
}

export default ConfigurationManager;
