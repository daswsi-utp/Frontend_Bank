import jwt from 'jsonwebtoken';

// Verificar token JWT
export const verifyToken = async (token) => {
  if (!token) throw new Error('Token no proporcionado');
  
  try {
    // En un caso real, aquí deberías validar el token con tu servicio de autenticación
    // Esto es solo para demostración
    const decoded = jwt.decode(token);
    
    if (!decoded) throw new Error('Token inválido');
    
    // Verificar expiración
    if (decoded.exp && decoded.exp < Date.now() / 1000) {
      throw new Error('Token expirado');
    }
    
    return decoded;
  } catch (error) {
    throw new Error(`Error al verificar token: ${error.message}`);
  }
};

// Obtener usuario autenticado
export const getCurrentUser = async (token) => {
  if (!token) return null;
  
  try {
    const decoded = await verifyToken(token);
    
    // Obtener detalles del usuario desde serviceuser
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVICE_USER_URL}/api/users/${decoded.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (!response.ok) {
      throw new Error('Error al obtener usuario');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    return null;
  }
};

// Cerrar sesión
export const logout = () => {
  // Eliminar cookies
  document.cookie = `${process.env.NEXT_PUBLIC_TOKEN_COOKIE_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  document.cookie = `${process.env.NEXT_PUBLIC_REFRESH_TOKEN_COOKIE_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  
  // Redireccionar a login
  window.location.href = '/login';
};