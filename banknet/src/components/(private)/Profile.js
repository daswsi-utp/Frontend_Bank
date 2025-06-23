'use client';

import React, { useEffect, useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { FiUser, FiMail, FiPhone, FiCalendar } from 'react-icons/fi';
import './usercss/Profile.css';
import { getCurrentUser } from '@/lib/auth';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usuario = getCurrentUser();
    if (usuario) {
      setUser(usuario);
    }
  }, []);

  if (!user) return <p className="text-center mt-5">Cargando perfil...</p>;

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
                    value={`${user.nombre} ${user.apellido}`}
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
                    value={user.email}
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
                  <Form.Label>DNI</Form.Label>
                  <Form.Control
                    type="text"
                    value={user.dni}
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
                  <Form.Label>Rol</Form.Label>
                  <Form.Control
                    type="text"
                    value={user.rol}
                    readOnly
                    className="form-control-custom"
                  />
                </Form.Group>
              </div>
            </div>

            <div className="button-container">
              <button type="button" className="edit-button" disabled>
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
