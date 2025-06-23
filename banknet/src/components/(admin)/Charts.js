import styles from '@/styles/admin/Charts.module.css';

const Charts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <h3>Movimientos Mensuales</h3>
        {/* Aquí iría tu componente de gráfico (Chart.js, etc.) */}
        <div className={styles.chartPlaceholder}></div>
      </div>
      <div className={styles.chart}>
        <h3>Distribución de Productos</h3>
        {/* Aquí iría tu componente de gráfico */}
        <div className={styles.chartPlaceholder}></div>
      </div>
    </div>
  );
};

export default Charts;