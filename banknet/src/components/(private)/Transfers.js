'use client';

import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { FiArrowRight, FiCreditCard } from 'react-icons/fi';
import './usercss/Transfers.css';
import { getUserFromCookie } from '@/lib/auth';
import {
  getAccountsByUserId,
  getAllAccounts,
  updateAccount,
} from '@/lib/accountService';
import {
  getAllCards,
  updateCard,
} from '@/lib/cardService';
import { createTransfer } from '@/lib/transferService';

const Transfers = () => {
  const [activeTab, setActiveTab] = useState('entreCuentas');
  const [userId, setUserId] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [allAccounts, setAllAccounts] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [sourceAccountId, setSourceAccountId] = useState('');
  const [destinationNumber, setDestinationNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const session = getUserFromCookie();
    if (session?.userId) {
      setUserId(session.userId);
      loadData(session.userId);
    }
  }, []);

  const loadData = async (userId) => {
    try {
      const userAccounts = await getAccountsByUserId(userId);
      const accountsData = await getAllAccounts();
      const cardsData = await getAllCards();
      setAccounts(userAccounts);
      setAllAccounts(accountsData);
      setAllCards(cardsData);
    } catch (error) {
      console.error('Error cargando datos:', error);
    }
  };

  const handleTransfer = async () => {
    try {
      const sourceAccount = accounts.find(acc => acc.id === parseInt(sourceAccountId));
      if (!sourceAccount) return setMessage('Cuenta de origen inválida');

      const amountFloat = parseFloat(amount);
      if (isNaN(amountFloat) || amountFloat <= 0) {
        return setMessage('Ingrese un monto válido');
      }

      if (amountFloat > sourceAccount.balance) {
        return setMessage('Fondos insuficientes');
      }

      // Buscar cuenta o tarjeta destino por número
      const destAccount = allAccounts.find(acc => acc.accountNumber === destinationNumber);
      const destCard = allCards.find(card => card.cardNumber === destinationNumber);

      if (!destAccount && !destCard) {
        return setMessage('Cuenta o tarjeta de destino no existe');
      }

      const destinationId = destAccount ? destAccount.id : destCard.id;

      // Crear la transferencia
      await createTransfer({
        sourceAccount: sourceAccount.id,
        destinationAccount: destinationId,
        monto: amountFloat,
        concepto: description,
        moneda: 'PEN', // Valor fijo por ahora
      });

      // Actualizar saldos
      await updateAccount(sourceAccount.id, {
        ...sourceAccount,
        balance: sourceAccount.balance - amountFloat,
      });

      if (destAccount) {
        await updateAccount(destAccount.id, {
          ...destAccount,
          balance: destAccount.balance + amountFloat,
        });
      } else if (destCard) {
        await updateCard(destCard.id, {
          ...destCard,
          balance: destCard.balance + amountFloat,
        });
      }

      setMessage('✅ Transferencia realizada correctamente');
      setAmount('');
      setDescription('');
      setDestinationNumber('');
    } catch (error) {
      console.error('❌ Error al transferir:', error);
      setMessage('Error al realizar la transferencia');
    }
  };

  return (
    <Container className="transfers-container">
      <h2 className="section-title">Transferencias</h2>

      <div className="tabs-container">
        <div
          className={`tab ${activeTab === 'entreCuentas' ? 'active' : ''}`}
          onClick={() => setActiveTab('entreCuentas')}
        >
          <FiCreditCard className="tab-icon" />
          <span>Entre cuentas</span>
        </div>
      </div>

      {message && <Alert variant="info">{message}</Alert>}

      <div className="transfer-form-container">
        {activeTab === 'entreCuentas' && (
          <div className="transfer-form">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Cuenta de origen</Form.Label>
                <Form.Select
                  className="form-control-custom"
                  value={sourceAccountId}
                  onChange={(e) => setSourceAccountId(e.target.value)}
                >
                  <option value="">Seleccionar cuenta</option>
                  {accounts.map((acc) => (
                    <option key={acc.id} value={acc.id}>
                      {acc.accountNumber} - S/.{(acc.balance ?? 0).toFixed(2)}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Cuenta o tarjeta de destino</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese número de cuenta o tarjeta"
                  className="form-control-custom"
                  value={destinationNumber}
                  onChange={(e) => setDestinationNumber(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Monto a transferir</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="S/."
                  className="form-control-custom"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Descripción (opcional)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Añadir una descripción"
                  className="form-control-custom"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <div className="button-container">
                <Button className="transfer-button" onClick={handleTransfer}>
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
