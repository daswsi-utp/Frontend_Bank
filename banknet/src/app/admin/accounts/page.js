'use client';

import { useEffect, useState } from 'react';
import AccountsTable from '@/components/(admin)/AccountsTable';
import { ACCOUNT_API } from '@/lib/api';
import styles from '@/styles/admin/Accounts.module.css';

export default function AccountsPage() {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAccounts = async () => {
      try {
        const res = await fetch(ACCOUNT_API.GET_ALL);
        const data = await res.json();

        const formatted = data.map(acc => ({
          id: acc.id,
          client: `ID Usuario ${acc.userId}`, // No viene el nombre, solo el userId
          type: acc.accountTypeName,
          balance: `$${parseFloat(acc.balance).toFixed(2)}`,
          status: acc.accountStatusName,
          openDate: new Date(acc.createdAt).toLocaleDateString()
        }));

        setAccounts(formatted);
      } catch (error) {
        console.error('Error al cargar cuentas:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAccounts();
  }, []);

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

      {loading ? <p>Cargando cuentas...</p> : <AccountsTable accounts={accounts} />}
    </div>
  );
}
