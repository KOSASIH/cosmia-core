// security-orchestrator.js
import { SecurityOrchestrator } from 'ecurity-orchestrator-sdk';
import { SecurityPlaybook } from 'ecurity-playbook-sdk';

class SecurityOrchestrator {
  constructor() {
    this.securityOrchestrator = new SecurityOrchestrator();
    this.securityPlaybook = new SecurityPlaybook();
  }

  createSecurityPlaybook(playbookData) {
    // Create a security playbook for a specific use case
    return this.securityPlaybook.createPlaybook(playbookData);
  }

  executeSecurityPlaybook(playbookId) {
    // Execute a security playbook
    const playbook = this.securityPlaybook.getPlaybook(playbookId);
    return this.securityOrchestrator.executePlaybook(playbook);
  }

  updateSecurityPlaybook(playbookId, updates) {
    // Update a security playbook
    const playbook = this.securityPlaybook.getPlaybook(playbookId);
    return this.securityPlaybook.updatePlaybook(playbook, updates);
  }
}

export default SecurityOrchestrator;
