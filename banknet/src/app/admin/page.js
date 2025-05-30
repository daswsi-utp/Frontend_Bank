'use client';

import AdminDashboard from '@/components/(admin)/AdminDashboard';

export default function AdminPage() {
  // Datos de ejemplo (deberías reemplazarlos con datos reales)
  const summaryData = [
    { title: 'Clientes Totales', value: '12,458', change: 4.5, icon: '👥' },
    { title: 'Transacciones Hoy', value: '1,245', change: 12.3, icon: '💸' },
    { title: 'Depósitos', value: '$4.2M', change: 8.1, icon: '📈' },
    { title: 'Retiros', value: '$3.8M', change: -2.4, icon: '📉' },
  ];

  const transactions = [
    { id: 'TX1001', account: '****4582', type: 'Depósito', amount: 1250, date: '10/05/2023', status: 'completado' },
    { id: 'TX1002', account: '****3621', type: 'Transferencia', amount: -500, date: '10/05/2023', status: 'completado' },
    { id: 'TX1003', account: '****7854', type: 'Retiro', amount: -1200, date: '09/05/2023', status: 'pendiente' },
    // ... más transacciones
  ];

  const alerts = [
    { level: 'high', icon: '⚠️', title: 'Intento de acceso sospechoso', message: 'Intento de acceso desde IP desconocida', time: 'Hace 2 horas' },
    { level: 'medium', icon: 'ℹ️', title: 'Actualización requerida', message: 'Nueva versión del sistema disponible', time: 'Hace 5 horas' },
    // ... más alertas
  ];

  const activities = [
    { user: 'Juan Pérez', role: 'Cajero', action: 'Aprobó transacción #TX1001', time: 'Hace 15 min' },
    { user: 'María Gómez', role: 'Gerente', action: 'Actualizó límites de cuenta', time: 'Hace 32 min' },
    // ... más actividades
  ];

  return (
    <div className={styles.adminContainer}>
      <AdminDashboard
        summaryData={summaryData}
        transactions={transactions}
        alerts={alerts}
        activities={activities}
      />
    </div>
  );
}