'use client';

import ClientsTable from '@/components/(admin)/ClientsTable';
import styles from '@/styles/admin/Clients.module.css';

export default function ClientsPage() {
  // Datos de ejemplo para clientes
  const clientsData = [
    { id: 'CLI1001', name: 'Juan Pérez', email: 'juan@example.com', phone: '555-1234', accounts: 2, lastActivity: 'Ayer', status: 'Activo' },
    { id: 'CLI1002', name: 'María Gómez', email: 'maria@example.com', phone: '555-5678', accounts: 1, lastActivity: 'Hoy', status: 'Activo' },
    { id: 'CLI1003', name: 'Carlos Ruiz', email: 'carlos@example.com', phone: '555-9012', accounts: 1, lastActivity: 'Hace 3 días', status: 'Inactivo' },
    { id: 'CLI1004', name: 'Ana López', email: 'ana@example.com', phone: '555-3456', accounts: 3, lastActivity: 'Hoy', status: 'Activo' },
    { id: 'CLI1005', name: 'Pedro Sánchez', email: 'pedro@example.com', phone: '555-7890', accounts: 1, lastActivity: 'Ayer', status: 'Activo' },
  ];

  return (
    <div className={styles.clientsContainer}>
      <div className={styles.header}>
        <h1>Administración de Clientes</h1>
        <div className={styles.actions}>
          <button className={styles.primaryButton}>Nuevo Cliente</button>
          <button className={styles.secondaryButton}>Importar</button>
          <button className={styles.secondaryButton}>Exportar</button>
        </div>
      </div>

      <div className={styles.filters}>
        <input type="text" placeholder="Buscar cliente..." className={styles.searchInput} />
        <select className={styles.filterSelect}>
          <option>Todos los clientes</option>
          <option>Activos</option>
          <option>Inactivos</option>
        </select>
        <select className={styles.filterSelect}>
          <option>Cualquier tipo</option>
          <option>Personales</option>
          <option>Empresariales</option>
        </select>
      </div>

      <ClientsTable clients={clientsData} />
    </div>
  );
}