"use client";
import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { FiUser, FiMail, FiPhone, FiCalendar } from 'react-icons/fi';
import './usercss/Profile.css';

const Profile: React.FC = () => {
  return (
    <Container className="profile-container">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div className="profile-header">
            <h2 className="text-center">Mi Perfil</h2>
            <div className="profile-avatar">
              <FiUser className="avatar-icon" />
            </div>
          </div>
          
          <Form className="profile-form">
            <div className="form-card">
              <div className="input-group-custom">
                <div className="input-icon">
                  <FiUser />
                </div>
                <Form.Group className="form-group-full">
                  <Form.Label>Nombre completo</Form.Label>
                  <Form.Control 
                    type="text" 
                    defaultValue="John Doe" 
                    readOnly
                    className="form-control-custom" 
                  />
                </Form.Group>
              </div>
              
              <div className="input-group-custom">
                <div className="input-icon">
                  <FiMail />
                </div>
                <Form.Group className="form-group-full">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control 
                    type="email" 
                    defaultValue="johndoe@gmail.com" 
                    readOnly
                    className="form-control-custom" 
                  />
                </Form.Group>
              </div>
              
              <div className="input-group-custom">
                <div className="input-icon">
                  <FiPhone />
                </div>
                <Form.Group className="form-group-full">
                  <Form.Label>Número de teléfono</Form.Label>
                  <Form.Control 
                    type="tel" 
                    defaultValue="+51 999 888 777" 
                    readOnly
                    className="form-control-custom" 
                  />
                </Form.Group>
              </div>
              
              <div className="input-group-custom">
                <div className="input-icon">
                  <FiCalendar />
                </div>
                <Form.Group className="form-group-full">
                  <Form.Label>Fecha de nacimiento</Form.Label>
                  <Form.Control 
                    type="text" 
                    defaultValue="01/01/1990" 
                    readOnly
                    className="form-control-custom" 
                  />
                </Form.Group>
              </div>
            </div>
            
            <div className="button-container">
              <button type="button" className="edit-button">
                Editar información
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;