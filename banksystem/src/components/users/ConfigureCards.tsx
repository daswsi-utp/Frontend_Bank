"use client";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiCreditCard, FiEye, FiEyeOff, FiShield, FiLock, FiGlobe } from 'react-icons/fi';
import './usercss/ConfigureCards.css';

const ConfigureCards: React.FC = () => {
  return (
    <Container className="configure-cards-container">
      <h2 className="section-title">Configurar mis tarjetas</h2>
      
      <div className="cards-container">
        <div className="card-item">
          <div className="card-preview visa">
            <div className="card-top">
              <div className="card-logo">
                <FiCreditCard />
                <span>Visa</span>
              </div>
              <div className="card-chip"></div>
            </div>
            <div className="card-number">**** **** **** 4581</div>
            <div className="card-bottom">
              <div className="card-name">John Doe</div>
              <div className="card-exp">08/28</div>
            </div>
          </div>
          
          <div className="card-actions">
            <button className="card-action-btn">
              <FiEye />
              <span>Ver detalles</span>
            </button>
            <button className="card-action-btn">
              <FiLock />
              <span>Bloquear</span>
            </button>
            <button className="card-action-btn">
              <FiShield />
              <span>Límites</span>
            </button>
          </div>
        </div>
        
        <div className="card-item">
          <div className="card-preview mastercard">
            <div className="card-top">
              <div className="card-logo">
                <FiCreditCard />
                <span>Mastercard</span>
              </div>
              <div className="card-chip"></div>
            </div>
            <div className="card-number">**** **** **** 7823</div>
            <div className="card-bottom">
              <div className="card-name">John Doe</div>
              <div className="card-exp">11/26</div>
            </div>
          </div>
          
          <div className="card-actions">
            <button className="card-action-btn">
              <FiEye />
              <span>Ver detalles</span>
            </button>
            <button className="card-action-btn">
              <FiLock />
              <span>Bloquear</span>
            </button>
            <button className="card-action-btn">
              <FiShield />
              <span>Límites</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="security-settings">
        <h4 className="settings-title">Configuración de seguridad</h4>
        
        <div className="settings-card">
          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-icon">
                <FiGlobe />
              </div>
              <div className="setting-text">
                <h5>Compras internacionales</h5>
                <p>Permite o bloquea compras fuera del país</p>
              </div>
            </div>
            <div className="setting-toggle">
              <input type="checkbox" id="international" className="toggle-checkbox" />
              <label htmlFor="international" className="toggle-label"></label>
            </div>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-icon">
                <FiCreditCard />
              </div>
              <div className="setting-text">
                <h5>Compras online</h5>
                <p>Permite o bloquea compras en internet</p>
              </div>
            </div>
            <div className="setting-toggle">
              <input type="checkbox" id="online" className="toggle-checkbox" checked />
              <label htmlFor="online" className="toggle-label"></label>
            </div>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <div className="setting-icon">
                <FiShield />
              </div>
              <div className="setting-text">
                <h5>Alertas de seguridad</h5>
                <p>Recibe notificaciones sobre operaciones inusuales</p>
              </div>
            </div>
            <div className="setting-toggle">
              <input type="checkbox" id="alerts" className="toggle-checkbox" checked />
              <label htmlFor="alerts" className="toggle-label"></label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="button-container">
        <button className="order-button">
          Solicitar nueva tarjeta
        </button>
      </div>
    </Container>
  );
};

export default ConfigureCards;