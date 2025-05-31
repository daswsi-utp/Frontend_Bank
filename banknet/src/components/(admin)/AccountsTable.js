'use client';

import styles from '@/styles/admin/Accounts.module.css';

export default function AccountsTable({ accounts }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID Cuenta</th>
            <th>Cliente</th>
            <th>Tipo</th>
            <th>Saldo</th>
            <th>Estado</th>
            <th>Fecha Apertura</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.id}</td>
              <td>{account.client}</td>
              <td>{account.type}</td>
              <td>{account.balance}</td>
              <td className={account.status === 'Activa' ? styles.statusActive : styles.statusInactive}>
                {account.status}
              </td>
              <td>{account.openDate}</td>
              <td>
                <button className={styles.actionButton}>Ver</button>
                <button className={styles.actionButton}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}