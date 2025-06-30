// src/hooks/useSession.js
import { useState, useEffect } from 'react';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';

export const useSession = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = getCookie('user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
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

    if (!res.ok) throw new Error('Credenciales inválidas');

    const data = await res.json();
    setCookie('user', JSON.stringify(data));
    setUser(data);
  };

  const logout = () => {
    deleteCookie('user');
    setUser(null);
  };

  return { user, login, logout };
};
