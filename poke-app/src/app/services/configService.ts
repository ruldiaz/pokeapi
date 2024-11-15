// src/services/configService.ts
import rolesConfig from '../../../config/userRoles.json';

export const getUserRolePreferences = (role: string) => {
  const userRole = rolesConfig.roles.find((r) => r.role === role);
  return userRole ? userRole.preferences : null;
};