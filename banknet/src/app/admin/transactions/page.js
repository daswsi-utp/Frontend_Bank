'use client';

import { useEffect, useState } from 'react';
import {
  getAllTransfers,
  createTransfer,
} from '@/lib/transferService';
import TransactionsTable from '@/components/(admin)/TransactionsTable';
import TransactionFilters from '@/components/(admin)/TransactionFilters';
import NewTransferForm from '@/components/(admin)/NewTransferForm';
import styles from '@/styles/admin/Transactions.module.css';

export default function TransactionsPage() {
  const [transfers, setTransfers] = useState([]);
  const [filteredTransfers, setFilteredTransfers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchTransfers = async () => {
      try {
        const data = await getAllTransfers();
        setTransfers(data);
        setFilteredTransfers(data);
      } catch (error) {
        console.error("❌ Error al cargar transferencias:", error);
      }
    };
    fetchTransfers();
  }, []);

  const handleCreateTransfer = async (data) => {
    try {
      await createTransfer(data);
      const updatedTransfers = await getAllTransfers();
      setTransfers(updatedTransfers);
      setFilteredTransfers(updatedTransfers);
      setShowForm(false);
    } catch (error) {
      console.error("❌ Error al crear transferencia:", error);
    }
  };

  return (
    <div className={styles.transactionsContainer}>
      <div className={styles.header}>
        <h1>Administración de Transferencias</h1>
        <div className={styles.actions}>
          <button className={styles.primaryButton} onClick={() => setShowForm(true)}>
            Nueva Transferencia
          </button>
        </div>
      </div>

      <TransactionFilters
        data={transfers}
        onFilter={(results) => setFilteredTransfers(results)}
      />

      <TransactionsTable transactions={filteredTransfers} />

      {showForm && (
        <NewTransferForm
          onSubmit={handleCreateTransfer}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
