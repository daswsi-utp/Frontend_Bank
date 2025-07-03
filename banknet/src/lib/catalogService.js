import { api } from './api';

// ===================== STATES ===================== //

export const getAllStates = async () => {
  return await api('/api/states', 'GET');
};

export const getStateById = async (id) => {
  return await api(`/api/states/${id}`, 'GET');
};

export const createState = async (stateData) => {
  return await api('/api/states', 'POST', stateData);
};

export const updateState = async (id, stateData) => {
  return await api(`/api/states/${id}`, 'PUT', stateData);
};

export const deleteState = async (id) => {
  return await api(`/api/states/${id}`, 'DELETE');
};

// ===================== TYPES ===================== //

export const getAllTypes = async () => {
  return await api('/api/types', 'GET');
};

export const getTypeById = async (id) => {
  return await api(`/api/types/${id}`, 'GET');
};

export const createType = async (typeData) => {
  return await api('/api/types', 'POST', typeData);
};

export const updateType = async (id, typeData) => {
  return await api(`/api/types/${id}`, 'PUT', typeData);
};

export const deleteType = async (id) => {
  return await api(`/api/types/${id}`, 'DELETE');
};
