import styles from '@/styles/admin/TransactionsManager.module.css';

const TransactionsManager = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        {/* Componente de filtros */}
      </div>
      <div className={styles.transactionsList}>
        {/* Lista de transacciones */}
      </div>
    </div>
  );
};

export default TransactionsManager;