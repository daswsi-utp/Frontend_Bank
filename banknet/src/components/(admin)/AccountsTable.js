import styles from '@/styles/admin/AccountsTable.module.css';

const AccountsTable = () => {
  // Datos de ejemplo
  const accounts = [
    { id: 'ACC1001', type: 'Ahorros', balance: '$5,250.00', owner: 'Juan Pérez', status: 'active' },
    { id: 'ACC1002', type: 'Corriente', balance: '$12,845.50', owner: 'María Gómez', status: 'active' },
    // ... más cuentas
  ];

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Número</th>
            <th>Tipo</th>
            <th>Saldo</th>
            <th>Titular</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.id}</td>
              <td>{account.type}</td>
              <td>{account.balance}</td>
              <td>{account.owner}</td>
              <td>
                <span className={`${styles.status} ${styles[account.status]}`}>
                  {account.status}
                </span>
              </td>
              <td>
                <button className={styles.actionButton}>Ver</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountsTable;