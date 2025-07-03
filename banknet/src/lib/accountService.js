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
 * Obtener cuentas por ID de usuario.
 * @param {number} userId
 */
export const getAccountsByUserId = async (userId) => {
  return await api(`/accounts/user/${userId}`, 'GET');
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
 * Obtener movimientos por ID de cuenta.
 * @param {number} accountId
 */
export const getMovementsByAccountId = async (accountId) => {
  return await api(`/account-movements/account/${accountId}`, 'GET');
};

/**
 * Obtener un movimiento por su ID.
 * @param {number} id
 */
export const getMovementById = async (id) => {
  return await api(`/account-movements/${id}`, 'GET');
};

/**
 * Registrar un nuevo movimiento.
 * @param {object} movementData
 */
export const createMovement = async (movementData) => {
  return await api('/account-movements', 'POST', movementData);
};
