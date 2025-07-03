'use client';

import { useState } from 'react';
import styles from '@/styles/admin/Transactions.module.css';

export default function NewTransferForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    sourceAccount: '',
    destinationAccount: '',
    monto: '',
    moneda: 'PEN',
    concepto: '',
    referencia: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>Nueva Transferencia</h2>

          <form className={styles.modalForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="sourceAccount" className={styles.inputLabel}>Cuenta Origen</label>
              <input
                type="text"
                id="sourceAccount"
                name="sourceAccount"
                placeholder="Ingrese número de cuenta origen"
                className={styles.modalInput}
                value={formData.sourceAccount}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="destinationAccount" className={styles.inputLabel}>Cuenta Destino</label>
              <input
                type="text"
                id="destinationAccount"
                name="destinationAccount"
                placeholder="Ingrese número de cuenta destino"
                className={styles.modalInput}
                value={formData.destinationAccount}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.amountCurrencyContainer}>
              <div className={styles.formGroup} style={{ flex: 2 }}>
                <label htmlFor="monto" className={styles.inputLabel}>Monto</label>
                <input
                  type="number"
                  id="monto"
                  name="monto"
                  placeholder="0.00"
                  className={styles.modalInput}
                  value={formData.monto}
                  onChange={handleChange}
                  required
                  step="0.01"
                  min="0"
                />
              </div>

              <div className={styles.formGroup} style={{ flex: 1 }}>
                <label htmlFor="moneda" className={styles.inputLabel}>Moneda</label>
                <select
                  id="moneda"
                  name="moneda"
                  className={styles.modalInput}
                  value={formData.moneda}
                  onChange={handleChange}
                >
                  <option value="PEN">PEN</option>
                  <option value="USD">USD</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="concepto" className={styles.inputLabel}>Concepto</label>
              <input
                type="text"
                id="concepto"
                name="concepto"
                placeholder="Descripción de la transferencia"
                className={styles.modalInput}
                value={formData.concepto}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="referencia" className={styles.inputLabel}>Referencia (Opcional)</label>
              <input
                type="text"
                id="referencia"
                name="referencia"
                placeholder="Referencia adicional"
                className={styles.modalInput}
                value={formData.referencia}
                onChange={handleChange}
              />
            </div>

            <div className={styles.modalActions}>
              <button type="button" className={styles.cancelButton} onClick={onCancel}>
                Cancelar
              </button>
              <button type="submit" className={styles.confirmButton}>
                Confirmar Transferencia
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}