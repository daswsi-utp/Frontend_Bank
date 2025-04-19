'use client';
import React, { useState } from 'react';
import { Button, Form, Row, Col, Card, Table } from 'react-bootstrap';
import { FaSearch, FaBroom } from 'react-icons/fa';

const AccountFilterForm = () => {
  const [filters, setFilters] = useState({
    numero: '',
    tipo: '',
    moneda: '',
    estado: '',
    saldoMin: '',
    saldoMax: '',
  });

  const [resultados, setResultados] = useState([]);

  const cuentasDummy = [
    { numero: '001', tipo: 'Ahorros', moneda: 'USD', estado: 'Activa', saldo: 1200 },
    { numero: '002', tipo: 'Corriente', moneda: 'USD', estado: 'Activa', saldo: 4000 },
    { numero: '003', tipo: 'Ahorros', moneda: 'EUR', estado: 'Inactiva', saldo: 850 },
    { numero: '004', tipo: 'Corriente', moneda: 'USD', estado: 'Activa', saldo: 1100 },
    { numero: '005', tipo: 'Ahorros', moneda: 'USD', estado: 'Activa', saldo: 2500 },
    { numero: '006', tipo: 'Corriente', moneda: 'EUR', estado: 'Inactiva', saldo: 3200 },
    { numero: '007', tipo: 'Ahorros', moneda: 'USD', estado: 'Activa', saldo: 1900 },
    { numero: '008', tipo: 'Corriente', moneda: 'EUR', estado: 'Activa', saldo: 720 },
    { numero: '009', tipo: 'Ahorros', moneda: 'USD', estado: 'Inactiva', saldo: 400 },
    { numero: '010', tipo: 'Corriente', moneda: 'USD', estado: 'Activa', saldo: 5000 },
  ];

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const limpiar = () => {
    setFilters({
      numero: '',
      tipo: '',
      moneda: '',
      estado: '',
      saldoMin: '',
      saldoMax: '',
    });
    setResultados([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtrados = cuentasDummy.filter((cuenta) => {
      const matchNumero = filters.numero === '' || cuenta.numero.includes(filters.numero);
      const matchTipo = filters.tipo === '' || cuenta.tipo === filters.tipo;
      const matchMoneda = filters.moneda === '' || cuenta.moneda === filters.moneda;
      const matchEstado = filters.estado === '' || cuenta.estado === filters.estado;
      const matchSaldoMin = filters.saldoMin === '' || cuenta.saldo >= parseFloat(filters.saldoMin);
      const matchSaldoMax = filters.saldoMax === '' || cuenta.saldo <= parseFloat(filters.saldoMax);
      return matchNumero && matchTipo && matchMoneda && matchEstado && matchSaldoMin && matchSaldoMax;
    });
    setResultados(filtrados);
  };

  const inputStyle = {
    backgroundColor: '#2e2e48',
    border: 'none',
    color: '#fff',
    transition: 'all 0.3s ease',
    marginBottom: '25px', // Añadido margen inferior más grande
  };

  const labelStyle = {
    marginBottom: '10px', // Margen para los labels
    display: 'block',
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
          Filtro de Cuentas
        </h2>
        
        <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
          {/* Primera fila */}
          <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
            <div style={{ flex: 1 }}>
              <Form.Label style={labelStyle}>Número de Cuenta</Form.Label>
              <Form.Control
                type="text"
                name="numero"
                value={filters.numero}
                onChange={handleChange}
                style={{ ...inputStyle, height: '45px' }}
              />
            </div>
            
            <div style={{ flex: 1 }}>
              <Form.Label style={labelStyle}>Tipo de Cuenta</Form.Label>
              <Form.Select
                name="tipo"
                value={filters.tipo}
                onChange={handleChange}
                style={{ ...inputStyle, height: '45px' }}
              >
                <option value="">Todos</option>
                <option value="Ahorros">Ahorros</option>
                <option value="Corriente">Corriente</option>
              </Form.Select>
            </div>
            
            <div style={{ flex: 1 }}>
              <Form.Label style={labelStyle}>Moneda</Form.Label>
              <Form.Select
                name="moneda"
                value={filters.moneda}
                onChange={handleChange}
                style={{ ...inputStyle, height: '45px' }}
              >
                <option value="">Todas</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </Form.Select>
            </div>
          </div>

          {/* Segunda fila */}
          <div style={{ display: 'flex', gap: '40px', marginBottom: '50px' }}>
            <div style={{ flex: 1 }}>
              <Form.Label style={labelStyle}>Estado</Form.Label>
              <Form.Select
                name="estado"
                value={filters.estado}
                onChange={handleChange}
                style={{ ...inputStyle, height: '45px' }}
              >
                <option value="">Todos</option>
                <option value="Activa">Activa</option>
                <option value="Inactiva">Inactiva</option>
              </Form.Select>
            </div>
            
            <div style={{ flex: 1 }}>
              <Form.Label style={labelStyle}>Saldo Mínimo</Form.Label>
              <Form.Control
                type="number"
                name="saldoMin"
                value={filters.saldoMin}
                onChange={handleChange}
                style={{ ...inputStyle, height: '45px' }}
              />
            </div>
            
            <div style={{ flex: 1 }}>
              <Form.Label style={labelStyle}>Saldo Máximo</Form.Label>
              <Form.Control
                type="number"
                name="saldoMax"
                value={filters.saldoMax}
                onChange={handleChange}
                style={{ ...inputStyle, height: '45px' }}
              />
            </div>
          </div>

          {/* Botones */}
          <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
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
              Buscar
            </Button>
            <Button 
              variant="outline-light" 
              onClick={limpiar}
              style={{ 
                padding: '12px 30px',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              <FaBroom className="me-2" />
              Limpiar
            </Button>
          </div>
        </Form>

        {resultados.length > 0 && (
          <div style={{ marginTop: '50px' }}>
            <h4 style={{ color: '#aaa', marginBottom: '30px' }}>Resultados</h4>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Número</th>
                  <th>Tipo</th>
                  <th>Moneda</th>
                  <th>Estado</th>
                  <th>Saldo</th>
                </tr>
              </thead>
              <tbody>
                {resultados.map((cuenta, index) => (
                  <tr key={index}>
                    <td>{cuenta.numero}</td>
                    <td>{cuenta.tipo}</td>
                    <td>{cuenta.moneda}</td>
                    <td>{cuenta.estado}</td>
                    <td>{cuenta.saldo}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </Card>
    </div>
  );
};

export default AccountFilterForm;