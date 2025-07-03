// src/lib/loanService.js
import { api } from './api';

//
// ====================== PRÉSTAMOS ======================
//

/**
 * Obtener todos los préstamos.
 */
export const getAllLoans = async () => {
  return await api('/loans', 'GET');
};

/**
 * Obtener un préstamo por ID.
 * @param {number} id
 */
export const getLoanById = async (id) => {
  return await api(`/loans/${id}`, 'GET');
};

/**
 * Obtener préstamos por ID de usuario.
 * @param {number} userId
 */
export const getLoansByUser = async (userId) => {
  return await api(`/loans/user/${userId}`, 'GET');
};

/**
 * Crear un nuevo préstamo.
 * @param {object} loanData
 */
export const createLoan = async (loanData) => {
  return await api('/loans', 'POST', loanData);
};

/**
 * Actualizar un préstamo existente.
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


//
// ================== CUOTAS DE PRÉSTAMO ==================
//

/**
 * Obtener una cuota por ID.
 * @param {number} id
 */
export const getInstallmentById = async (id) => {
  return await api(`/installments/${id}`, 'GET');
};

/**
 * Obtener cuotas por ID de préstamo.
 * @param {number} loanId
 */
export const getInstallmentsByLoanId = async (loanId) => {
  return await api(`/installments/loan/${loanId}`, 'GET');
};

/**
 * Crear una nueva cuota.
 * @param {object} installmentData
 */
export const createInstallment = async (installmentData) => {
  return await api('/installments', 'POST', installmentData);
};

/**
 * Actualizar una cuota existente.
 * @param {number} id
 * @param {object} updatedData
 */
export const updateInstallment = async (id, updatedData) => {
  return await api(`/installments/${id}`, 'PUT', updatedData);
};

/**
 * Eliminar una cuota.
 * @param {number} id
 */
export const deleteInstallment = async (id) => {
  return await api(`/installments/${id}`, 'DELETE');
};
