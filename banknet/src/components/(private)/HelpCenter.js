'use client';

import React, { useState } from 'react';
import { Container, Accordion, Form, Button } from 'react-bootstrap';
import {
  FiSearch,
  FiPhone,
  FiMessageSquare,
  FiHelpCircle,
} from 'react-icons/fi';
import './usercss/HelpCenter.css';

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      id: 1,
      question: '¿Cómo puedo activar mi nueva tarjeta?',
      answer:
        'Para activar tu nueva tarjeta, puedes hacerlo a través de nuestra app móvil en la sección "Configurar mis tarjetas", llamando a nuestro centro de atención o visitando cualquiera de nuestras sucursales con tu documento de identidad.',
    },
    {
      id: 2,
      question: '¿Qué hago si olvidé mi contraseña?',
      answer:
        'Si olvidaste tu contraseña, selecciona la opción "¿Olvidaste tu contraseña?" en la pantalla de inicio de sesión. Recibirás un enlace en tu correo electrónico registrado para crear una nueva contraseña.',
    },
    {
      id: 3,
      question: '¿Cómo reporto una tarjeta perdida o robada?',
      answer:
        'Para reportar una tarjeta perdida o robada, ingresa a la sección "Configurar mis tarjetas", selecciona la tarjeta y elige la opción "Bloquear tarjeta". También puedes llamar a nuestro servicio de atención 24/7 al 0800-1234-5678.',
    },
    {
      id: 4,
      question: '¿Cuáles son los límites de transferencia?',
      answer:
        'Los límites de transferencia varían según el tipo de cuenta que tengas. Puedes consultar tus límites actuales en la sección "Transferencias" y luego "Límites". También puedes solicitar un aumento de límite a través de la app.',
    },
    {
      id: 5,
      question: '¿Cómo actualizo mis datos personales?',
      answer:
        'Para actualizar tus datos personales, dirígete a la sección "Mi perfil" y selecciona "Editar información". Recuerda que algunos cambios pueden requerir verificación adicional por seguridad.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="help-center-container">
      <h2 className="section-title">Centro de Ayuda</h2>

      <div className="search-box">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Buscar ayuda..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="help-options">
        <div className="help-option">
          <div className="help-icon">
            <FiPhone />
          </div>
          <div className="help-text">Llamar a soporte</div>
        </div>
        <div className="help-option">
          <div className="help-icon">
            <FiMessageSquare />
          </div>
          <div className="help-text">Chat en vivo</div>
        </div>
        <div className="help-option">
          <div className="help-icon">
            <FiHelpCircle />
          </div>
          <div className="help-text">Tutoriales</div>
        </div>
      </div>

      <h4 className="faq-title">Preguntas frecuentes</h4>

      <Accordion className="faq-accordion">
        {filteredFaqs.map((faq) => (
          <Accordion.Item key={faq.id} eventKey={faq.id.toString()} className="faq-item">
            <Accordion.Header className="faq-header">
              {faq.question}
            </Accordion.Header>
            <Accordion.Body className="faq-body">
              {faq.answer}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <div className="contact-form">
        <h4 className="contact-title">Contáctanos</h4>
        <p className="contact-description">
          Si no has encontrado respuesta a tu pregunta, envíanos un mensaje y nos pondremos en contacto contigo lo antes posible.
        </p>

        <Form className="contact-form-container">
          <Form.Group className="mb-3">
            <Form.Label>Asunto</Form.Label>
            <Form.Select className="form-control-custom">
              <option>Seleccionar asunto</option>
              <option>Consulta sobre cuentas</option>
              <option>Problema con transferencias</option>
              <option>Consulta sobre tarjetas</option>
              <option>Reporte de error en la app</option>
              <option>Otro</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Escribe tu mensaje aquí..."
              className="form-control-custom"
            />
          </Form.Group>

          <div className="button-container">
            <Button className="submit-button">Enviar mensaje</Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default HelpCenter;
