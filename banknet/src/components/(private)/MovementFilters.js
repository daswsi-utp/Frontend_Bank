'use client';

import { useState } from "react";
import { FaFileExcel } from "react-icons/fa";
import './usercss/MovementFilters.css';

export default function MovementFilters() {
  const movimientos = [
    {
      id: 1,
      detalle: "Transferencia recibida",
      monto: 200.0,
      fecha: "21 Abril",
      tipo: "Ingreso",
      icono: "T",
    },
    {
      id: 2,
      detalle: "Retiro en cajero",
      monto: 50.0,
      fecha: "20 Abril",
      tipo: "Egreso",
      icono: "R",
    },
    {
      id: 3,
      detalle: "Pago de luz",
      monto: 100.0,
      fecha: "19 Abril",
      tipo: "Egreso",
      icono: "T",
    },
  ];

  const [busqueda, setBusqueda] = useState("");

  const movimientosFiltrados = movimientos.filter((mov) =>
    mov.detalle.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="movement-container">
      <div className="movement-wrapper">
        <div className="account-summary">
          <h2>CUENTA:</h2>
          <p>Cuenta Yape Soles</p>
          <p>Disponible</p>
          <p className="saldo">S/0.00</p>
        </div>

        <div className="header-bar">
          <h3>Movimientos ({movimientosFiltrados.length})</h3>
          <button className="export-btn">
            <FaFileExcel /> Exportar Movimientos
          </button>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar movimiento..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className="results-list">
          {movimientosFiltrados.length > 0 ? (
            movimientosFiltrados.map((mov) => (
              <div key={mov.id} className="movement-card">
                <div className="movement-info">
                  <div className="movement-icon">{mov.icono}</div>
                  <div>
                    <p>{mov.detalle}</p>
                    <p className="fecha">{mov.fecha}</p>
                  </div>
                </div>
                <div>
                  <p className={`monto ${mov.tipo === "Ingreso" ? "ingreso" : "egreso"}`}>
                    {mov.tipo === "Egreso" ? "-" : ""}S/{mov.monto.toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No se encontró ningún registro.</p>
          )}
        </div>
      </div>
    </div>
  );
}
