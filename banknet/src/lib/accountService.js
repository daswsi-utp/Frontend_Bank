// src/lib/accountService.js
import { api } from './api';

/**
 * Obtener todas las cuentas bancarias.
 */
export const getAllAccounts = async () => {
  return await api('/accounts', 'GET');
};

/**
 * Obtener una cuenta por ID.
 * @param {number} id
 */
export const getAccountById = async (id) => {
  return await api(`/accounts/${id}`, 'GET');
};

/**
 * Crear una nueva cuenta.
 * @param {object} accountData
 */
export const createAccount = async (accountData) => {
  return await api('/accounts', 'POST', accountData);
};

/**
 * Actualizar una cuenta existente.
 * @param {number} id
 * @param {object} updatedData
 */
export const updateAccount = async (id, updatedData) => {
  return await api(`/accounts/${id}`, 'PUT', updatedData);
};

/**
 * Eliminar una cuenta.
 * @param {number} id
 */
export const deleteAccount = async (id) => {
  return await api(`/accounts/${id}`, 'DELETE');
};



// ===================== MOVIMIENTOS DE CUENTA ===================== //

/**
 * Obtener todos los movimientos de todas las cuentas.
 */
export const getAllAccountMovements = async () => {
  return await api('/account-movements', 'GET');
};

/**
 * Obtener movimientos por ID de cuenta.
 * @param {number} accountId
 */
export const getMovementsByAccountId = async (accountId) => {
  return await api(`/account-movements/account/${accountId}`, 'GET');
};

/**
 * Registrar un nuevo movimiento.
 * @param {object} movementData
 */
export const createMovement = async (movementData) => {
  return await api('/account-movements', 'POST', movementData);
};
