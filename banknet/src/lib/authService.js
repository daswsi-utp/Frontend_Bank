// src/lib/authService.js
import { api } from './api';

/**
 * Iniciar sesión con email y contraseña.
 * El backend devolverá userId, rol y más.
 * @param {{ email: string, password: string }} credentials
 * @returns {Promise<any>} Respuesta con datos del usuario
 */
export const login = async ({ email, password }) => {
  return await api('/auth/login', 'POST', {
    email,
    password
  });
};
