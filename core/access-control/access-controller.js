// access-controller.js
import { AccessController } from 'access-controller-sdk';
import { RoleBasedAccessControl } from 'rbac-sdk';
import { AttributeBasedAccessControl } from 'abac-sdk';

class AccessController {
  constructor() {
    this.accessController = new AccessController();
    this.rbac = new RoleBasedAccessControl();
    this.abac = new AttributeBasedAccessControl();
  }

  grantAccess(subject, resource, action) {
    // Grant access to a resource based on role-based access control
    return this.rbac.grantAccess(subject, resource, action);
  }

  grantAccessWithAttributes(subject, resource, action, attributes) {
    // Grant access to a resource based on attribute-based access control
    return this.abac.grantAccess(subject, resource, action, attributes);
  }

  revokeAccess(subject, resource, action) {
    // Revoke access to a resource
    return this.accessController.revokeAccess(subject, resource, action);
  }
}

export default AccessController;
