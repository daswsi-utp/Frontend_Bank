'use client';
import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { FaSearch, FaBroom } from 'react-icons/fa';

export default function MovementsFilters() {
  const [filters, setFilters] = useState({
    accountNumber: '',
    type: '',
    startDate: '',
    endDate: '',
    minAmount: '',
    maxAmount: ''
  });

  const [movements, setMovements] = useState([
    { accountNumber: '001', type: 'Depósito', date: '2025-04-10', amount: 500.00 },
    { accountNumber: '001', type: 'Retiro', date: '2025-04-12', amount: 150.00 },
    { accountNumber: '002', type: 'Transferencia', date: '2025-04-13', amount: 320.00 },
    { accountNumber: '003', type: 'Depósito', date: '2025-04-15', amount: 1000.00 },
    { accountNumber: '002', type: 'Retiro', date: '2025-04-18', amount: 200.00 },
    { accountNumber: '003', type: 'Transferencia', date: '2025-04-19', amount: 750.00 },
    { accountNumber: '001', type: 'Depósito', date: '2025-04-20', amount: 300.00 },
    { accountNumber: '003', type: 'Retiro', date: '2025-04-21', amount: 500.00 },
  ]);

  const [filtered, setFiltered] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const minAmount = filters.minAmount ? parseFloat(filters.minAmount) : -Infinity;
    const maxAmount = filters.maxAmount ? parseFloat(filters.maxAmount) : Infinity;

    const filteredData = movements.filter(movement => {
      return (
        movement.accountNumber.includes(filters.accountNumber) &&
        (filters.type === '' || movement.type === filters.type) &&
        (filters.startDate === '' || movement.date >= filters.startDate) &&
        (filters.endDate === '' || movement.date <= filters.endDate) &&
        movement.amount >= minAmount &&
        movement.amount <= maxAmount
      );
    });

    setFiltered(filteredData);
  };

  const resetFilters = () => {
    setFilters({
      accountNumber: '',
      type: '',
      startDate: '',
      endDate: '',
      minAmount: '',
      maxAmount: ''
    });
    setFiltered([]);
  };

  const inputStyle = {
    backgroundColor: '#ECE8EF',
    border: '1px solid #ccc',
    color: '#000',
    borderRadius: '10px',
    padding: '10px',
    marginBottom: '20px',
  };

  const labelStyle = {
    marginBottom: '10px',
    fontWeight: '600',
  };

  const buttonStyle = {
    backgroundColor: '#4392F1',
    borderColor: '#4392F1',
    color: '#fff',
    fontWeight: '600',
    padding: '10px 20px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const clearButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#DC493A',
    borderColor: '#DC493A',
  };

  return (
    <div style={{ padding: '40px' }}>
      <Card style={{ background: '#FFFEFF', color: '#000', padding: '40px', borderRadius: '16px', border: '1px solid #ddd' }}>
        <h2 style={{ color: '#4392F1', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '30px' }}>
          Filtros de Movimientos
        </h2>

        <Form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <Form.Label style={labelStyle}>Número de Cuenta</Form.Label>
              <Form.Control type="text" name="accountNumber" value={filters.accountNumber} onChange={handleInputChange} style={inputStyle} />
            </div>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <Form.Label style={labelStyle}>Tipo de Movimiento</Form.Label>
              <Form.Select name="type" value={filters.type} onChange={handleInputChange} style={inputStyle}>
                <option value="">Todos</option>
                <option value="Depósito">Depósito</option>
                <option value="Retiro">Retiro</option>
                <option value="Transferencia">Transferencia</option>
              </Form.Select>
            </div>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <Form.Label style={labelStyle}>Fecha Desde</Form.Label>
              <Form.Control type="date" name="startDate" value={filters.startDate} onChange={handleInputChange} style={inputStyle} />
            </div>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <Form.Label style={labelStyle}>Fecha Hasta</Form.Label>
              <Form.Control type="date" name="endDate" value={filters.endDate} onChange={handleInputChange} style={inputStyle} />
            </div>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <Form.Label style={labelStyle}>Monto Mínimo</Form.Label>
              <Form.Control type="number" name="minAmount" value={filters.minAmount} onChange={handleInputChange} style={inputStyle} />
            </div>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <Form.Label style={labelStyle}>Monto Máximo</Form.Label>
              <Form.Control type="number" name="maxAmount" value={filters.maxAmount} onChange={handleInputChange} style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
            <Button type="submit" style={buttonStyle}>
              <FaSearch /> Aplicar Filtros
            </Button>
            <Button type="button" style={clearButtonStyle} onClick={resetFilters}>
              <FaBroom /> Limpiar
            </Button>
          </div>
        </Form>
      </Card>

      {/* Resultados */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '40px' }}>
        {filtered.map((mov, idx) => (
          <Card key={idx} style={{
            backgroundColor: '#E7F0FF',
            border: '1px solid #4392F1',
            borderRadius: '14px',
            padding: '20px',
            width: '280px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <h5 style={{ color: '#4392F1' }}>Cuenta #{mov.accountNumber}</h5>
            <p><strong>Tipo:</strong> {mov.type}</p>
            <p><strong>Fecha:</strong> {mov.date}</p>
            <p><strong>Monto:</strong> ${mov.amount.toFixed(2)}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
