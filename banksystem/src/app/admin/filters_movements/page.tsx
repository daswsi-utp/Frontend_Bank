'use client';
import React, { useState } from 'react';
import { Button, Form, Row, Col, Card, Table, Pagination, Badge } from 'react-bootstrap';
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
    {
      id: 1,
      date: '2023-05-15',
      accountNumber: '123456789',
      description: 'Depósito inicial',
      type: 'Depósito',
      amount: 1000.0,
      balance: 1000.0
    },
    {
      id: 2,
      date: '2023-05-16',
      accountNumber: '123456789',
      description: 'Transferencia recibida',
      type: 'Transferencia',
      amount: 500.5,
      balance: 1500.5
    },
    {
      id: 3,
      date: '2023-05-17',
      accountNumber: '987654321',
      description: 'Retiro en cajero',
      type: 'Retiro',
      amount: -200.0,
      balance: 3000.75
    }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredMovements = movements.filter(movement => {
    const amount = movement.amount;
    const minAmount = filters.minAmount ? parseFloat(filters.minAmount) : -Infinity;
    const maxAmount = filters.maxAmount ? parseFloat(filters.maxAmount) : Infinity;

    return (
      movement.accountNumber.includes(filters.accountNumber) &&
      (filters.type === '' || movement.type === filters.type) &&
      (filters.startDate === '' || movement.date >= filters.startDate) &&
      (filters.endDate === '' || movement.date <= filters.endDate) &&
      amount >= minAmount &&
      amount <= maxAmount
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMovements.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredMovements.length / itemsPerPage);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
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
    setCurrentPage(1);
  };

  const inputStyle = {
    backgroundColor: '#2e2e48',
    border: 'none',
    color: '#fff',
    transition: 'all 0.3s ease',
    marginBottom: '25px',
    height: '45px'
  };

  const labelStyle = {
    marginBottom: '10px',
    display: 'block',
    color: '#aaa'
  };

  return (
    <div style={{ padding: '40px' }}>
      <Card
        style={{
          background: '#1e1e2f',
          color: '#fff',
          padding: '50px',
          border: 'none',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}
      >
        <h2 className="mb-5" style={{ color: '#4392F1', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '30px' }}>
          Filtros de Movimientos
        </h2>
        
        <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
          {/* Primera fila */}
          <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
            <div style={{ flex: 1 }}>
              <Form.Label style={labelStyle}>Número de Cuenta</Form.Label>
              <Form.Control
                type="text"
                name="accountNumber"
                value={filters.accountNumber}
                onChange={handleInputChange}
                style={inputStyle}
              />
            </div>
            
            <div style={{ flex: 1 }}>
              <Form.Label style={labelStyle}>Tipo de Movimiento</Form.Label>
              <Form.Select
                name="type"
                value={filters.type}
                onChange={handleInputChange}
                style={inputStyle}
              >
                <option value="">Todos</option>
                <option value="Depósito">Depósito</option>
                <option value="Retiro">Retiro</option>
                <option value="Transferencia">Transferencia</option>
              </Form.Select>
            </div>
            
            <div style={{ flex: 1 }}>
              <Form.Label style={labelStyle}>Fecha Desde</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={filters.startDate}
                onChange={handleInputChange}
                style={inputStyle}
              />
            </div>
          </div>

          {/* Segunda fila */}
          <div style={{ display: 'flex', gap: '40px', marginBottom: '50px' }}>
            <div style={{ flex: 1 }}>
              <Form.Label style={labelStyle}>Fecha Hasta</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={filters.endDate}
                onChange={handleInputChange}
                style={inputStyle}
              />
            </div>
            
            <div style={{ flex: 1 }}>
              <Form.Label style={labelStyle}>Monto Mínimo</Form.Label>
              <Form.Control
                type="number"
                name="minAmount"
                value={filters.minAmount}
                onChange={handleInputChange}
                style={inputStyle}
                min="0"
                step="0.01"
              />
            </div>
            
            <div style={{ flex: 1 }}>
              <Form.Label style={labelStyle}>Monto Máximo</Form.Label>
              <Form.Control
                type="number"
                name="maxAmount"
                value={filters.maxAmount}
                onChange={handleInputChange}
                style={inputStyle}
                min="0"
                step="0.01"
              />
            </div>
          </div>

          {/* Botones */}
          <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
            <Button 
              variant="outline-light" 
              onClick={resetFilters}
              style={{ 
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              <FaBroom className="me-2" />
              Limpiar
            </Button>
            <Button 
              variant="primary" 
              type="submit"
              style={{ 
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              <FaSearch className="me-2" />
              Aplicar Filtros
            </Button>
          </div>
        </Form>
      </Card>

      {/* Tabla de resultados */}
      <Card
        style={{
          background: '#1e1e2f',
          color: '#fff',
          padding: '50px',
          border: 'none',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          marginTop: '40px'
        }}
      >
        <h4 style={{ color: '#4392F1', marginBottom: '30px' }}>
          Resultados ({filteredMovements.length})
        </h4>
        
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Cuenta</th>
              <th>Descripción</th>
              <th>Tipo</th>
              <th>Monto</th>
              <th>Saldo</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map(movement => (
                <tr key={movement.id}>
                  <td>{movement.date}</td>
                  <td>{movement.accountNumber}</td>
                  <td>{movement.description}</td>
                  <td>
                    <Badge 
                      bg={
                        movement.type === 'Depósito' ? 'success' : 
                        movement.type === 'Retiro' ? 'danger' : 'info'
                      }
                      style={{ padding: '8px 16px', borderRadius: '20px' }}
                    >
                      {movement.type}
                    </Badge>
                  </td>
                  <td style={{ color: movement.amount >= 0 ? '#28a745' : '#dc3545' }}>
                    {movement.amount >= 0 ? '+' : ''}
                    {movement.amount.toFixed(2)}
                  </td>
                  <td>{movement.balance.toFixed(2)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center text-muted">
                  No se encontraron movimientos con los filtros aplicados
                </td>
              </tr>
            )}
          </tbody>
        </Table>

        {totalPages > 1 && (
          <div className="d-flex justify-content-center mt-4">
            <Pagination>
              <Pagination.Prev 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              />
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <Pagination.Item 
                  key={page}
                  active={page === currentPage}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Pagination.Item>
              ))}
              
              <Pagination.Next 
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              />
            </Pagination>
          </div>
        )}
      </Card>
    </div>
  );
}