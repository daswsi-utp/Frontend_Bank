'use client';

import { useState } from 'react';
import styles from '@/styles/admin/Clients.module.css';

export default function EditEmployeeForm({ employee, onUpdate, onClose }) {
  const [formData, setFormData] = useState({
    nombre: employee.nombre || '',
    apePaterno: employee.apePaterno || '',
    apeMaterno: employee.apeMaterno || '',
    email: employee.email || '',
    telefono: employee.phone || employee.telefono || '',
    dni: employee.dni || '',
    direccion: employee.direccion || '',
    departamento: employee.departamento || '',
    provincia: employee.provincia || '',
    distrito: employee.distrito || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onUpdate(employee.id, formData);
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>Editar Empleado</h2>
          <form onSubmit={handleSubmit} className={styles.modalForm}>
            {[
              { id: 'nombre', label: 'Nombres', required: true },
              { id: 'apePaterno', label: 'Apellido Paterno', required: true },
              { id: 'apeMaterno', label: 'Apellido Materno' },
              { id: 'email', label: 'Email', type: 'email', required: true },
              { id: 'telefono', label: 'Teléfono', type: 'tel', required: true },
              { id: 'dni', label: 'DNI', required: true },
              { id: 'direccion', label: 'Dirección' },
              { id: 'departamento', label: 'Departamento' },
              { id: 'provincia', label: 'Provincia' },
              { id: 'distrito', label: 'Distrito' },
            ].map(({ id, label, type = 'text', required }) => (
              <div className={styles.inputGroup} key={id}>
                <label htmlFor={id} className={styles.inputLabel}>{label}</label>
                <input
                  id={id}
                  name={id}
                  type={type}
                  placeholder={`Ingrese ${label.toLowerCase()}`}
                  value={formData[id] || ''}
                  onChange={handleChange}
                  required={required}
                  className={styles.modalInput}
                />
              </div>
            ))}

            <div className={styles.modalActions}>
              <button type="button" className={styles.secondaryButton} onClick={onClose}>
                Cancelar
              </button>
              <button type="submit" className={styles.primaryButton}>
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
