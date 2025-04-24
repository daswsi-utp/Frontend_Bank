'use client'
import React, { useState } from 'react';
import { Button, Form, Card, Table, Pagination, Badge } from 'react-bootstrap';
import { FaSearch, FaBroom, FaEdit } from 'react-icons/fa';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Usuario';
  status: 'Activo' | 'Inactivo';
}

interface Filters {
  name: string;
  email: string;
  role: string;
  status: string;
}

export default function UsersFilters() {
  const [filters, setFilters] = useState<Filters>({
    name: '',
    email: '',
    role: '',
    status: ''
  });

  const [hoverBuscar, setHoverBuscar] = useState(false);
  const [hoverLimpiar, setHoverLimpiar] = useState(false);
  const [searchTriggered, setSearchTriggered] = useState(false);

  const [users] = useState<User[]>([
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com', role: 'Admin', status: 'Activo' },
    { id: 2, name: 'María García', email: 'maria@example.com', role: 'Usuario', status: 'Activo' },
    { id: 3, name: 'Carlos López', email: 'carlos@example.com', role: 'Usuario', status: 'Inactivo' },
    { id: 4, name: 'Ana Martínez', email: 'ana@example.com', role: 'Admin', status: 'Activo' },
    { id: 5, name: 'Luis Rodríguez', email: 'luis@example.com', role: 'Usuario', status: 'Inactivo' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredUsers = users.filter(user => {
    if (!searchTriggered) return true;
    
    return (
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      (filters.role === '' || user.role === filters.role) &&
      (filters.status === '' || user.status === filters.status)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTriggered(true);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setFilters({
      name: '',
      email: '',
      role: '',
      status: ''
    });
    setSearchTriggered(false);
    setCurrentPage(1);
  };

  // Estilos del diseño original
  const inputStyle: React.CSSProperties = {
    backgroundColor: '#ECE8EF',
    border: '1px solid #ccc',
    color: '#000',
    borderRadius: '10px',
    padding: '12px 15px', // Aumentado el padding para más espacio interno
    marginBottom: '25px', // Aumentado el margen inferior
    width: '100%',
  };

  const labelStyle: React.CSSProperties = {
    marginBottom: '12px', // Aumentado el margen inferior
    fontWeight: '600',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#4392F1',
    borderColor: '#4392F1',
    color: '#fff',
    fontWeight: '600',
    padding: '12px 24px', // Aumentado el padding
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    marginTop: '10px', // Añadido margen superior
  };

  const clearButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#DC493A',
    borderColor: '#DC493A',
  };

  const hoverButtonStyle: React.CSSProperties = {
    boxShadow: '0 4px 12px rgba(67, 146, 241, 0.4)',
    transform: 'translateY(-2px)',
    backgroundColor: '#297be6',
  };

  const hoverClearStyle: React.CSSProperties = {
    boxShadow: '0 4px 12px rgba(220, 73, 58, 0.4)',
    transform: 'translateY(-2px)',
    backgroundColor: '#b8382a',
  };

  return (
    <div style={{ padding: '40px' }}>
      {/* Filtros */}
      <Card
        style={{
          background: '#FFFEFF',
          color: '#000',
          padding: '40px',
          borderRadius: '16px',
          border: '1px solid #ddd',
          marginBottom: '40px'
        }}
      >
        <h2 style={{ color: '#4392F1', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '30px' }}>
          Filtro de Usuarios
        </h2>

        <Form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '35px', flexWrap: 'wrap', marginBottom: '20px' }}> {/* Aumentado el gap */}
            <div style={{ flex: 1, minWidth: '250px' }}>
              <Form.Label style={labelStyle}>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={filters.name}
                onChange={handleInputChange}
                style={inputStyle}
              />
            </div>

            <div style={{ flex: 1, minWidth: '250px' }}>
              <Form.Label style={labelStyle}>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={filters.email}
                onChange={handleInputChange}
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '35px', flexWrap: 'wrap', marginBottom: '20px' }}> {/* Aumentado el gap */}
            <div style={{ flex: 1, minWidth: '250px' }}>
              <Form.Label style={labelStyle}>Rol</Form.Label>
              <Form.Select
                name="role"
                value={filters.role}
                onChange={handleInputChange}
                style={inputStyle}
              >
                <option value="">Todos</option>
                <option value="Admin">Administrador</option>
                <option value="Usuario">Usuario</option>
              </Form.Select>
            </div>

            <div style={{ flex: 1, minWidth: '250px' }}>
              <Form.Label style={labelStyle}>Estado</Form.Label>
              <Form.Select
                name="status"
                value={filters.status}
                onChange={handleInputChange}
                style={inputStyle}
              >
                <option value="">Todos</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </Form.Select>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}> {/* Aumentado el gap */}
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
              onClick={resetFilters}
              onMouseEnter={() => setHoverLimpiar(true)}
              onMouseLeave={() => setHoverLimpiar(false)}
            >
              <FaBroom /> Limpiar
            </Button>
          </div>
        </Form>
      </Card>

      {/* Resultados */}
      <Card style={{
        background: '#FFFEFF',
        color: '#000',
        padding: '40px',
        borderRadius: '16px',
        border: '1px solid #ddd',
      }}>
        <h2 style={{ color: '#4392F1', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '30px' }}>
          Resultados ({filteredUsers.length})
        </h2>

        <div style={{ width: '100%', overflowX: 'auto' }}>
          <Table bordered hover responsive style={{ width: '100%', backgroundColor: '#fff' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'center' }}>ID</th>
                <th style={{ textAlign: 'center' }}>Nombre</th>
                <th style={{ textAlign: 'center' }}>Email</th>
                <th style={{ textAlign: 'center' }}>Rol</th>
                <th style={{ textAlign: 'center' }}>Estado</th>
                <th style={{ textAlign: 'center' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map(user => (
                  <tr key={user.id}>
                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{user.id}</td>
                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{user.name}</td>
                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{user.email}</td>
                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      <Badge bg={user.role === 'Admin' ? 'info' : 'secondary'}>
                        {user.role}
                      </Badge>
                    </td>
                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      <Badge bg={user.status === 'Activo' ? 'success' : 'danger'}>
                        {user.status}
                      </Badge>
                    </td>
                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      <Button 
                        variant="outline-info" 
                        size="sm"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '5px',
                          borderColor: '#4392F1',
                          color: '#4392F1',
                          margin: '0 auto'
                        }}
                      >
                        <FaEdit /> Editar
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center text-muted" style={{ padding: '20px' }}>
                    {searchTriggered 
                      ? 'No se encontraron usuarios con los filtros aplicados' 
                      : 'Utilice los filtros para buscar usuarios'}
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>

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