// incident-response-strategy.js
import { IncidentResponseStrategy } from 'incident-response-strategy-sdk';
import { IncidentResponsePlan } from 'incident-response-plan-sdk';
import { IncidentResponseProcedure } from 'incident-response-procedure-sdk';

class IncidentResponseStrategy {
  constructor() {
    this.incidentResponseStrategy = new IncidentResponseStrategy();
    this.incidentResponsePlan = new IncidentResponsePlan();
    this.incidentResponseProcedure = new IncidentResponseProcedure();
  }

  createIncidentResponsePlan(incident) {
    // Create an incident response plan for a specific incident
    return this.incidentResponsePlan.createPlan(incident);
  }

  executeIncidentResponseProcedure(planId) {
    // Execute an incident response procedure based on the created plan
    const plan = this.incidentResponsePlan.getPlan(planId);
    return this.incidentResponseProcedure.executeProcedure(plan);
  }

  updateIncidentResponseStrategy(incidentResponse) {
    // Update the incident response strategy based on the executed procedure
    return this.incidentResponseStrategy.updateStrategy(incidentResponse);
  }
}

export default IncidentResponseStrategy;
