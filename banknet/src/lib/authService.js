// src/lib/authService.js
import { api } from './api';

/**
 * Iniciar sesión como cliente.
 * @param {{ email: string, password: string }} credentials
 * @returns {Promise<any>} Respuesta del backend con token, usuario, etc.
 */
export const loginClient = async (credentials) => {
  return await api('/auth/login', 'POST', credentials);
};

/**
 * Iniciar sesión como empleado (admin, cajero, analista, etc).
 * @param {{ email: string, password: string }} credentials
 * @returns {Promise<any>}
 */
export const loginAdmin = async (credentials) => {
  return await api('/auth/admin/login', 'POST', credentials);
};

/**
 * Cerrar sesión activa del usuario.
 * @param {string} token Token de sesión (opcional si estás usando cookies)
 */
export const logout = async (token) => {
  return await api('/auth/logout', 'POST', null, token);
};

/**
 * Validar token o sesión activa (opcional).
 */
export const validateSession = async () => {
  return await api('/auth/validate', 'GET');
};
