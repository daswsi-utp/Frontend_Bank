// src/lib/transferService.js
import { api } from './api';

// ===================== TRANSFERENCIAS ===================== //

/**
 * Obtener todas las transferencias.
 */
export const getAllTransfers = async () => {
  return await api('/api/transfers', 'GET');
};

/**
 * Obtener una transferencia por ID.
 * @param {number} id
 */
export const getTransferById = async (id) => {
  return await api(`/api/transfers/${id}`, 'GET');
};

/**
 * Crear una nueva transferencia.
 * @param {object} transferData
 */
export const createTransfer = async (transferData) => {
  return await api('/api/transfers', 'POST', transferData);
};

/**
 * Actualizar transferencia (por ejemplo, estado).
 * @param {number} id
 * @param {object} updatedData
 */
export const updateTransfer = async (id, updatedData) => {
  return await api(`/api/transfers/${id}`, 'PUT', updatedData);
};

/**
 * Eliminar una transferencia.
 * @param {number} id
 */
export const deleteTransfer = async (id) => {
  return await api(`/api/transfers/${id}`, 'DELETE');
};



// ===================== COMISIONES ===================== //

/**
 * Obtener todas las comisiones.
 */
export const getAllFees = async () => {
  return await api('/api/fees', 'GET');
};

/**
 * Obtener comisiones por transferencia.
 * @param {number} transferId
 */
export const getFeesByTransferId = async (transferId) => {
  return await api(`/api/fees/transfer/${transferId}`, 'GET');
};

/**
 * Registrar comisión para una transferencia.
 * @param {object} feeData
 */
export const createFee = async (feeData) => {
  return await api('/api/fees', 'POST', feeData);
};



// ===================== LÍMITES DE TRANSFERENCIA ===================== //

/**
 * Obtener límites de transferencia por usuario.
 * @param {number} userId
 */
export const getTransferLimitByUserId = async (userId) => {
  return await api(`/api/limits/${userId}`, 'GET');
};

/**
 * Actualizar límites de transferencia para un usuario.
 * @param {number} userId
 * @param {object} limitData
 */
export const updateTransferLimit = async (userId, limitData) => {
  return await api(`/api/limits/${userId}`, 'PUT', limitData);
};
