"use client";
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiUser, FiSettings, FiCreditCard, FiHelpCircle, FiLogOut, FiRepeat, FiGrid, FiMenu, FiActivity } from 'react-icons/fi';
import './usercss/Layout.css';

interface LayoutProps {
  children: React.ReactNode;
  setActiveView: (view: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, setActiveView }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuItems = [
    { name: 'Mi perfil', icon: <FiUser />, view: 'profile' },
    { name: 'Configurar mi app', icon: <FiSettings />, view: 'configureApp' },
    { name: 'Configurar mis tarjetas', icon: <FiCreditCard />, view: 'configureCards' },
    { name: 'Centro de ayuda', icon: <FiHelpCircle />, view: 'helpCenter' },
    { name: 'Cerrar sesión', icon: <FiLogOut />, view: 'logout' },
  ];

  return (
    <Container fluid className="layout-container p-0">
      <div className="top-bar">
        <div className="menu-button" onClick={toggleMenu}>
          <FiMenu />
        </div>
        <div className="top-options">
          <div className="option" onClick={() => setActiveView('transfers')}>
            <FiRepeat className="option-icon" />
            <span>Transferencias</span>
          </div>
          <div className="option" onClick={() => setActiveView('services')}>
            <FiGrid className="option-icon" />
            <span>Servicios</span>
          </div>
          <div className="option" onClick={() => setActiveView('movimientos')}>
            <FiActivity className="option-icon" />
            <span>Movimientos</span>
          </div>
        </div>
      </div>

      <div className="content-area">
        {children}
      </div>

      <div className={`menu-overlay ${showMenu ? 'active' : ''}`} onClick={toggleMenu}></div>
      
      <div className={`side-menu ${showMenu ? 'active' : ''}`}>
        <div className="menu-header">
          <h3>Opciones</h3>
        </div>
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={index} 
                onClick={() => {
                  setActiveView(item.view);
                  setShowMenu(false);
                }}
                className="menu-item">
              <div className="menu-icon">{item.icon}</div>
              <div className="menu-text">{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Layout;