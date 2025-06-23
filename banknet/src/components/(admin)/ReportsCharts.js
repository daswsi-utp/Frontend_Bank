'use client';

import styles from '@/styles/admin/Reports.module.css';
import { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

export default function ReportsCharts() {
  const [timeRange, setTimeRange] = useState('week');
  
  // Datos de ejemplo para los gráficos
  const salesData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Ventas 2023',
        data: [12000, 19000, 15000, 18000, 21000, 19500],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const usersData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Usuarios nuevos',
        data: [50, 70, 90, 80, 100, 120],
        fill: false,
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        borderColor: 'rgba(16, 185, 129, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className={styles.chartsSection}>
      <div className={styles.chartContainer}>
        <div className={styles.chartHeader}>
          <h3 className={styles.chartTitle}>Ventas mensuales</h3>
          <div className={styles.chartFilters}>
            {['week', 'month', 'year'].map((range) => (
              <button
                key={range}
                className={`${styles.chartFilterButton} ${timeRange === range ? styles.active : ''}`}
                onClick={() => setTimeRange(range)}
              >
                {range === 'week' ? 'Semana' : range === 'month' ? 'Mes' : 'Año'}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.chartWrapper}>
          <Bar data={salesData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      <div className={styles.chartContainer}>
        <div className={styles.chartHeader}>
          <h3 className={styles.chartTitle}>Crecimiento de usuarios</h3>
          <div className={styles.chartFilters}>
            {['week', 'month', 'year'].map((range) => (
              <button
                key={range}
                className={`${styles.chartFilterButton} ${timeRange === range ? styles.active : ''}`}
                onClick={() => setTimeRange(range)}
              >
                {range === 'week' ? 'Semana' : range === 'month' ? 'Mes' : 'Año'}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.chartWrapper}>
          <Line data={usersData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
}