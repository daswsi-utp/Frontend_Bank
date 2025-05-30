import ReportsGenerator from '@/components/(admin)/ReportsGenerator';
import styles from '@/styles/admin/Reports.module.css';

export default function ReportsPage() {
  return (
    <div className={styles.container}>
      <h1>Generador de Reportes</h1>
      <ReportsGenerator />
    </div>
  );
}