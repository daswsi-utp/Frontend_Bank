'use client';
import { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [globalFilter, setGlobalFilter] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  
  return (
    <AdminContext.Provider value={{
      globalFilter,
      setGlobalFilter,
      currentUser,
      setCurrentUser
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}