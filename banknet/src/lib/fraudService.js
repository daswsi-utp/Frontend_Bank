// src/lib/fraudService.js
import { api } from './api';


// ===================== ALERTAS DE FRAUDE ===================== //

/**
 * Obtener todas las alertas de fraude.
 */
export const getAllFraudAlerts = async () => {
  return await api('/api/fraud-alerts', 'GET');
};

/**
 * Obtener una alerta de fraude por ID.
 * @param {number} id
 */
export const getFraudAlertById = async (id) => {
  return await api(`/api/fraud-alerts/${id}`, 'GET');
};

/**
 * Registrar una nueva alerta de fraude.
 * @param {object} alertData
 */
export const createFraudAlert = async (alertData) => {
  return await api('/api/fraud-alerts', 'POST', alertData);
};

/**
 * Actualizar una alerta de fraude (acción tomada, etc).
 * @param {number} id
 * @param {object} updatedData
 */
export const updateFraudAlert = async (id, updatedData) => {
  return await api(`/api/fraud-alerts/${id}`, 'PUT', updatedData);
};



// ===================== PATRONES DE FRAUDE ===================== //

/**
 * Obtener todos los patrones de fraude configurados.
 */
export const getAllFraudPatterns = async () => {
  return await api('/api/fraud-patterns', 'GET');
};

/**
 * Obtener un patrón por su ID.
 * @param {number} id
 */
export const getFraudPatternById = async (id) => {
  return await api(`/api/fraud-patterns/${id}`, 'GET');
};

/**
 * Crear un nuevo patrón de fraude.
 * @param {object} patternData
 */
export const createFraudPattern = async (patternData) => {
  return await api('/api/fraud-patterns', 'POST', patternData);
};

/**
 * Actualizar un patrón existente.
 * @param {number} id
 * @param {object} updatedData
 */
export const updateFraudPattern = async (id, updatedData) => {
  return await api(`/api/fraud-patterns/${id}`, 'PUT', updatedData);
};

/**
 * Eliminar un patrón de fraude.
 * @param {number} id
 */
export const deleteFraudPattern = async (id) => {
  return await api(`/api/fraud-patterns/${id}`, 'DELETE');
};
