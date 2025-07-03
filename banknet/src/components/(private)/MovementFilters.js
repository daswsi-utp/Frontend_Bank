'use client';

import { useEffect, useState } from "react";
import { getUserFromCookie } from '@/lib/auth';
import { getAccountsByUserId, getMovementsByAccountId } from '@/lib/accountService';
import './usercss/MovementFilters.css';

export default function MovementFilters() {
  const [account, setAccount] = useState(null);
  const [movements, setMovements] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const user = getUserFromCookie();
      console.log("Usuario desde cookie:", user);

      if (!user) return;

      try {
        const userAccounts = await getAccountsByUserId(user.userId);
        console.log("Cuentas encontradas:", userAccounts);

        if (userAccounts.length > 0) {
          const mainAccount = userAccounts[0];
          setAccount(mainAccount);
          console.log("Cuenta principal:", mainAccount);

          const accountMovements = await getMovementsByAccountId(mainAccount.id);
          console.log("Movimientos encontrados:", accountMovements);

          setMovements(accountMovements);
        }
      } catch (error) {
        console.error("Error al cargar datos de cuenta y movimientos", error);
      }
    };

    fetchData();
  }, []);

  const movimientosFiltrados = movements.filter((mov) =>
    mov.description && mov.description.toLowerCase().includes(busqueda.toLowerCase())
  );

  const esIngreso = (tipo) => {
    return tipo === "DEPOSITO" || tipo === "TRANSFERENCIA_RECIBIDA";
  };

  return (
    <div className="movement-container">
      <div className="movement-wrapper">
        {account ? (
          <div className="account-summary">
            <h2>Cuenta Asociada</h2>
            <p><strong>Número:</strong> {account.accountNumber}</p>
            <p><strong>Saldo Disponible:</strong></p>
            <p className="saldo">S/{parseFloat(account.balance).toFixed(2)}</p>
          </div>
        ) : (
          <p>Cargando cuenta...</p>
        )}

        <div className="header-bar">
          <h3>Movimientos ({movimientosFiltrados.length})</h3>
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
                  <div className="movement-icon">{mov.movementType.charAt(0)}</div>
                  <div>
                    <p className="descripcion">{mov.description || "Sin descripción"}</p>
                    <p className="tipo-movimiento"><strong>Tipo:</strong> {mov.movementType}</p>
                    <p className="fecha">{new Date(mov.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div>
                  <p className={`monto ${esIngreso(mov.movementType) ? "ingreso" : "egreso"}`}>
                    {esIngreso(mov.movementType) ? "" : "-"}S/{parseFloat(mov.amount).toFixed(2)}
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
