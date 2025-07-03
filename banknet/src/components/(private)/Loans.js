'use client';

import React, { useEffect, useState } from 'react';
import { Container, Table, Alert, Spinner } from 'react-bootstrap';
import { getUserFromCookie } from '@/lib/auth';
import { getLoansByUserId } from '@/lib/loanService';

const Loans = () => {
  const [userId, setUserId] = useState(null);
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const user = getUserFromCookie();
    if (user?.userId) {
      setUserId(user.userId);
      fetchLoans(user.userId);
    }
  }, []);

  const fetchLoans = async (userId) => {
    try {
      const response = await getLoansByUserId(userId);
      setLoans(response);
    } catch (error) {
      console.error('❌ Error al obtener préstamos:', error);
      setMessage('No se pudieron cargar los préstamos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="pt-4">
      <h2 className="mb-4">📄 Mis Préstamos</h2>

      {message && <Alert variant="danger">{message}</Alert>}
      {loading ? (
        <div className="text-center"><Spinner animation="border" /></div>
      ) : loans.length === 0 ? (
        <p>No tienes préstamos registrados.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Monto</th>
              <th>Interés (%)</th>
              <th>Plazo (meses)</th>
              <th>Cuota mensual</th>
              <th>Estado</th>
              <th>Fecha de inicio</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan.id}>
                <td>{loan.id}</td>
                <td>S/. {loan.monto.toFixed(2)}</td>
                <td>{loan.interes}</td>
                <td>{loan.plazoMeses}</td>
                <td>S/. {loan.cuotaMensual.toFixed(2)}</td>
                <td>{loan.estado}</td>
                <td>{loan.fechaInicio?.split('T')[0]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Loans;
