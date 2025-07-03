import { api } from './api';

// ===================== TARJETAS ===================== //

export const getAllCards = async () => {
  return await api('/cards', 'GET');
};

export const getCardById = async (id) => {
  return await api(`/cards/${id}`, 'GET');
};

export const getCardsByUserId = async (userId) => {
  return await api(`/cards/user/${userId}`, 'GET');
};

export const createCard = async (cardData) => {
  return await api('/cards', 'POST', cardData);
};

export const updateCard = async (id, updatedData) => {
  return await api(`/cards/${id}`, 'PUT', updatedData);
};

export const deleteCard = async (id) => {
  return await api(`/cards/${id}`, 'DELETE');
};

// ===================== TRANSACCIONES CON TARJETA ===================== //

export const getAllCardTransactions = async () => {
  return await api('/transactions', 'GET');
};

export const getCardTransactionById = async (id) => {
  return await api(`/transactions/${id}`, 'GET');
};

export const getTransactionsByCardId = async (cardId) => {
  return await api(`/transactions/card/${cardId}`, 'GET');
};

export const createCardTransaction = async (transactionData) => {
  return await api('/transactions', 'POST', transactionData);
};

export const deleteCardTransaction = async (id) => {
  return await api(`/transactions/${id}`, 'DELETE');
};
