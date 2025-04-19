'use client'
import React, { useState } from 'react';
import { Button, Form, Card, Table, Pagination, Badge } from 'react-bootstrap';
import { FaSearch, FaBroom, FaEdit } from 'react-icons/fa';

export default function UsersFilters() {
  const [filters, setFilters] = useState({
    name: '',
    email: '',
    role: '',
    status: ''
  });

  const [users, setUsers] = useState([
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com', role: 'Admin', status: 'Activo' },
    { id: 2, name: 'María García', email: 'maria@example.com', role: 'Usuario', status: 'Activo' },
    { id: 3, name: 'Carlos López', email: 'carlos@example.com', role: 'Usuario', status: 'Inactivo' },
    { id: 4, name: 'Ana Martínez', email: 'ana@example.com', role: 'Admin', status: 'Activo' },
    { id: 5, name: 'Luis Rodríguez', email: 'luis@example.com', role: 'Usuario', status: 'Inactivo' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredUsers = users.filter(user => {
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
      name: '',
      email: '',
      role: '',
      status: ''
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
          Filtros de Usuarios
        </h2>
        
        <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
          {/* Primera fila */}
          <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
            <div style={{ flex: 1 }}>
              <Form.Label style={labelStyle}>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={filters.name}
                onChange={handleInputChange}
                style={inputStyle}
              />
            </div>
            
            <div style={{ flex: 1 }}>
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

          {/* Segunda fila */}
          <div style={{ display: 'flex', gap: '40px', marginBottom: '50px' }}>
            <div style={{ flex: 1 }}>
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
            
            <div style={{ flex: 1 }}>
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
          Resultados ({filteredUsers.length})
        </h4>
        
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Badge 
                      bg={user.role === 'Admin' ? 'info' : 'secondary'}
                      style={{ padding: '8px 16px', borderRadius: '20px' }}
                    >
                      {user.role}
                    </Badge>
                  </td>
                  <td>
                    <Badge 
                      bg={user.status === 'Activo' ? 'success' : 'danger'}
                      style={{ padding: '8px 16px', borderRadius: '20px' }}
                    >
                      {user.status}
                    </Badge>
                  </td>
                  <td>
                    <Button variant="outline-info" size="sm">
                      <FaEdit className="me-1" />
                      Editar
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center text-muted">
                  No se encontraron usuarios con los filtros aplicados
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