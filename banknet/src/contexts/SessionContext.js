// src/contexts/SessionContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Cargar sesión desde cookie al iniciar
  useEffect(() => {
    const storedUser = getCookie('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        setUser(null);
      }
    }
  }, []);

  const login = async ({ email, password, tipo }) => {
    const endpoint = tipo === 'EMPLEADO' ? '/auth/admin/login' : '/auth/login';

    const res = await fetch(`http://localhost:8080${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error('Error al iniciar sesión');

    const data = await res.json();
    setUser(data);
    setCookie('user', JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    deleteCookie('user');
  };

  return (
    <SessionContext.Provider value={{ user, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => useContext(SessionContext);
