'use client';

import TransactionsTable from '@/components/(admin)/TransactionsTable';
import TransactionFilters from '@/components/(admin)/TransactionFilters';
import styles from '@/styles/admin/Transactions.module.css';

export default function TransactionsPage() {
  // Datos de ejemplo para transacciones
  const transactionsData = [
    { id: 'TX1001', date: '10/05/2023', account: '****4582', type: 'Depósito', amount: 1250, status: 'Completado', beneficiary: 'Juan Pérez' },
    { id: 'TX1002', date: '10/05/2023', account: '****3621', type: 'Transferencia', amount: -500, status: 'Completado', beneficiary: 'María Gómez' },
    { id: 'TX1003', date: '09/05/2023', account: '****7854', type: 'Retiro', amount: -1200, status: 'Pendiente', beneficiary: '' },
    { id: 'TX1004', date: '08/05/2023', account: '****1256', type: 'Pago de Servicio', amount: -350, status: 'Completado', beneficiary: 'Empresa de Luz' },
    { id: 'TX1005', date: '07/05/2023', account: '****8932', type: 'Depósito', amount: 2000, status: 'Completado', beneficiary: '' },
  ];

  return (
    <div className={styles.transactionsContainer}>
      <div className={styles.header}>
        <h1>Administración de Transacciones</h1>
        <div className={styles.actions}>
          <button className={styles.primaryButton}>Nueva Transacción</button>
          <button className={styles.secondaryButton}>Exportar</button>
        </div>
      </div>

      <TransactionFilters />
      
      <TransactionsTable transactions={transactionsData} />
    </div>
  );
}