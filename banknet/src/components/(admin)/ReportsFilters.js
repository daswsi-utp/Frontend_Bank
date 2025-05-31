'use client';

import styles from '@/styles/admin/Reports.module.css';

export default function ReportsFilters() {
  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filtersGrid}>
        <div>
          <label className={styles.filterLabel}>Tipo de Reporte</label>
          <select className={styles.filterSelect}>
            <option>Transacciones</option>
            <option>Clientes</option>
            <option>Cuentas</option>
            <option>Rendimiento</option>
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
          <label className={styles.filterLabel}>Sucursal</label>
          <select className={styles.filterSelect}>
            <option>Todas</option>
            <option>Sucursal Central</option>
            <option>Sucursal Norte</option>
            <option>Sucursal Sur</option>
          </select>
        </div>
      </div>
      
      <button className={styles.applyButton}>Aplicar Filtros</button>
    </div>
  );
}