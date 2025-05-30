'use client';

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FiLogOut, FiAlertTriangle } from 'react-icons/fi';
import './usercss/Logout.css';

const Logout = () => {
  return (
    <Container className="logout-container">
      <div className="logout-card">
        <div className="logout-icon">
          <FiLogOut />
        </div>

        <h2 className="logout-title">¿Deseas cerrar sesión?</h2>

        <p className="logout-message">
          Estás a punto de cerrar tu sesión en la aplicación. 
          Por razones de seguridad, deberás volver a iniciar sesión 
          para acceder a tus cuentas y servicios.
        </p>

        <div className="security-alert">
          <FiAlertTriangle className="alert-icon" />
          <p>
            Recuerda siempre cerrar sesión en dispositivos compartidos o públicos.
          </p>
        </div>

        <div className="logout-actions">
          <Button variant="outline-secondary" className="cancel-button">
            Cancelar
          </Button>

          <Button variant="danger" className="confirm-button">
            Cerrar sesión
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Logout;
