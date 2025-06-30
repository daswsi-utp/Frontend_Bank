// src/lib/paymentService.js
import { api } from './api';


// ===================== PAGOS ===================== //

/**
 * Obtener todos los pagos realizados.
 */
export const getAllPayments = async () => {
  return await api('/api/payments', 'GET');
};

/**
 * Obtener un pago por su ID.
 * @param {number} id
 */
export const getPaymentById = async (id) => {
  return await api(`/api/payments/${id}`, 'GET');
};

/**
 * Registrar un nuevo pago.
 * @param {object} paymentData
 */
export const createPayment = async (paymentData) => {
  return await api('/api/payments', 'POST', paymentData);
};



// ===================== SERVICIOS DISPONIBLES ===================== //

/**
 * Obtener todos los servicios que se pueden pagar.
 */
export const getAllServices = async () => {
  return await api('/api/services', 'GET');
};

/**
 * Obtener un servicio específico por ID.
 * @param {number} id
 */
export const getServiceById = async (id) => {
  return await api(`/api/services/${id}`, 'GET');
};

/**
 * Registrar un nuevo servicio (solo para administración).
 * @param {object} serviceData
 */
export const createService = async (serviceData) => {
  return await api('/api/services', 'POST', serviceData);
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
 * Eliminar un servicio.
 * @param {number} id
 */
export const deleteService = async (id) => {
  return await api(`/api/services/${id}`, 'DELETE');
};
