'use client';
import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
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

  const [hoverBuscar, setHoverBuscar] = useState(false);
  const [hoverLimpiar, setHoverLimpiar] = useState(false);
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
    const saldoMin = filters.saldoMin !== '' ? parseFloat(filters.saldoMin) : null;
    const saldoMax = filters.saldoMax !== '' ? parseFloat(filters.saldoMax) : null;

    const filtrados = cuentasDummy.filter((cuenta) => {
      const matchNumero = filters.numero === '' || cuenta.numero.includes(filters.numero);
      const matchTipo = filters.tipo === '' || cuenta.tipo === filters.tipo;
      const matchMoneda = filters.moneda === '' || cuenta.moneda === filters.moneda;
      const matchEstado = filters.estado === '' || cuenta.estado === filters.estado;
      const matchSaldoMin = saldoMin === null || cuenta.saldo >= saldoMin;
      const matchSaldoMax = saldoMax === null || cuenta.saldo <= saldoMax;

      return matchNumero && matchTipo && matchMoneda && matchEstado && matchSaldoMin && matchSaldoMax;
    });

    setResultados(filtrados);
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

  const hoverButtonStyle = {
    boxShadow: '0 4px 12px rgba(67, 146, 241, 0.4)',
    transform: 'translateY(-2px)',
    backgroundColor: '#297be6',
  };

  const hoverClearStyle = {
    boxShadow: '0 4px 12px rgba(220, 73, 58, 0.4)',
    transform: 'translateY(-2px)',
    backgroundColor: '#b8382a',
  };

  return (
    <div style={{ padding: '40px' }}>
      <Card
        style={{
          background: '#FFFEFF',
          color: '#000',
          padding: '40px',
          borderRadius: '16px',
          border: '1px solid #ddd',
        }}
      >
        <h2 style={{ color: '#4392F1', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '30px' }}>
          Filtro de Cuentas
        </h2>

        <Form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <Form.Label style={labelStyle}>Número de Cuenta</Form.Label>
              <Form.Control type="text" name="numero" value={filters.numero} onChange={handleChange} style={inputStyle} />
            </div>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <Form.Label style={labelStyle}>Tipo</Form.Label>
              <Form.Select name="tipo" value={filters.tipo} onChange={handleChange} style={inputStyle}>
                <option value="">Todos</option>
                <option value="Ahorros">Ahorros</option>
                <option value="Corriente">Corriente</option>
              </Form.Select>
            </div>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <Form.Label style={labelStyle}>Moneda</Form.Label>
              <Form.Select name="moneda" value={filters.moneda} onChange={handleChange} style={inputStyle}>
                <option value="">Todas</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </Form.Select>
            </div>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <Form.Label style={labelStyle}>Estado</Form.Label>
              <Form.Select name="estado" value={filters.estado} onChange={handleChange} style={inputStyle}>
                <option value="">Todos</option>
                <option value="Activa">Activa</option>
                <option value="Inactiva">Inactiva</option>
              </Form.Select>
            </div>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <Form.Label style={labelStyle}>Saldo Mínimo</Form.Label>
              <Form.Control type="number" name="saldoMin" value={filters.saldoMin} onChange={handleChange} style={inputStyle} />
            </div>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <Form.Label style={labelStyle}>Saldo Máximo</Form.Label>
              <Form.Control type="number" name="saldoMax" value={filters.saldoMax} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
            <Button
              type="submit"
              style={hoverBuscar ? { ...buttonStyle, ...hoverButtonStyle } : buttonStyle}
              onMouseEnter={() => setHoverBuscar(true)}
              onMouseLeave={() => setHoverBuscar(false)}
            >
              <FaSearch /> Buscar
            </Button>
            <Button
              type="button"
              style={hoverLimpiar ? { ...clearButtonStyle, ...hoverClearStyle } : clearButtonStyle}
              onClick={limpiar}
              onMouseEnter={() => setHoverLimpiar(true)}
              onMouseLeave={() => setHoverLimpiar(false)}
            >
              <FaBroom /> Limpiar
            </Button>
          </div>
        </Form>
      </Card>

      {/* Tarjetas de resultados */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '40px' }}>
        {resultados.map((cuenta, idx) => (
          <Card key={idx} style={{
            backgroundColor: '#E7F0FF',
            border: '1px solid #4392F1',
            borderRadius: '14px',
            padding: '20px',
            width: '280px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <h5 style={{ color: '#4392F1' }}>Cuenta #{cuenta.numero}</h5>
            <p><strong>Tipo:</strong> {cuenta.tipo}</p>
            <p><strong>Moneda:</strong> {cuenta.moneda}</p>
            <p><strong>Estado:</strong> {cuenta.estado}</p>
            <p><strong>Saldo:</strong> ${cuenta.saldo.toLocaleString()}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AccountFilterForm;
