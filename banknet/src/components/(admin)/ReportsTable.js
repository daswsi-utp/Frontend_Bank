'use client';

import styles from '@/styles/admin/Reports.module.css';
import { useState } from 'react';

export default function ReportsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Datos de ejemplo para la tabla
  const reportsData = [
    { id: 1, name: 'Reporte de ventas', type: 'Ventas', date: '2023-05-15', status: 'Completado' },
    { id: 2, name: 'Reporte de usuarios', type: 'Usuarios', date: '2023-05-10', status: 'Completado' },
    { id: 3, name: 'Análisis de marketing', type: 'Marketing', date: '2023-05-05', status: 'Pendiente' },
    { id: 4, name: 'Reporte financiero', type: 'Finanzas', date: '2023-04-28', status: 'Completado' },
    { id: 5, name: 'Inventario Q2', type: 'Inventario', date: '2023-04-20', status: 'Completado' },
    { id: 6, name: 'Rendimiento del sitio', type: 'Tecnología', date: '2023-04-15', status: 'Completado' },
    { id: 7, name: 'Satisfacción del cliente', type: 'CRM', date: '2023-04-10', status: 'Pendiente' },
  ];

  // Calcular paginación
  const totalPages = Math.ceil(reportsData.length / itemsPerPage);
  const currentItems = reportsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles.tableSection}>
      <h3 className={styles.chartTitle}>Reportes recientes</h3>
      
      <div className={styles.tableContainer}>
        <div className={styles.tableWrapper}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((report) => (
                <tr key={report.id}>
                  <td>{report.name}</td>
                  <td>{report.type}</td>
                  <td>{report.date}</td>
                  <td>
                    <span style={{
                      color: report.status === 'Completado' ? '#10B981' : '#F59E0B',
                      backgroundColor: report.status === 'Completado' ? '#ECFDF5' : '#FFFBEB',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {report.status}
                    </span>
                  </td>
                  <td>
                    <div className={styles.tableActions}>
                      <button className={styles.tableActionButton}>Ver</button>
                      <button className={styles.tableActionButton}>Descargar</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.pagination}>
          <button
            className={styles.paginationButton}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          
          <span className={styles.paginationInfo}>
            Página {currentPage} de {totalPages}
          </span>
          
          <button
            className={styles.paginationButton}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}