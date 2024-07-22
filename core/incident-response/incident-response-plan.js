// incident-response-plan.js
import { IncidentResponsePlan } from 'incident-response-plan-sdk';
import { IncidentResponseStrategy } from 'incident-response-strategy-sdk';

class IncidentResponsePlan {
  constructor() {
    this.incidentResponsePlan = new IncidentResponsePlan();
    this.incidentResponseStrategy = new IncidentResponseStrategy();
  }

  createIncidentResponsePlan(incident) {
    // Create an incident response plan for a specific incident
    return this.incidentResponsePlan.createPlan(incident);
  }

  executeIncidentResponsePlan(planId) {
    // Execute an incident response plan
    const plan = this.incidentResponsePlan.getPlan(planId);
    return this.incidentResponseStrategy.executePlan(plan);
  }

  updateIncidentResponsePlan(planId, updates) {
    // Update an incident response plan
    const plan = this.incidentResponsePlan.getPlan(planId);
    return this.incidentResponsePlan.updatePlan(plan, updates);
  }
}

export default IncidentResponsePlan;
