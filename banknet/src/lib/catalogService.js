// src/lib/catalogService.js
import { api } from './api';

// ===================== TIPOS ===================== //

/**
 * Obtener todos los tipos registrados (cuentas, tarjetas, préstamos, etc).
 */
export const getAllTypes = async () => {
  return await api('/api/types', 'GET');
};

/**
 * Obtener un tipo específico por ID.
 * @param {number} id
 */
export const getTypeById = async (id) => {
  return await api(`/api/types/${id}`, 'GET');
};

/**
 * Obtener todos los tipos por módulo (ej. 'CUENTA', 'TARJETA').
 * @param {string} modulo
 */
export const getTypesByModule = async (modulo) => {
  return await api(`/api/types/module/${modulo}`, 'GET');
};

/**
 * Crear un nuevo tipo.
 * @param {object} typeData
 */
export const createType = async (typeData) => {
  return await api('/api/types', 'POST', typeData);
};

/**
 * Actualizar un tipo existente.
 * @param {number} id
 * @param {object} updatedData
 */
export const updateType = async (id, updatedData) => {
  return await api(`/api/types/${id}`, 'PUT', updatedData);
};



// ===================== ESTADOS ===================== //

/**
 * Obtener todos los estados registrados.
 */
export const getAllStates = async () => {
  return await api('/api/states', 'GET');
};

/**
 * Obtener un estado por ID.
 * @param {number} id
 */
export const getStateById = async (id) => {
  return await api(`/api/states/${id}`, 'GET');
};

/**
 * Obtener estados por módulo (ej. 'CUENTA', 'PRÉSTAMO').
 * @param {string} modulo
 */
export const getStatesByModule = async (modulo) => {
  return await api(`/api/states/module/${modulo}`, 'GET');
};

/**
 * Crear un nuevo estado.
 * @param {object} stateData
 */
export const createState = async (stateData) => {
  return await api('/api/states', 'POST', stateData);
};

/**
 * Actualizar un estado existente.
 * @param {number} id
 * @param {object} updatedData
 */
export const updateState = async (id, updatedData) => {
  return await api(`/api/states/${id}`, 'PUT', updatedData);
};
