'use client';

import ReportsFilters from '@/components/(admin)/ReportsFilters';
import ReportsCharts from '@/components/(admin)/ReportsCharts';
import ReportsTable from '@/components/(admin)/ReportsTable';
import styles from '@/styles/admin/Reports.module.css';

export default function ReportsPage() {
  return (
    <div className={styles.reportsContainer}>
      <div className={styles.header}>
        <h1>Reportes y Análisis</h1>
        <div className={styles.actions}>
          <button className={styles.primaryButton}>Generar Reporte</button>
          <button className={styles.secondaryButton}>Exportar</button>
        </div>
      </div>

      <ReportsFilters />
      
      <div className={styles.reportsGrid}>
        <div className={styles.chartsSection}>
          <ReportsCharts />
        </div>
        <div className={styles.tableSection}>
          <ReportsTable />
        </div>
      </div>
    </div>
  );
}