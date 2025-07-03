'use client';

import React, { useEffect, useState } from 'react';
import { getAllAccounts, getMovementsByAccountId } from '@/lib/accountService';

export default function PruebaApiPage() {
  const [accounts, setAccounts] = useState([]);
  const [movements, setMovements] = useState([]);
  const [loadingAccounts, setLoadingAccounts] = useState(true);
  const [loadingMovements, setLoadingMovements] = useState(false);
  const [errorAccounts, setErrorAccounts] = useState(null);
  const [errorMovements, setErrorMovements] = useState(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const data = await getAllAccounts();
        console.log('📥 Cuentas:', data);
        setAccounts(data);

        // Obtener movimientos solo de la primera cuenta
        if (data.length > 0) {
          setLoadingMovements(true);
          const movs = await getMovementsByAccountId(data[0].id);
          console.log('📥 Movimientos de cuenta:', movs);
          setMovements(movs);
        }
      } catch (err) {
        setErrorAccounts('❌ Error al cargar cuentas');
        console.error(err);
      } finally {
        setLoadingAccounts(false);
        setLoadingMovements(false);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>🏦 Prueba de API - Cuentas y Movimientos</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2>📋 Cuentas</h2>
        {loadingAccounts && <p>Cargando cuentas...</p>}
        {errorAccounts && <p style={{ color: 'red' }}>{errorAccounts}</p>}
        {!loadingAccounts && accounts.length === 0 && <p>No hay cuentas disponibles.</p>}
        <ul>
          {accounts.map(acc => (
            <li key={acc.id}>
              <pre>{JSON.stringify(acc, null, 2)}</pre>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>📑 Movimientos de la Primera Cuenta</h2>
        {loadingMovements && <p>Cargando movimientos...</p>}
        {errorMovements && <p style={{ color: 'red' }}>{errorMovements}</p>}
        {!loadingMovements && movements.length === 0 && <p>No hay movimientos registrados.</p>}
        <ul>
          {movements.map(mov => (
            <li key={mov.id}>
              <pre>{JSON.stringify(mov, null, 2)}</pre>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
