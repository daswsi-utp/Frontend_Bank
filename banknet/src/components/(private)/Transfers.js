'use client';

import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { FiArrowRight, FiDollarSign, FiCreditCard, FiGlobe } from 'react-icons/fi';
import './usercss/Transfers.css';

const Transfers = () => {
  const [activeTab, setActiveTab] = useState('misCuentas');

  return (
    <Container className="transfers-container">
      <h2 className="section-title">Transferencias</h2>

      <div className="tabs-container">
        <div 
          className={`tab ${activeTab === 'misCuentas' ? 'active' : ''}`}
          onClick={() => setActiveTab('misCuentas')}
        >
          <FiCreditCard className="tab-icon" />
          <span>Mis Cuentas</span>
        </div>
        <div 
          className={`tab ${activeTab === 'cci' ? 'active' : ''}`}
          onClick={() => setActiveTab('cci')}
        >
          <FiDollarSign className="tab-icon" />
          <span>CCI</span>
        </div>
        <div 
          className={`tab ${activeTab === 'exterior' ? 'active' : ''}`}
          onClick={() => setActiveTab('exterior')}
        >
          <FiGlobe className="tab-icon" />
          <span>Exterior</span>
        </div>
      </div>

      <div className="transfer-form-container">
        {activeTab === 'misCuentas' && (
          <div className="transfer-form">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Cuenta de origen</Form.Label>
                <Form.Select className="form-control-custom">
                  <option>Seleccionar cuenta</option>
                  <option>Cuenta de Ahorros ****4523</option>
                  <option>Cuenta Corriente ****7890</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Cuenta de destino</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese número de cuenta"
                  className="form-control-custom"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Monto a transferir</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="S/."
                  className="form-control-custom"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Descripción (opcional)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Añadir una descripción"
                  className="form-control-custom"
                />
              </Form.Group>

              <div className="button-container">
                <Button className="transfer-button">
                  <span>Transferir</span>
                  <FiArrowRight />
                </Button>
              </div>
            </Form>
          </div>
        )}

        {activeTab === 'cci' && (
          <div className="transfer-form">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Cuenta de origen</Form.Label>
                <Form.Select className="form-control-custom">
                  <option>Seleccionar cuenta</option>
                  <option>Cuenta de Ahorros ****4523</option>
                  <option>Cuenta Corriente ****7890</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Código de Cuenta Interbancario (CCI)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese código CCI (20 dígitos)"
                  className="form-control-custom"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Banco de destino</Form.Label>
                <Form.Select className="form-control-custom">
                  <option>Seleccionar banco</option>
                  <option>BCP</option>
                  <option>Interbank</option>
                  <option>BBVA</option>
                  <option>Scotiabank</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Monto a transferir</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="S/."
                  className="form-control-custom"
                />
              </Form.Group>

              <div className="button-container">
                <Button className="transfer-button">
                  <span>Transferir</span>
                  <FiArrowRight />
                </Button>
              </div>
            </Form>
          </div>
        )}

        {activeTab === 'exterior' && (
          <div className="transfer-form">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Cuenta de origen</Form.Label>
                <Form.Select className="form-control-custom">
                  <option>Seleccionar cuenta</option>
                  <option>Cuenta de Ahorros ****4523</option>
                  <option>Cuenta Corriente ****7890</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Código SWIFT</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese código SWIFT"
                  className="form-control-custom"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Cuenta de destino internacional</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese número de cuenta IBAN"
                  className="form-control-custom"
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Moneda</Form.Label>
                    <Form.Select className="form-control-custom">
                      <option>USD</option>
                      <option>EUR</option>
                      <option>GBP</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Monto</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="0.00"
                      className="form-control-custom"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="button-container">
                <Button className="transfer-button">
                  <span>Transferir</span>
                  <FiArrowRight />
                </Button>
              </div>
            </Form>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Transfers;
