import ClientsManager from '@/components/(admin)/ClientsManager';
import styles from '@/styles/admin/Clients.module.css';

export default function ClientsPage() {
  return (
    <div className={styles.container}>
      <h1>Administración de Clientes</h1>
      <ClientsManager />
    </div>
  );
}