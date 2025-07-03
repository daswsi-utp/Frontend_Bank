'use client';

import styles from '@/styles/admin/Clients.module.css';
import AssignRoleButton from '@/components/(admin)/AssignRoleButton';

export default function EmployeesTable({ employees, onEdit, onDelete }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Empleado</th>
            <th>Contacto</th>
            <th>Ubicación</th>
            <th>Fecha Registro</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <div className={styles.clientInfo}>
                  <div className={styles.clientAvatar}>
                    {employee.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className={styles.clientName}>{employee.name}</div>
                    <div className={styles.clientEmail}>DNI: {employee.dni}</div>
                  </div>
                </div>
              </td>
              <td>
                <div>{employee.email}</div>
                <div className={styles.clientEmail}>{employee.telefono}</div>
              </td>
              <td>
                {employee.departamento}, {employee.provincia}
              </td>
              <td>{employee.fecha_creacion}</td>
              <td>
                <span className={styles.statusActive}>{employee.status}</span>
              </td>
              <td>
                <button
                  onClick={() => onEdit(employee)}
                  className={styles.actionButton}
                >
                  Editar
                </button>
                <button
                  onClick={() => onDelete(employee)}
                  className={styles.actionButton}
                >
                  Eliminar
                </button>
                <AssignRoleButton employee={employee} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
