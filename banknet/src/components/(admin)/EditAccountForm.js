'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/admin/Accounts.module.css';

export default function EditAccountForm({ account, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(account);

  useEffect(() => {
    setFormData(account);
  }, [account]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(account.id, formData);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>Editar Cuenta</h2>
          <form onSubmit={handleSubmit} className={styles.modalForm}>
            <input
              type="number"
              name="userId"
              placeholder="ID Usuario"
              value={formData.userId}
              onChange={handleChange}
              required
              className={styles.modalInput}
            />
            <input
              type="text"
              name="accountNumber"
              placeholder="Número de Cuenta"
              value={formData.accountNumber}
              onChange={handleChange}
              required
              className={styles.modalInput}
            />
            <select
              name="accountTypeId"
              value={formData.accountTypeId}
              onChange={handleChange}
              required
              className={styles.modalInput}
            >
              <option value="">Tipo de Cuenta</option>
              <option value="1">Ahorros</option>
              <option value="2">Corriente</option>
              <option value="3">Empresarial</option>
            </select>
            <input
              type="number"
              step="0.01"
              name="balance"
              placeholder="Saldo"
              value={formData.balance}
              onChange={handleChange}
              required
              className={styles.modalInput}
            />
            <input
              type="number"
              step="0.01"
              name="availableBalance"
              placeholder="Saldo Disponible"
              value={formData.availableBalance}
              onChange={handleChange}
              required
              className={styles.modalInput}
            />
            <div className={styles.modalActions}>
              <button type="button" onClick={onCancel} className={styles.cancelButton}>
                Cancelar
              </button>
              <button type="submit" className={styles.confirmButtonEdit}>
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}