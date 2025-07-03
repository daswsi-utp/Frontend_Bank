'use client';

import styles from '@/styles/admin/Dashboard1.module.css';

export default function RecentTransactionsTable({ data = [] }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <div className={styles.emptyMessage}>No hay transferencias recientes.</div>;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Monto</th>
          <th>Cuenta Origen</th>
          <th>Cuenta Destino</th>
          <th>Fecha</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {data.map((transfer) => (
          <tr key={transfer.id}>
            <td>{transfer.id}</td>
            <td>S/. {transfer.amount}</td>
            <td>{transfer.sourceAccount}</td>
            <td>{transfer.destinationAccount}</td>
            <td>{new Date(transfer.date).toLocaleString()}</td>
            <td>{transfer.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
