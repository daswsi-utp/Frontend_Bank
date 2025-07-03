import { api } from './api';

//
// ========== USUARIOS ==========
//

/**
 * Crear un nuevo usuario.
 * @param {object} data - Datos del usuario (UsuarioRequestDTO)
 */
export const createUser = async (data) => {
  return await api('/api/users', 'POST', data);
};

/**
 * Obtener todos los usuarios.
 */
export const getAllUsers = async () => {
  return await api('/api/users', 'GET');
};

/**
 * Obtener un usuario por ID.
 * @param {number} id
 */
export const getUserById = async (id) => {
  return await api(`/api/users/${id}`, 'GET');
};

/**
 * Actualizar un usuario.
 * @param {number} id
 * @param {object} data - Datos actualizados (UsuarioRequestDTO)
 */
export const updateUser = async (id, data) => {
  return await api(`/api/users/${id}`, 'PUT', data);
};

/**
 * Eliminar un usuario.
 * @param {number} id
 */
export const deleteUser = async (id) => {
  return await api(`/api/users/${id}`, 'DELETE');
};


//
// ========== METADATOS DE EMPLEADO ==========
//

/**
 * Crear metadata para empleado.
 * @param {object} data - EmpleadoMetadataRequestDTO
 */
export const createEmployeeMetadata = async (data) => {
  return await api('/api/employees/metadata', 'POST', data);
};

/**
 * Obtener metadata por ID.
 * @param {number} id
 */
export const getEmployeeMetadataById = async (id) => {
  return await api(`/api/employees/metadata/${id}`, 'GET');
};

/**
 * Actualizar metadata por ID.
 * @param {number} id
 * @param {object} data - EmpleadoMetadataRequestDTO
 */
export const updateEmployeeMetadata = async (id, data) => {
  return await api(`/api/employees/metadata/${id}`, 'PUT', data);
};

/**
 * Eliminar metadata por ID.
 * @param {number} id
 */
export const deleteEmployeeMetadata = async (id) => {
  return await api(`/api/employees/metadata/${id}`, 'DELETE');
};
