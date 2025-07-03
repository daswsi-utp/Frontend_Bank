// src/lib/paymentService.js
import { api } from './api';

//
// ========== PAGOS ==========
//

/**
 * Crear un nuevo pago.
 * @param {object} paymentData
 */
export const createPayment = async (paymentData) => {
  return await api('/api/payments', 'POST', paymentData);
};

/**
 * Obtener todos los pagos.
 */
export const getAllPayments = async () => {
  return await api('/api/payments', 'GET');
};

/**
 * Obtener un pago por ID.
 * @param {number} id
 */
export const getPaymentById = async (id) => {
  return await api(`/api/payments/${id}`, 'GET');
};

/**
 * Obtener un pago por número de referencia.
 * @param {string} reference
 */
export const getPaymentByReference = async (reference) => {
  return await api(`/api/payments/reference/${reference}`, 'GET');
};

/**
 * Eliminar un pago por ID.
 * @param {number} id
 */
export const deletePayment = async (id) => {
  return await api(`/api/payments/${id}`, 'DELETE');
};


//
// ========== SERVICIOS ==========
//

/**
 * Crear un nuevo servicio.
 * @param {object} serviceData
 */
export const createService = async (serviceData) => {
  return await api('/api/services', 'POST', serviceData);
};

/**
 * Obtener todos los servicios.
 */
export const getAllServices = async () => {
  return await api('/api/services', 'GET');
};

/**
 * Obtener un servicio por ID.
 * @param {number} id
 */
export const getServiceById = async (id) => {
  return await api(`/api/services/${id}`, 'GET');
};

/**
 * Actualizar un servicio existente.
 * @param {number} id
 * @param {object} updatedData
 */
export const updateService = async (id, updatedData) => {
  return await api(`/api/services/${id}`, 'PUT', updatedData);
};

/**
 * Eliminar un servicio por ID.
 * @param {number} id
 */
export const deleteService = async (id) => {
  return await api(`/api/services/${id}`, 'DELETE');
};
