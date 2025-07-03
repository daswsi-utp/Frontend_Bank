// src/lib/logService.js
import { api } from './api';

//
// ========== LOGS DE AUDITORÍA ==========
//

/**
 * Crear un nuevo log de auditoría.
 * @param {object} logData
 */
export const createLog = async (logData) => {
  return await api('/api/logs', 'POST', logData);
};

/**
 * Obtener un log por ID.
 * @param {number} id
 */
export const getLogById = async (id) => {
  return await api(`/api/logs/${id}`, 'GET');
};

/**
 * Obtener todos los logs.
 */
export const getAllLogs = async () => {
  return await api('/api/logs', 'GET');
};

/**
 * Actualizar un log existente.
 * @param {number} id
 * @param {object} updatedData
 */
export const updateLog = async (id, updatedData) => {
  return await api(`/api/logs/${id}`, 'PUT', updatedData);
};

/**
 * Eliminar un log.
 * @param {number} id
 */
export const deleteLog = async (id) => {
  return await api(`/api/logs/${id}`, 'DELETE');
};
