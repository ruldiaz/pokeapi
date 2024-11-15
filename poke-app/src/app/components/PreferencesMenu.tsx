// src/app/components/PreferencesMenu.tsx
import { useEffect, useState } from 'react';
import { getUserRolePreferences } from '../services/configService';

const PreferencesMenu = ({ userRole }: { userRole: string }) => {
  const [preferences, setPreferences] = useState<{ showAllFilters: boolean; preferredType: string | null } | null>(null);

  useEffect(() => {
    const rolePreferences = getUserRolePreferences(userRole);
    setPreferences(rolePreferences);
  }, [userRole]);

  if (!preferences) return null;

  return (
    <div>
      <h2>Preferencias del Usuario</h2>
      {preferences.showAllFilters && <p>Acceso a todos los filtros</p>}
      {preferences.preferredType && <p>Tipo preferido: {preferences.preferredType}</p>}
    </div>
  );
};

export default PreferencesMenu;
