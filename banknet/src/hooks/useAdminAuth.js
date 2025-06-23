// hooks/useAdminAuth.js
'use client';
import { useState, useEffect } from 'react';
import { getCurrentAdmin, loginAdmin, logoutAdmin } from '@/lib/auth';

export const useAdminAuth = () => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentAdmin = getCurrentAdmin();
    setAdmin(currentAdmin);
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const adminData = await loginAdmin(email, password);
    setAdmin(adminData);
    return adminData;
  };

  const logout = () => {
    logoutAdmin();
    setAdmin(null);
  };

  return { admin, loading, login, logout };
};