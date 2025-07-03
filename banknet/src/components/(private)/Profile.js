'use client';

import React, { useEffect, useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { FiUser, FiMail, FiPhone, FiHome, FiMapPin } from 'react-icons/fi';
import './usercss/Profile.css';
import { getUserFromCookie } from '@/lib/auth';
import { getUserById, updateUser } from '@/lib/userService';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    telefono: '',
    direccion: '',
    distrito: '',
    provincia: '',
    departamento: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      const session = getUserFromCookie();
      if (!session) return;
      const data = await getUserById(session.userId);
      setUser(data);
      setFormData({
        telefono: data.telefono || '',
        direccion: data.direccion || '',
        distrito: data.distrito || '',
        provincia: data.provincia || '',
        departamento: data.departamento || '',
      });
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!user) return;
    await updateUser(user.id, { ...user, ...formData });
    alert('Información actualizada correctamente.');
  };

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
                    value={`${user.nombre} ${user.apePaterno} ${user.apeMaterno}`}
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
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="text"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="form-control-custom"
                  />
                </Form.Group>
              </div>

              <div className="input-group-custom">
                <div className="input-icon">
                  <FiHome />
                </div>
                <Form.Group className="form-group-full">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    className="form-control-custom"
                  />
                </Form.Group>
              </div>

              <div className="input-group-custom">
                <div className="input-icon">
                  <FiMapPin />
                </div>
                <Form.Group className="form-group-full">
                  <Form.Label>Distrito</Form.Label>
                  <Form.Control
                    type="text"
                    name="distrito"
                    value={formData.distrito}
                    onChange={handleChange}
                    className="form-control-custom"
                  />
                </Form.Group>
              </div>

              <div className="input-group-custom">
                <div className="input-icon">
                  <FiMapPin />
                </div>
                <Form.Group className="form-group-full">
                  <Form.Label>Provincia</Form.Label>
                  <Form.Control
                    type="text"
                    name="provincia"
                    value={formData.provincia}
                    onChange={handleChange}
                    className="form-control-custom"
                  />
                </Form.Group>
              </div>

              <div className="input-group-custom">
                <div className="input-icon">
                  <FiMapPin />
                </div>
                <Form.Group className="form-group-full">
                  <Form.Label>Departamento</Form.Label>
                  <Form.Control
                    type="text"
                    name="departamento"
                    value={formData.departamento}
                    onChange={handleChange}
                    className="form-control-custom"
                  />
                </Form.Group>
              </div>
            </div>

            <div className="button-container">
              <Button type="button" className="edit-button" onClick={handleSubmit}>
                Guardar cambios
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
