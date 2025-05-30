import AccountsTable from '@/components/(admin)/AccountsTable';
import styles from '@/styles/admin/Accounts.module.css';

export default function AccountsPage() {
  return (
    <div className={styles.container}>
      <h1>Administración de Cuentas</h1>
      <AccountsTable />
    </div>
  );
}