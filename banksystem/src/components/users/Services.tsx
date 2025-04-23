"use client";
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FiSearch, FiPhone, FiFileText, FiBarChart2 } from 'react-icons/fi';
import './usercss/Services.css';

// Mock data for services
const servicesData = [
  { id: 1, name: 'Luz del Sur', category: 'utilities', icon: 'FiZap' },
  { id: 2, name: 'Enel', category: 'utilities', icon: 'FiZap' },
  { id: 3, name: 'Sedapal', category: 'utilities', icon: 'FiDroplet' },
  { id: 4, name: 'Movistar', category: 'telecom', icon: 'FiPhone' },
  { id: 5, name: 'Claro', category: 'telecom', icon: 'FiPhone' },
  { id: 6, name: 'Entel', category: 'telecom', icon: 'FiPhone' },
  { id: 7, name: 'Netflix', category: 'entertainment', icon: 'FiTv' },
  { id: 8, name: 'Disney+', category: 'entertainment', icon: 'FiTv' },
  { id: 9, name: 'Spotify', category: 'entertainment', icon: 'FiMusic' },
  { id: 10, name: 'Universidad PUCP', category: 'education', icon: 'FiBookOpen' },
  { id: 11, name: 'Universidad de Lima', category: 'education', icon: 'FiBookOpen' },
  { id: 12, name: 'UPC', category: 'education', icon: 'FiBookOpen' },
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('services');
  const [searchTerm, setSearchTerm] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const filteredServices = servicesData.filter(service => 
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <Container className="services-container">
      <h2 className="section-title">Servicios</h2>
      
      <div className="service-tabs">
        <div 
          className={`service-tab ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => setActiveTab('services')}
        >
          <FiFileText className="tab-icon" />
          <span>Pagar servicios</span>
        </div>
        <div 
          className={`service-tab ${activeTab === 'institutions' ? 'active' : ''}`}
          onClick={() => setActiveTab('institutions')}
        >
          <FiBarChart2 className="tab-icon" />
          <span>Instituciones</span>
        </div>
        <div 
          className={`service-tab ${activeTab === 'recharge' ? 'active' : ''}`}
          onClick={() => setActiveTab('recharge')}
        >
          <FiPhone className="tab-icon" />
          <span>Recargar celular</span>
        </div>
      </div>
      
      <div className="service-content">
        {activeTab === 'services' && (
          <div className="services-list-container">
            <div className="search-box">
              <FiSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Buscar servicio..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <h5 className="services-subtitle">Servicios disponibles</h5>
            
            <Row className="services-grid">
              {filteredServices.map(service => (
                <Col xs={6} md={4} key={service.id}>
                  <div className="service-card">
                    <div className="service-icon">
                      <FiFileText />
                    </div>
                    <div className="service-name">{service.name}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        )}
        
        {activeTab === 'institutions' && (
          <div className="institutions-container">
            <div className="search-box">
              <FiSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Buscar institución..." 
                className="search-input"
              />
            </div>
            
            <h5 className="services-subtitle">Instituciones disponibles</h5>
            
            <Row className="services-grid">
              <Col xs={6} md={4}>
                <div className="service-card">
                  <div className="service-icon">
                    <FiBarChart2 />
                  </div>
                  <div className="service-name">SUNAT</div>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div className="service-card">
                  <div className="service-icon">
                    <FiBarChart2 />
                  </div>
                  <div className="service-name">RENIEC</div>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div className="service-card">
                  <div className="service-icon">
                    <FiBarChart2 />
                  </div>
                  <div className="service-name">Municipalidad de Lima</div>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div className="service-card">
                  <div className="service-icon">
                    <FiBarChart2 />
                  </div>
                  <div className="service-name">AFP Prima</div>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div className="service-card">
                  <div className="service-icon">
                    <FiBarChart2 />
                  </div>
                  <div className="service-name">AFP Integra</div>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div className="service-card">
                  <div className="service-icon">
                    <FiBarChart2 />
                  </div>
                  <div className="service-name">AFP Habitat</div>
                </div>
              </Col>
            </Row>
          </div>
        )}
        
        {activeTab === 'recharge' && (
          <div className="recharge-container">
            <div className="recharge-form">
              <Form>
                <Form.Group className="mb-4">
                  <Form.Label>Operador</Form.Label>
                  <Form.Select className="form-control-custom">
                    <option>Seleccionar operador</option>
                    <option>Movistar</option>
                    <option>Claro</option>
                    <option>Entel</option>
                    <option>Bitel</option>
                  </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Número celular</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Ingrese 9 dígitos"
                    value={phoneNumber}
                    onChange={(e) => {
                      if (e.target.value.length <= 9 && /^\d*$/.test(e.target.value)) {
                        setPhoneNumber(e.target.value);
                      }
                    }}
                    className="form-control-custom" 
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Monto a recargar</Form.Label>
                  <Form.Select className="form-control-custom">
                    <option>Seleccionar monto</option>
                    <option>S/. 5.00</option>
                    <option>S/. 10.00</option>
                    <option>S/. 20.00</option>
                    <option>S/. 30.00</option>
                    <option>S/. 50.00</option>
                    <option>S/. 100.00</option>
                  </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Método de pago</Form.Label>
                  <Form.Select className="form-control-custom">
                    <option>Seleccionar cuenta</option>
                    <option>Cuenta de Ahorros ****4523</option>
                    <option>Cuenta Corriente ****7890</option>
                  </Form.Select>
                </Form.Group>
                
                <div className="button-container">
                  <Button className="recharge-button">
                    Realizar recarga
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Services;