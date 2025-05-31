'use client';

import styles from '@/styles/admin/Transactions.module.css';

export default function TransactionFilters() {
  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filtersGrid}>
        <div>
          <label className={styles.filterLabel}>Tipo de Transacción</label>
          <select className={styles.filterSelect}>
            <option>Todas</option>
            <option>Depósito</option>
            <option>Retiro</option>
            <option>Transferencia</option>
            <option>Pago de Servicio</option>
          </select>
        </div>
        
        <div>
          <label className={styles.filterLabel}>Estado</label>
          <select className={styles.filterSelect}>
            <option>Todos</option>
            <option>Completado</option>
            <option>Pendiente</option>
            <option>Rechazado</option>
          </select>
        </div>
        
        <div>
          <label className={styles.filterLabel}>Fecha Inicio</label>
          <input type="date" className={styles.filterInput} />
        </div>
        
        <div>
          <label className={styles.filterLabel}>Fecha Fin</label>
          <input type="date" className={styles.filterInput} />
        </div>
        
        <div>
          <label className={styles.filterLabel}>Monto Mínimo</label>
          <input type="number" className={styles.filterInput} placeholder="$0" />
        </div>
        
        <div>
          <label className={styles.filterLabel}>Monto Máximo</label>
          <input type="number" className={styles.filterInput} placeholder="$10,000" />
        </div>
      </div>
      
      <button className={styles.applyButton}>Aplicar Filtros</button>
    </div>
  );
}