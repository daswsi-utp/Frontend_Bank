'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  FaUsers,
  FaCreditCard,
  FaChartBar,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

const AdminSidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const menuItems = [
    { icon: <FaUsers />, label: 'Usuarios', path: '/admin/filters_users' },
    { icon: <FaCreditCard />, label: 'Cuentas', path: '/admin/filters_account' },
    { icon: <FaChartBar />, label: 'Movimientos', path: '/admin/filters_movements' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    
    router.push('/'); 
  };

  const handleItemClick = (path: string) => {
    router.push(path);
    setActiveItem(path);
  };

  return (
    <div
      style={{
        width: isOpen ? '260px' : '80px',
        height: '100vh',
        background: '#FFFEFF', // Color de fondo principal
        color: '#000',
        transition: 'width 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 10px',
        position: 'relative',
        zIndex: 1000,
        borderRight: '1px solid #ECE8EF', // Borde gris claro
        boxShadow: '2px 0 5px rgba(0,0,0,0.05)'
      }}
    >
      {/* Botón Toggle */}
      <button
        onClick={toggleSidebar}
        style={{
          position: 'absolute',
          top: '20px',
          right: isOpen ? '-15px' : '-15px',
          background: '#4392F1', // Azul principal
          border: 'none',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          color: '#FFFEFF', // Texto blanco
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 0 5px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          zIndex: 1001,
          ':hover': {
            backgroundColor: '#3a7bc8' // Azul más oscuro al hover
          }
        }}
      >
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>

      {/* Avatar */}
      <div className="text-center mb-4" style={{ display: isOpen ? 'block' : 'none' }}>
        <div style={{
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          border: '3px solid #4392F1', // Borde azul
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E7F0FF' // Fondo azul claro
        }}>
          <span style={{ 
            fontSize: '32px',
            color: '#4392F1' // Icono azul
          }}>
            CR
          </span>
        </div>
        <h5 className="mt-3 mb-1" style={{ color: '#000' }}>Carlos Ramirez</h5>
        <p style={{ 
          color: '#4392F1', 
          fontSize: '14px', 
          fontWeight: '600',
          backgroundColor: '#E7F0FF', // Fondo azul claro
          padding: '4px 8px',
          borderRadius: '12px',
          display: 'inline-block'
        }}>
          Administrador
        </p>
      </div>

      {/* Menú */}
      <nav className="flex-grow-1">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(item.path)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px',
                marginBottom: '8px',
                borderRadius: '10px',
                cursor: 'pointer',
                backgroundColor: activeItem === item.path ? '#E7F0FF' : 'transparent', // Fondo azul claro cuando está activo
                transition: 'all 0.3s ease',
                color: activeItem === item.path ? '#4392F1' : '#000', // Texto azul cuando está activo
                ':hover': {
                  backgroundColor: '#E7F0FF' // Azul claro al hover
                }
              }}
            >
              <span style={{ 
                fontSize: '18px', 
                marginRight: isOpen ? '12px' : '0', 
                color: activeItem === item.path ? '#4392F1' : '#4392F1' // Iconos siempre azules
              }}>
                {item.icon}
              </span>
              {isOpen && <span style={{ 
                whiteSpace: 'nowrap',
                fontWeight: '600'
              }}>{item.label}</span>}
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer del sidebar */}
      <div style={{ 
        marginTop: 'auto',
        padding: '15px',
        textAlign: 'center',
        display: isOpen ? 'block' : 'none'
      }}>
        <button
      onClick={handleLogout}
      style={{
        backgroundColor: '#DC493A',
        color: '#FFFEFF',
        border: 'none',
        borderRadius: '8px',
        padding: '8px 16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#c23d2e';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#DC493A';
      }}
    >
      Cerrar Sesión
    </button>
      </div>
    </div>
  );
};

export default AdminSidebar;