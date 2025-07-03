// src/lib/fraudService.js
import { api } from './api';

// ===================== ALERTAS DE FRAUDE ===================== //

export const getAllFraudAlerts = async () => {
  return await api('/api/fraud-alerts', 'GET');
};

export const getFraudAlertById = async (id) => {
  return await api(`/api/fraud-alerts/${id}`, 'GET');
};

export const getFraudAlertsByUser = async (userId) => {
  return await api(`/api/fraud-alerts/user/${userId}`, 'GET');
};

export const getFraudAlertsByType = async (type) => {
  return await api(`/api/fraud-alerts/type/${type}`, 'GET');
};

export const createFraudAlert = async (alertData) => {
  return await api('/api/fraud-alerts', 'POST', alertData);
};

export const updateFraudAlert = async (id, alertData) => {
  return await api(`/api/fraud-alerts/${id}`, 'PUT', alertData);
};

export const deleteFraudAlert = async (id) => {
  return await api(`/api/fraud-alerts/${id}`, 'DELETE');
};

// ===================== PATRONES DE FRAUDE ===================== //

export const getAllFraudPatterns = async () => {
  return await api('/api/fraud-patterns', 'GET');
};

export const getFraudPatternById = async (id) => {
  return await api(`/api/fraud-patterns/${id}`, 'GET');
};

export const getActiveFraudPatterns = async () => {
  return await api('/api/fraud-patterns/active', 'GET');
};

export const createFraudPattern = async (patternData) => {
  return await api('/api/fraud-patterns', 'POST', patternData);
};

export const updateFraudPattern = async (id, patternData) => {
  return await api(`/api/fraud-patterns/${id}`, 'PUT', patternData);
};

export const deleteFraudPattern = async (id) => {
  return await api(`/api/fraud-patterns/${id}`, 'DELETE');
};
