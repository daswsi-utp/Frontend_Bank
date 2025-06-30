// src/lib/logService.js
import { api } from './api';

/**
 * Obtener todos los logs de auditoría.
 */
export const getAllLogs = async () => {
  return await api('/api/logs', 'GET');
};

/**
 * Obtener un log específico por ID.
 * @param {number} id
 */
export const getLogById = async (id) => {
  return await api(`/api/logs/${id}`, 'GET');
};

/**
 * Obtener logs por ID de usuario.
 * @param {number} userId
 */
export const getLogsByUserId = async (userId) => {
  return await api(`/api/logs/user/${userId}`, 'GET');
};

/**
 * Registrar una nueva acción de auditoría.
 * @param {object} logData
 */
export const createLog = async (logData) => {
  return await api('/api/logs', 'POST', logData);
};
