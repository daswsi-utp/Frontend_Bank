'use client';

import { useEffect, useState } from 'react';
import ClientsTable from '@/components/(admin)/ClientsTable';
import styles from '@/styles/admin/Clients.module.css';
import { USER_API } from '@/lib/api';

export default function ClientsPage() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadClients = async () => {
      try {
        const res = await fetch(USER_API.GET_ALL);
        const data = await res.json();

        const formatted = data.map(c => ({
          id: c.id_usuario,
          name: c.nombre,
          email: c.email,
          phone: c.telefono,
          dni: c.dni,
          departamento: c.departamento,
          provincia: c.provincia,
          distrito: c.distrito,
          direccion: c.direccion,
          fecha_creacion: new Date(c.fecha_creacion).toLocaleDateString(),
          accounts: '-', // puedes implementar esto luego
          lastActivity: '-', // puedes enlazar con logs
          status: 'Activo' // asumes activo si no hay campo
        }));

        setClients(formatted);
      } catch (err) {
        console.error('Error al cargar clientes:', err);
      } finally {
        setLoading(false);
      }
    };

    loadClients();
  }, []);

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

      {loading ? <p>Cargando clientes...</p> : <ClientsTable clients={clients} />}
    </div>
  );
}
