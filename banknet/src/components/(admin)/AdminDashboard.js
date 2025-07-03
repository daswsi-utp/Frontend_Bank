'use client';

import SummaryCard from './SummaryCards';
import ClientesChart from './ClientesChart';
import FraudeChart from './FraudChart';
import ActivityTimeline from './ActivityTimeline';
import RecentTransactionsTable from './RecentTransactionsTable';
import RecentAlertsTable from './RecentAlertsTable';
import MetricsTrend from './MetricsTrend';
import styles from '@/styles/admin/Dashboard1.module.css';

const AdminDashboard = ({
  summaryData,
  clientesChartData,
  fraudeChartData,
  transactions,
  alerts,
  activities,
  monthlyData
}) => {
  return (
    <main className={styles.mainContent}>
      <div className={styles.dashboardHeader}>
        <h1 className={styles.dashboardTitle}>Panel de Administración</h1>
        <div className={styles.welcomeMessage}>Bienvenido, Administrador</div>
        <div className={styles.lastUpdated}>
          Última actualización: {new Date().toLocaleString()}
        </div>
      </div>

      {/* Sección de KPI Cards */}
      <section className={styles.summarySection}>
        {summaryData.map((data, index) => (
          <SummaryCard
            key={index}
            title={data.title}
            value={data.value}
            icon={data.icon}
            trend={data.trend}
            percentage={data.percentage}
          />
        ))}
      </section>

      {/* Sección de Gráficos principales */}
      <section className={styles.mainCharts}>
        <div className={styles.chartContainer}>
          <h3>Distribución de Usuarios</h3>
          <ClientesChart data={clientesChartData} />
        </div>

        <div className={styles.chartContainer}>
          <h3>Alertas de Fraude por Tipo</h3>
          <FraudeChart data={fraudeChartData} />
        </div>
      </section>

      {/* Sección de Tendencias */}
      <section className={styles.trendsSection}>
        <h3>Tendencias Mensuales</h3>
        <MetricsTrend
          metrics={[
            { name: 'Transferencias', data: monthlyData.transfers },
            { name: 'Pagos', data: monthlyData.payments },
            { name: 'Alertas', data: monthlyData.alerts }
          ]}
        />
      </section>

      {/* Sección Inferior con Tablas y Timeline */}
      <section className={styles.bottomSection}>
        <div className={styles.tableContainer}>
          <h3>Últimas Transferencias</h3>
          <RecentTransactionsTable data={transactions} />
        </div>

        <div className={styles.tableContainer}>
          <h3>Alertas Recientes</h3>
          <RecentAlertsTable data={alerts} />
        </div>

        <div className={styles.timelineContainer}>
          <h3>Actividad Reciente</h3>
          <ActivityTimeline data={activities} />
        </div>
      </section>
    </main>
  );
};

export default AdminDashboard;
