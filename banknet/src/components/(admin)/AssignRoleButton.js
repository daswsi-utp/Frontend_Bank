'use client';

import { createEmployeeMetadata } from '@/lib/userService';
import { useState } from 'react';
import styles from '@/styles/admin/Clients.module.css';

export default function AssignRoleButton({ employee }) {
  const [loading, setLoading] = useState(false);
  const [assigned, setAssigned] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [roleData, setRoleData] = useState({
    cargo: 'Por definir',
    area: 'Por definir',
    fechaIngreso: new Date().toISOString().split('T')[0],
  });

  const handleAssign = async () => {
    if (
      roleData.cargo === 'Por definir' ||
      roleData.area === 'Por definir' ||
      !roleData.fechaIngreso
    ) {
      alert('Por favor, selecciona un cargo y un área válidos.');
      return;
    }

    try {
      setLoading(true);
      await createEmployeeMetadata({
        idEmpleado: employee.id, // ✅ nombre correcto esperado por el backend
        ...roleData,
      });
      setAssigned(true);
      setShowModal(false);
    } catch (error) {
      alert('Error al asignar rango al empleado');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoleData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        disabled={assigned}
        className={`${styles.actionButton} ${assigned ? styles.assignedButton : ''}`}
        style={{ marginTop: '5px' }}
      >
        {assigned ? '✓ Asignado' : 'Asignar Rango'}
      </button>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>Asignar Rol a {employee.nombre}</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className={styles.closeButton}
                >
                  &times;
                </button>
              </div>

              <form className={styles.modalForm} onSubmit={(e) => { e.preventDefault(); handleAssign(); }}>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Cargo</label>
                  <select
                    name="cargo"
                    value={roleData.cargo}
                    onChange={handleChange}
                    className={styles.modalInput}
                  >
                    <option>Por definir</option>
                    <option>Asesor Financiero</option>
                    <option>Gerente de Sucursal</option>
                    <option>Cajero</option>
                    <option>Analista de Créditos</option>
                    <option>Ejecutivo de Cuentas</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Área/Departamento</label>
                  <select
                    name="area"
                    value={roleData.area}
                    onChange={handleChange}
                    className={styles.modalInput}
                  >
                    <option>Por definir</option>
                    <option>Atención al Cliente</option>
                    <option>Operaciones</option>
                    <option>Créditos</option>
                    <option>Administración</option>
                    <option>Tecnología</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Fecha de Ingreso</label>
                  <input
                    type="date"
                    name="fechaIngreso"
                    value={roleData.fechaIngreso}
                    onChange={handleChange}
                    className={styles.modalInput}
                  />
                </div>

                <div className={styles.modalActions}>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className={styles.secondaryButton}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className={styles.primaryButton}
                  >
                    {loading ? 'Asignando...' : 'Confirmar Asignación'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
