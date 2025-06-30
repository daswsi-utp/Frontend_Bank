// src/lib/loanService.js
import { api } from './api';

// ===================== PRÉSTAMOS ===================== //

/**
 * Obtener todos los préstamos.
 */
export const getAllLoans = async () => {
  return await api('/loans', 'GET');
};

/**
 * Obtener préstamo por ID.
 * @param {number} id
 */
export const getLoanById = async (id) => {
  return await api(`/loans/${id}`, 'GET');
};

/**
 * Crear un nuevo préstamo.
 * @param {object} loanData
 */
export const createLoan = async (loanData) => {
  return await api('/loans', 'POST', loanData);
};

/**
 * Actualizar un préstamo (monto, estado, etc).
 * @param {number} id
 * @param {object} updatedData
 */
export const updateLoan = async (id, updatedData) => {
  return await api(`/loans/${id}`, 'PUT', updatedData);
};

/**
 * Eliminar un préstamo.
 * @param {number} id
 */
export const deleteLoan = async (id) => {
  return await api(`/loans/${id}`, 'DELETE');
};



// ===================== CUOTAS DE PRÉSTAMO ===================== //

/**
 * Obtener todas las cuotas de préstamo.
 */
export const getAllInstallments = async () => {
  return await api('/installments', 'GET');
};

/**
 * Obtener cuotas por ID de préstamo.
 * @param {number} loanId
 */
export const getInstallmentsByLoanId = async (loanId) => {
  return await api(`/installments/loan/${loanId}`, 'GET');
};

/**
 * Marcar cuota como pagada o actualizar su estado.
 * @param {number} installmentId
 * @param {object} updatedData
 */
export const updateInstallment = async (installmentId, updatedData) => {
  return await api(`/installments/${installmentId}`, 'PUT', updatedData);
};
