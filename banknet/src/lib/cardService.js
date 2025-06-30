// src/lib/cardService.js
import { api } from './api';

// ===================== TARJETAS ===================== //

/**
 * Obtener todas las tarjetas.
 */
export const getAllCards = async () => {
  return await api('/cards', 'GET');
};

/**
 * Obtener una tarjeta por ID.
 * @param {number} id
 */
export const getCardById = async (id) => {
  return await api(`/cards/${id}`, 'GET');
};

/**
 * Crear una nueva tarjeta.
 * @param {object} cardData
 */
export const createCard = async (cardData) => {
  return await api('/cards', 'POST', cardData);
};

/**
 * Actualizar una tarjeta (estado, titular, etc).
 * @param {number} id
 * @param {object} updatedData
 */
export const updateCard = async (id, updatedData) => {
  return await api(`/cards/${id}`, 'PUT', updatedData);
};

/**
 * Eliminar una tarjeta por ID.
 * @param {number} id
 */
export const deleteCard = async (id) => {
  return await api(`/cards/${id}`, 'DELETE');
};



// ===================== TRANSACCIONES CON TARJETA ===================== //

/**
 * Obtener todas las transacciones con tarjeta.
 */
export const getAllCardTransactions = async () => {
  return await api('/transactions', 'GET');
};

/**
 * Obtener transacciones por tarjeta.
 * @param {number} cardId
 */
export const getTransactionsByCardId = async (cardId) => {
  return await api(`/transactions/card/${cardId}`, 'GET');
};

/**
 * Registrar una nueva transacción con tarjeta.
 * @param {object} transactionData
 */
export const createCardTransaction = async (transactionData) => {
  return await api('/transactions', 'POST', transactionData);
};
