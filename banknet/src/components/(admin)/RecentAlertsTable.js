// src/components/(admin)/RecentAlertsTable.js
'use client';

import React from 'react';

const RecentAlertsTable = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No hay alertas recientes.</div>;
  }

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', padding: '8px' }}>Tipo</th>
          <th style={{ textAlign: 'left', padding: '8px' }}>Mensaje</th>
          <th style={{ textAlign: 'left', padding: '8px' }}>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {data.map((alert, index) => (
          <tr key={index}>
            <td style={{ padding: '8px' }}>{alert.type || 'Desconocido'}</td>
            <td style={{ padding: '8px' }}>{alert.message || '---'}</td>
            <td style={{ padding: '8px' }}>
              {alert.date ? new Date(alert.date).toLocaleString() : '---'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecentAlertsTable;
