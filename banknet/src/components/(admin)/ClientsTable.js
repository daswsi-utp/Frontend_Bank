'use client';

import styles from '@/styles/admin/Clients.module.css';

export default function ClientsTable({ clients }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Contacto</th>
            <th>Cuentas</th>
            <th>Última Actividad</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>
                <div className={styles.clientInfo}>
                  <div className={styles.clientAvatar}>
                    {client.name.charAt(0)}
                  </div>
                  <div>
                    <div>{client.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>ID: {client.id}</div>
                  </div>
                </div>
              </td>
              <td>
                <div>{client.email}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{client.phone}</div>
              </td>
              <td>{client.accounts}</td>
              <td>{client.lastActivity}</td>
              <td className={client.status === 'Activo' ? styles.statusActive : styles.statusInactive}>
                {client.status}
              </td>
              <td>
                <button className={styles.actionButton}>Ver</button>
                <button className={styles.actionButton}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}