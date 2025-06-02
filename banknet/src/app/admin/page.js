'use client';

import { useState, useEffect } from 'react';
import AdminDashboard from '@/components/(admin)/AdminDashboard';
import Login from '@/components/(admin)/Login';
import {
  fetchAllUsers,             // NUEVA FUNCIÓN para obtener todos los usuarios
  fetchTodayTransfers,
  fetchRecentTransactions,
  fetchRecentAlerts,
  fetchUserActivities
} from '@/lib/adminData';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const auth = localStorage.getItem('admin-auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const usuarios = await fetchAllUsers(); // Debe devolver todos los usuarios
        const totalUsers = usuarios.length;

        const totalTransfers = await fetchTodayTransfers();
        const transactions = await fetchRecentTransactions();
        const alerts = await fetchRecentAlerts();
        const activities = await fetchUserActivities();

        // Procesar gráfico de FRAUDES por día
        const fraudePorDia = alerts.reduce((acc, a) => {
          const fecha = new Date(a.fecha).toLocaleDateString();
          acc[fecha] = (acc[fecha] || 0) + 1;
          return acc;
        }, {});

        const fraudeChartData = Object.entries(fraudePorDia).map(([fecha, cantidad]) => ({
          fecha,
          cantidad
        }));

        // Procesar gráfico de CLIENTES por departamento
        const usuariosPorDepartamento = usuarios.reduce((acc, u) => {
          const d = u.departamento || 'Desconocido';
          acc[d] = (acc[d] || 0) + 1;
          return acc;
        }, {});

        const clientesChartData = Object.entries(usuariosPorDepartamento).map(([departamento, cantidad]) => ({
          departamento,
          cantidad
        }));

        setDashboardData({
          summaryData: [
            { title: 'Clientes Totales', value: totalUsers, change: 0, icon: '👥' },
            { title: 'Transacciones Hoy', value: totalTransfers, change: 0, icon: '💸' },
            { title: 'Depósitos', value: '$2M', change: 0, icon: '📈' },
            { title: 'Retiros', value: '$1.5M', change: 0, icon: '📉' },
          ],
          transactions: transactions.map(tx => ({
            id: tx.id,
            account: `****${tx.accountDestino?.slice(-4)}`,
            type: tx.tipoTransaccion || 'Transferencia',
            amount: tx.monto,
            date: new Date(tx.fecha).toLocaleDateString(),
            status: tx.estado?.nombre || 'desconocido'
          })),
          alerts: alerts.map(a => ({
            level: a.tipo?.toLowerCase() === 'alta' ? 'high' : 'medium',
            icon: '⚠️',
            title: 'Alerta de Fraude',
            message: a.descripcion,
            time: new Date(a.fecha).toLocaleTimeString()
          })),
          activities: activities.map(l => ({
            user: l.usuario || 'Empleado',
            role: 'Admin',
            action: l.descripcion,
            time: new Date(l.fecha).toLocaleTimeString()
          })),
          fraudeChartData,
          clientesChartData
        });
      } catch (error) {
        console.error("Error al cargar el dashboard:", error);
      }
    };

    if (isAuthenticated) {
      loadDashboardData();
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    localStorage.setItem('admin-auth', 'true');
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return dashboardData ? <AdminDashboard {...dashboardData} /> : <div>Cargando...</div>;
}
