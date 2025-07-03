'use client';

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiSearch, FiFileText, FiZap, FiDroplet, FiPhone } from 'react-icons/fi';
import './usercss/Services.css';

// Solo servicios esenciales para pago
const servicesData = [
  { id: 1, name: 'Luz del Sur', category: 'utilities', icon: FiZap },
  { id: 2, name: 'Enel', category: 'utilities', icon: FiZap },
  { id: 3, name: 'Sedapal', category: 'utilities', icon: FiDroplet },
  { id: 4, name: 'Movistar', category: 'telecom', icon: FiPhone },
  { id: 5, name: 'Claro', category: 'telecom', icon: FiPhone },
  { id: 6, name: 'Entel', category: 'telecom', icon: FiPhone },
];

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = servicesData.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="services-container">
      <h2 className="section-title">Pagar Servicios</h2>

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
        {filteredServices.map(service => {
          const Icon = service.icon || FiFileText;
          return (
            <Col xs={6} md={4} key={service.id}>
              <div className="service-card">
                <div className="service-icon">
                  <Icon />
                </div>
                <div className="service-name">{service.name}</div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Services;
