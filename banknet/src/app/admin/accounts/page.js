'use client';

import AccountsTable from '@/components/(admin)/AccountsTable';
import styles from '@/styles/admin/Accounts.module.css';

export default function AccountsPage() {
  // Datos de ejemplo para cuentas
  const accountsData = [
    { id: 'ACC1001', client: 'Juan Pérez', type: 'Ahorros', balance: '$5,250.00', status: 'Activa', openDate: '15/03/2022' },
    { id: 'ACC1002', client: 'María Gómez', type: 'Corriente', balance: '$12,850.00', status: 'Activa', openDate: '22/07/2021' },
    { id: 'ACC1003', client: 'Carlos Ruiz', type: 'Ahorros', balance: '$3,200.00', status: 'Inactiva', openDate: '05/11/2020' },
    { id: 'ACC1004', client: 'Ana López', type: 'Corriente', balance: '$8,750.00', status: 'Activa', openDate: '30/01/2023' },
    { id: 'ACC1005', client: 'Pedro Sánchez', type: 'Empresarial', balance: '$45,000.00', status: 'Activa', openDate: '18/09/2022' },
  ];

  return (
    <div className={styles.accountsContainer}>
      <div className={styles.header}>
        <h1>Administración de Cuentas</h1>
        <div className={styles.actions}>
          <button className={styles.primaryButton}>Nueva Cuenta</button>
          <button className={styles.secondaryButton}>Exportar</button>
        </div>
      </div>

      <div className={styles.filters}>
        <input type="text" placeholder="Buscar cuenta..." className={styles.searchInput} />
        <select className={styles.filterSelect}>
          <option>Todas las cuentas</option>
          <option>Activas</option>
          <option>Inactivas</option>
        </select>
        <select className={styles.filterSelect}>
          <option>Todos los tipos</option>
          <option>Ahorros</option>
          <option>Corriente</option>
          <option>Empresarial</option>
        </select>
      </div>

      <AccountsTable accounts={accountsData} />
    </div>
  );
}