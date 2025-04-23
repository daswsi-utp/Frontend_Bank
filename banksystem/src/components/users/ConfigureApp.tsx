"use client";
import React from 'react';
import { Container } from 'react-bootstrap';
import { FiBell, FiLock, FiGlobe, FiShield, FiKey, FiMoon, FiVolume2, FiSmartphone } from 'react-icons/fi';
import './usercss/ConfigureApp.css';

const ConfigureApp: React.FC = () => {
  return (
    <Container className="configure-container">
      <div className="configure-header">
        <h2 className="section-title">Configuración</h2>
        <p>Personaliza tu experiencia en la aplicación</p>
      </div>

      <div className="configure-grid">
        <section className="config-section">
          <div className="section-header">
            <FiBell className="section-icon" />
            <h3>Notificaciones</h3>
          </div>
          <div className="section-content">
            <div className="setting-item">
              <div className="setting-info">
                <FiSmartphone className="setting-icon" />
                <div>
                  <h4>Notificaciones push</h4>
                  <p>Recibe alertas instantáneas en tu dispositivo</p>
                </div>
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <FiVolume2 className="setting-icon" />
                <div>
                  <h4>Sonidos</h4>
                  <p>Alertas sonoras para notificaciones importantes</p>
                </div>
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </section>

        <section className="config-section">
          <div className="section-header">
            <FiLock className="section-icon" />
            <h3>Seguridad</h3>
          </div>
          <div className="section-content">
            <div className="setting-item">
              <div className="setting-info">
                <FiKey className="setting-icon" />
                <div>
                  <h4>Autenticación biométrica</h4>
                  <p>Usa tu huella digital o Face ID</p>
                </div>
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <FiShield className="setting-icon" />
                <div>
                  <h4>Verificación en dos pasos</h4>
                  <p>Protección adicional para tu cuenta</p>
                </div>
              </div>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </section>

        <section className="config-section">
          <div className="section-header">
            <FiGlobe className="section-icon" />
            <h3>Preferencias</h3>
          </div>
          <div className="section-content">
            <div className="setting-item">
              <div className="setting-info">
                <FiGlobe className="setting-icon" />
                <div>
                  <h4>Idioma</h4>
                  <p>Selecciona tu idioma preferido</p>
                </div>
              </div>
              <select className="select-custom">
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="pt">Português</option>
              </select>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <FiMoon className="setting-icon" />
                <div>
                  <h4>Modo oscuro</h4>
                  <p>Cambia el tema de la aplicación</p>
                </div>
              </div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default ConfigureApp;