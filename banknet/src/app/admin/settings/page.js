'use client';

import SettingsTabs from '@/components/(admin)/SettingsTabs';
import styles from '@/styles/admin/Settings.module.css';

export default function SettingsPage() {
  return (
    <div className={styles.settingsContainer}>
      <div className={styles.header}>
        <h1>Configuración del Sistema</h1>
        <div className={styles.actions}>
          <button className={styles.primaryButton}>Guardar Cambios</button>
        </div>
      </div>

      <SettingsTabs />
    </div>
  );
}