// src/lib/adminData.js
import { getAllUsers } from './userService';
import { getAllAccounts } from './accountService';
import { getAllCards } from './cardService';
import { getAllLoans } from './loanService';
import { getAllTransfers } from './transferService';
import { getAllFraudAlerts } from './fraudService';
import { getAllLogs } from './logService';
import { getAllPayments } from './paymentService';

export async function fetchDashboardData() {
  try {
    const [
      users,
      accounts,
      cards,
      loans,
      transfers,
      alerts,
      logs,
      payments
    ] = await Promise.all([
      getAllUsers(),
      getAllAccounts(),
      getAllCards(),
      getAllLoans(),
      getAllTransfers(),
      getAllFraudAlerts(),
      getAllLogs(),
      getAllPayments()
    ]);

    // Tarjetas resumen con tendencias calculadas
    const summaryData = [
      { 
        title: 'Clientes Totales', 
        value: users.length, 
        icon: '👥',
        trend: calculateTrend(users.length, await getLastMonthCount(getAllUsers)),
        percentage: calculatePercentage(users.length, await getLastMonthCount(getAllUsers))
      },
      // ... hacer lo mismo para las otras métricas
    ];

    // Procesamiento adicional de datos
    const recentTransfers = transfers
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);
      
    const recentAlerts = alerts
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);
      
    const recentLogs = logs
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(0, 5);

    // Datos para gráficos temporales
    const monthlyTransfers = groupByMonth(transfers);
    const monthlyPayments = groupByMonth(payments);
    const monthlyAlerts = groupByMonth(alerts);

    return {
      summaryData,
      transactions: recentTransfers,
      alerts: recentAlerts,
      activities: recentLogs,
      fraudeChartData: processFraudData(alerts),
      clientesChartData: processUserData(users),
      monthlyData: {
        transfers: monthlyTransfers,
        payments: monthlyPayments,
        alerts: monthlyAlerts
      }
    };
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
}

// Funciones auxiliares
async function getLastMonthCount(apiCall) {
  const data = await apiCall();
  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);
  return data.filter(item => new Date(item.createdAt) >= lastMonth).length;
}

function calculateTrend(current, previous) {
  if (current > previous) return 'up';
  if (current < previous) return 'down';
  return 'neutral';
}

function calculatePercentage(current, previous) {
  if (previous === 0) return '100%';
  const change = ((current - previous) / previous) * 100;
  return `${Math.round(change)}%`;
}
// Gráfico: Usuarios por rol (Cliente / Empleado)
function processUserData(users) {
  const byRole = users.reduce((acc, user) => {
    const role = user.role || 'Cliente';
    acc[role] = (acc[role] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(byRole).map(([role, count]) => ({
    rol: role,
    cantidad: count
  }));
}

// Gráfico: Alertas de fraude por tipo
function processFraudData(alerts) {
  const byType = alerts.reduce((acc, alert) => {
    const type = alert.type || 'Desconocido';
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(byType).map(([type, count]) => ({
    tipo: type,
    cantidad: count
  }));
}


function groupByMonth(items) {
  const months = Array(12).fill(0);
  items.forEach(item => {
    const date = new Date(item.date || item.timestamp);
    const month = date.getMonth();
    months[month]++;
  });
  return months.map((count, index) => ({
    month: new Date(0, index).toLocaleString('default', { month: 'short' }),
    value: count
  }));
}