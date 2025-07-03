'use client';

import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { FiDollarSign, FiPercent, FiCalendar } from 'react-icons/fi';
import { getUserFromCookie } from '@/lib/auth';
import { createLoan } from '@/lib/loanService';
import './usercss/Loans.css';

const Loans = () => {
  const [userId, setUserId] = useState(null);
  const [amount, setAmount] = useState('');
  const [termMonths, setTermMonths] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const interestRate = 3.0; // fijo
  const loanStatusId = 1;   // PENDIENTE
  const loanTypeId = 1;     // Personal u otro fijo

  useEffect(() => {
    const user = getUserFromCookie();
    if (user?.userId) {
      setUserId(user.userId);
    }
  }, []);

  const validateForm = () => {
    const amountFloat = parseFloat(amount);
    const termInt = parseInt(termMonths);
    if (!amountFloat || amountFloat <= 0) return 'Monto inválido';
    if (!termInt || termInt < 6 || termInt > 36) return 'Plazo entre 6 y 36 meses';
    return null;
  };

  const addMonths = (date, months) => {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
  };

  const handleSubmit = async () => {
    setError('');
    setMessage('');

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    const today = new Date();

    const loanData = {
      userId: userId,
      requestedAmount: parseFloat(amount),
      approvedAmount: parseFloat(amount),
      loanTypeId: loanTypeId,
      interestRate: interestRate,
      installments: parseInt(termMonths),
      loanStatusId: loanStatusId,
      dueDate: addMonths(today, parseInt(termMonths)).toISOString().split('T')[0] // formato yyyy-MM-dd
    };

    try {
      await createLoan(loanData);
      setMessage('✅ Solicitud de préstamo enviada con éxito.');
      setAmount('');
      setTermMonths('');
    } catch (err) {
      console.error('Error al solicitar préstamo:', err);
      setError('❌ No se pudo registrar el préstamo.');
    }
  };

  return (
    <Container className="loans-container">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div className="loans-header">
            <h2 className="text-center">Solicitar Préstamo</h2>
          </div>

          {error && <Alert variant="danger" className="alert-custom">{error}</Alert>}
          {message && <Alert variant="success" className="alert-custom">{message}</Alert>}

          <Form className="loans-form">
            <div className="form-card">
              <div className="input-group-custom">
                <div className="input-icon">
                  <FiDollarSign />
                </div>
                <Form.Group className="form-group-full">
                  <Form.Label>Monto del préstamo (S/.)</Form.Label>
                  <Form.Control
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Ej. 5000"
                    className="form-control-custom"
                  />
                </Form.Group>
              </div>

              <div className="input-group-custom">
                <div className="input-icon">
                  <FiPercent />
                </div>
                <Form.Group className="form-group-full">
                  <Form.Label>Tasa de Interés</Form.Label>
                  <Form.Control
                    type="text"
                    value={`${interestRate}% (fijo)`}
                    className="form-control-custom"
                    readOnly
                  />
                </Form.Group>
              </div>

              <div className="input-group-custom">
                <div className="input-icon">
                  <FiCalendar />
                </div>
                <Form.Group className="form-group-full">
                  <Form.Label>Plazo (meses)</Form.Label>
                  <Form.Control
                    type="number"
                    value={termMonths}
                    onChange={(e) => setTermMonths(e.target.value)}
                    placeholder="Ej. 12"
                    className="form-control-custom"
                  />
                  <Form.Text className="text-muted">
                    Debe estar entre 6 y 36 meses.
                  </Form.Text>
                </Form.Group>
              </div>
            </div>

            <div className="button-container">
              <Button type="button" className="edit-button" onClick={handleSubmit}>
                Solicitar Préstamo
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Loans;
