// src/lib/userService.js
import { api } from './api';

/**
 * Obtener todos los usuarios (clientes y empleados).
 */
export const getAllUsers = async () => {
  return await api('/api/users', 'GET');
};

/**
 * Obtener un usuario por su ID.
 * @param {number} id
 */
export const getUserById = async (id) => {
  return await api(`/api/users/${id}`, 'GET');
};

/**
 * Crear un nuevo usuario.
 * @param {object} userData
 */
export const createUser = async (userData) => {
  return await api('/api/users', 'POST', userData);
};

/**
 * Actualizar datos de un usuario.
 * @param {number} id
 * @param {object} updatedData
 */
export const updateUser = async (id, updatedData) => {
  return await api(`/api/users/${id}`, 'PUT', updatedData);
};

/**
 * Eliminar un usuario por su ID.
 * @param {number} id
 */
export const deleteUser = async (id) => {
  return await api(`/api/users/${id}`, 'DELETE');
};
