"use client";
import { useState } from "react";
import { FaFileExcel } from "react-icons/fa";

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
    <div className="flex">
      <div className="flex-1 p-6">
        <div className="border border-black bg-blue-200 rounded p-4 mb-6">
          <h2 className="font-bold text-lg">CUENTA:</h2>
          <p className="text-sm">Cuenta Yape Soles</p>
          <p className="text-sm">Disponible</p>
          <p className="text-xl font-semibold">S/0.00</p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">
            Movimientos ({movimientosFiltrados.length})
          </h3>
          <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            <FaFileExcel /> Exportar Movimientos
          </button>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar movimiento..."
            value={busqueda}
            onChange={(e) => (setBusqueda(e.target.value))}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div className="space-y-4">
          {movimientosFiltrados.length > 0 ? (
            movimientosFiltrados.map((mov) => (
              <div
                key={mov.id}
                className="border rounded p-4 shadow flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {mov.icono}
                  </div>
                  <div>
                    <p className="text-sm">{mov.detalle}</p>
                    <p className="text-gray-500 text-sm">{mov.fecha}</p>
                  </div>
                </div>
                <div>
                  <p
                    className={`font-semibold text-right ${
                      mov.tipo === "Ingreso"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {mov.tipo === "Egreso" ? "-" : ""}S/
                    {mov.monto.toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 italic">
              No se encontró ningún registro.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
