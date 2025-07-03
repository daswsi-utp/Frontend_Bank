'use client';

import { useEffect, useState } from 'react';
import AdminDashboard from '@/components/(admin)/AdminDashboard';
// 🚫 IMPORTACIONES DESHABILITADAS TEMPORALMENTE
// import {
//   fetchAllUsers,
//   fetchTodayTransfers,
//   fetchRecentTransactions,
//   fetchRecentAlerts,
//   fetchUserActivities
// } from '@/lib/adminData';

export default function AdminPage() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    // Simular carga de datos falsa
    const fakeData = {
      summaryData: [
        { title: 'Clientes Totales', value: 100, change: 0, icon: '👥' },
        { title: 'Transacciones Hoy', value: 25, change: 0, icon: '💸' },
        { title: 'Depósitos', value: '$2M', change: 0, icon: '📈' },
        { title: 'Retiros', value: '$1.5M', change: 0, icon: '📉' },
      ],
      transactions: [],
      alerts: [],
      activities: [],
      fraudeChartData: [],
      clientesChartData: []
    };

    setTimeout(() => {
      setDashboardData(fakeData);
    }, 500); // Simula una pequeña demora
  }, []);

  if (!dashboardData) return <div>Cargando dashboard de prueba...</div>;

  return <AdminDashboard {...dashboardData} />;
}
