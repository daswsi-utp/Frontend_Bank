'use client';
import SummaryCard from './SummaryCards';
import TransactionsTable from './TransactionsTable';
import Charts from './Charts';
import QuickActions from './QuickActions';
import Alerts from './Alerts';
import UserActivity from './UserActivity';
import styles from '@/styles/admin/Dashboard.module.css';

const AdminDashboard = ({ summaryData, transactions, alerts, activities }) => {
  return (
    <>
      
      <main className={styles.mainContent}>
        <div className={styles.dashboardHeader}>
          <h1 className={styles.dashboardTitle}>Panel de Administración</h1>
          <div>Bienvenido, Administrador</div>
        </div>
        
        <div className={styles.dashboardGrid}>
          {/* Sección de Resumen */}
          <section className={styles.summarySection}>
            {summaryData.map((data, index) => (
              <SummaryCard key={index} {...data} />
            ))}
          </section>
          
          {/* Sección de Gráficos */}
          <section className={styles.chartsSection}>
            <Charts />
          </section>
          
          {/* Sección de Acciones Rápidas */}
          <section className={styles.quickActionsSection}>
            <QuickActions />
          </section>
          
          {/* Sección de Transacciones */}
          <section className={styles.transactionsSection}>
            <TransactionsTable transactions={transactions} />
          </section>
          
          {/* Sección de Alertas */}
          <section className={styles.alertsSection}>
            <Alerts alerts={alerts} />
          </section>
          
          {/* Sección de Actividad */}
          <section className={styles.activitySection}>
            <UserActivity activities={activities} />
          </section>
        </div>
      </main>
    </>
  );
};

export default AdminDashboard;