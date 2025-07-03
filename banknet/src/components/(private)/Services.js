'use client';

import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { FiCreditCard, FiDollarSign, FiList, FiCheckCircle } from 'react-icons/fi';
import { getUserFromCookie } from '@/lib/auth';
import { getAccountsByUserId, updateAccount } from '@/lib/accountService';
import { getCardsByUserId, updateCard } from '@/lib/cardService';
import { getAllServices, createPayment } from '@/lib/paymentService';
import './usercss/Services.css';

const Services = () => {
  const [userId, setUserId] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [cards, setCards] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedAccountId, setSelectedAccountId] = useState('');
  const [selectedCardId, setSelectedCardId] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = getUserFromCookie();
        if (!user?.userId) return;

        setUserId(user.userId);

        const [acc, crd, srv] = await Promise.all([
          getAccountsByUserId(user.userId),
          getCardsByUserId(user.userId),
          getAllServices(),
        ]);

        setAccounts(acc);
        setCards(crd);
        setServices(srv);
      } catch (err) {
        console.error('Error al cargar datos:', err);
        setError('Error al cargar datos del usuario.');
      }
    };

    fetchData();
  }, []);

  const handlePayment = async () => {
    setMessage('');
    setError('');

    if (!selectedServiceId || (!selectedAccountId && !selectedCardId) || !amount) {
      setError('Completa todos los campos para procesar el pago.');
      return;
    }

    const parsedAmount = parseFloat(amount.replace(',', '.'));
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setError('El monto ingresado no es válido.');
      return;
    }

    const referenceNumber = 'REF' + Date.now();
    const barcode = 'BC' + Math.floor(100000000 + Math.random() * 900000000);
    const fee = 0.0;

    const accountId = selectedAccountId
      ? parseInt(selectedAccountId)
      : parseInt(selectedCardId);

    const paymentData = {
      userId,
      serviceId: parseInt(selectedServiceId),
      accountId,
      amount: parsedAmount,
      fee,
      referenceNumber,
      barcode,
    };

    try {
      await createPayment(paymentData);

      if (selectedAccountId) {
        const account = accounts.find(acc => acc.id === accountId);
        await updateAccount(account.id, {
          ...account,
          balance: account.balance - parsedAmount,
        });
      } else if (selectedCardId) {
        const card = cards.find(c => c.id === accountId);
        await updateCard(card.id, {
          ...card,
          balance: card.balance - parsedAmount,
        });
      }

      setMessage('Pago realizado con éxito.');
      setAmount('');
      setSelectedAccountId('');
      setSelectedCardId('');
      setSelectedServiceId('');
    } catch (err) {
      console.error('Error al procesar el pago:', err);
      setError('No se pudo procesar el pago.');
    }
  };

  return (
    <Container className="services-container">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div className="services-header">
            <h2 className="text-center">Pagar Servicios</h2>
          </div>

          {error && <Alert variant="danger" className="alert-custom">{error}</Alert>}
          {message && <Alert variant="success" className="alert-custom">{message}</Alert>}

          <Form className="services-form">
            <div className="form-card">

              <div className="input-group-custom">
                <div className="input-icon"><FiList /></div>
                <Form.Group className="form-group-full">
                  <Form.Label>Selecciona un servicio</Form.Label>
                  <Form.Select
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    className="form-control-custom"
                  >
                    <option value="">-- Selecciona --</option>
                    {services.map(srv => (
                      <option key={srv.id} value={srv.id}>{srv.name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="input-group-custom">
                <div className="input-icon"><FiCreditCard /></div>
                <Form.Group className="form-group-full">
                  <Form.Label>Selecciona una cuenta</Form.Label>
                  <Form.Select
                    value={selectedAccountId}
                    onChange={(e) => {
                      setSelectedAccountId(e.target.value);
                      setSelectedCardId('');
                    }}
                    className="form-control-custom"
                  >
                    <option value="">-- Selecciona --</option>
                    {accounts.map(acc => (
                      <option key={acc.id} value={acc.id}>{acc.accountNumber}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="input-group-custom">
                <div className="input-icon"><FiCreditCard /></div>
                <Form.Group className="form-group-full">
                  <Form.Label>O una tarjeta</Form.Label>
                  <Form.Select
                    value={selectedCardId}
                    onChange={(e) => {
                      setSelectedCardId(e.target.value);
                      setSelectedAccountId('');
                    }}
                    className="form-control-custom"
                  >
                    <option value="">-- Selecciona --</option>
                    {cards.map(card => (
                      <option key={card.id} value={card.id}>{card.cardNumber}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="input-group-custom">
                <div className="input-icon"><FiDollarSign /></div>
                <Form.Group className="form-group-full">
                  <Form.Label>Monto a pagar (S/.)</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Ej. 150.00"
                    className="form-control-custom"
                  />
                </Form.Group>
              </div>

            </div>

            <div className="button-container">
              <Button type="button" className="edit-button" onClick={handlePayment}>
                <FiCheckCircle className="me-2" />
                Realizar Pago
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
