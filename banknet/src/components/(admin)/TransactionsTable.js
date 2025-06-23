import styles from '@/styles/admin/TransactionsTable.module.css';

const TransactionsTable = ({ transactions }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Últimas Transacciones</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cuenta</th>
            <th>Tipo</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction.id ?? `${transaction.account}-${index}`}>
              <td>{transaction.id}</td>
              <td>{transaction.account}</td>
              <td>{transaction.type}</td>
              <td className={transaction.amount >= 0 ? styles.positive : styles.negative}>
                {transaction.amount}
              </td>
              <td>{transaction.date}</td>
              <td>
                <span className={`${styles.status} ${styles[transaction.status]}`}>
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
