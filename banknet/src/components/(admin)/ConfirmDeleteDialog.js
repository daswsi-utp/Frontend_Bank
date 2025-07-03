'use client';

import styles from '@/styles/admin/Clients.module.css';

export default function ConfirmDeleteDialog({ client, onDelete, onClose, entityName = "cliente" }) {
  const handleConfirm = async () => {
    await onDelete(client.id);
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>Confirmar Eliminación</h2>
          <p>¿Estás seguro que deseas eliminar al {entityName} <strong>{client.name}</strong>?</p>
          
          <div className={styles.modalActions}>
            <button 
              type="button" 
              className={styles.secondaryButton} 
              onClick={onClose}
            >
              Cancelar
            </button>
            <button 
              type="button" 
              className={styles.primaryButton} 
              onClick={handleConfirm}
            >
              Confirmar Eliminación
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}