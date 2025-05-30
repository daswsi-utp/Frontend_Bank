import TransactionsManager from '@/components/(admin)/TransactionsManager';
import styles from '@/styles/admin/Transactions.module.css';

export default function TransactionsPage() {
  return (
    <div className={styles.container}>
      <h1>Gestión de Transacciones</h1>
      <TransactionsManager />
    </div>
  );
}