import { api } from './api';

//
// ========== TRANSFERENCIAS ==========
//

/**
 * Crear una transferencia.
 */
export const createTransfer = async (data) => {
  return await api('/api/transfers', 'POST', data);
};

/**
 * Obtener todas las transferencias.
 */
export const getAllTransfers = async () => {
  return await api('/api/transfers', 'GET');
};

/**
 * Obtener una transferencia por ID.
 */
export const getTransferById = async (id) => {
  return await api(`/api/transfers/${id}`, 'GET');
};

/**
 * Actualizar una transferencia.
 */
export const updateTransfer = async (id, data) => {
  return await api(`/api/transfers/${id}`, 'PUT', data);
};

/**
 * Eliminar una transferencia.
 */
export const deleteTransfer = async (id) => {
  return await api(`/api/transfers/${id}`, 'DELETE');
};

/**
 * Obtener transferencias por cuenta origen.
 */
export const getTransfersBySourceAccount = async (accountId) => {
  return await api(`/api/transfers/source/${accountId}`, 'GET');
};

/**
 * Obtener transferencias por cuenta destino.
 */
export const getTransfersByDestinationAccount = async (accountId) => {
  return await api(`/api/transfers/destination/${accountId}`, 'GET');
};

/**
 * Obtener transferencias por estado.
 */
export const getTransfersByEstado = async (estadoId) => {
  return await api(`/api/transfers/estado/${estadoId}`, 'GET');
};


//
// ========== COMISIONES (FEES) ==========
//

/**
 * Crear una comisión.
 */
export const createFee = async (data) => {
  return await api('/api/fees', 'POST', data);
};

/**
 * Obtener todas las comisiones.
 */
export const getAllFees = async () => {
  return await api('/api/fees', 'GET');
};

/**
 * Obtener comisión por ID.
 */
export const getFeeById = async (id) => {
  return await api(`/api/fees/${id}`, 'GET');
};

/**
 * Obtener comisiones por ID de transferencia.
 */
export const getFeesByTransferId = async (transferId) => {
  return await api(`/api/fees/transfer/${transferId}`, 'GET');
};

/**
 * Actualizar comisión.
 */
export const updateFee = async (id, data) => {
  return await api(`/api/fees/${id}`, 'PUT', data);
};

/**
 * Eliminar comisión.
 */
export const deleteFee = async (id) => {
  return await api(`/api/fees/${id}`, 'DELETE');
};


//
// ========== LÍMITES DE TRANSFERENCIA ==========
//

/**
 * Crear un límite.
 */
export const createTransferLimit = async (data) => {
  return await api('/api/limits', 'POST', data);
};

/**
 * Obtener todos los límites.
 */
export const getAllTransferLimits = async () => {
  return await api('/api/limits', 'GET');
};

/**
 * Obtener límite por ID de usuario.
 */
export const getTransferLimitByUserId = async (userId) => {
  return await api(`/api/limits/${userId}`, 'GET');
};

/**
 * Actualizar límite por ID de usuario.
 */
export const updateTransferLimit = async (userId, data) => {
  return await api(`/api/limits/${userId}`, 'PUT', data);
};

/**
 * Eliminar límite por ID de usuario.
 */
export const deleteTransferLimit = async (userId) => {
  return await api(`/api/limits/${userId}`, 'DELETE');
};
