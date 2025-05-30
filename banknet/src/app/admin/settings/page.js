import SettingsPanel from '@/components/(admin)/SettingsPanel';
import styles from '@/styles/admin/Settings.module.css';

export default function SettingsPage() {
  return (
    <div className={styles.container}>
      <h1>Configuración del Sistema</h1>
      <SettingsPanel />
    </div>
  );
}