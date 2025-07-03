'use client';

import { useState } from 'react';
import styles from '@/styles/admin/Transactions.module.css';

export default function TransactionFilters({ data, onFilter }) {
  const [estado, setEstado] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [montoMin, setMontoMin] = useState('');
  const [montoMax, setMontoMax] = useState('');

  const handleFilter = () => {
    let filtered = data;

    if (estado) {
      filtered = filtered.filter(item =>
        item.estadoId?.toString() === estado
      );
    }

    if (fechaInicio) {
      filtered = filtered.filter(item =>
        new Date(item.fechaSolicitud) >= new Date(fechaInicio)
      );
    }

    if (fechaFin) {
      filtered = filtered.filter(item =>
        new Date(item.fechaSolicitud) <= new Date(fechaFin)
      );
    }

    if (montoMin) {
      filtered = filtered.filter(item => item.monto >= parseFloat(montoMin));
    }

    if (montoMax) {
      filtered = filtered.filter(item => item.monto <= parseFloat(montoMax));
    }

    onFilter(filtered);
  };

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filtersGrid}>
        <div>
          <label className={styles.filterLabel}>Estado</label>
          <select
            className={styles.filterSelect}
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="1">Pendiente</option>
            <option value="2">Completado</option>
            <option value="3">Rechazado</option>
          </select>
        </div>

        <div>
          <label className={styles.filterLabel}>Fecha Inicio</label>
          <input
            type="date"
            className={styles.filterInput}
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
          />
        </div>

        <div>
          <label className={styles.filterLabel}>Fecha Fin</label>
          <input
            type="date"
            className={styles.filterInput}
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
          />
        </div>

        <div>
          <label className={styles.filterLabel}>Monto Mínimo</label>
          <input
            type="number"
            className={styles.filterInput}
            placeholder="$0"
            value={montoMin}
            onChange={(e) => setMontoMin(e.target.value)}
          />
        </div>

        <div>
          <label className={styles.filterLabel}>Monto Máximo</label>
          <input
            type="number"
            className={styles.filterInput}
            placeholder="$10000"
            value={montoMax}
            onChange={(e) => setMontoMax(e.target.value)}
          />
        </div>
      </div>

      <button className={styles.applyButton} onClick={handleFilter}>
        Aplicar Filtros
      </button>
    </div>
  );
}
