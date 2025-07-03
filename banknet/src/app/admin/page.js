// src/app/admin/page.js
'use client';

import { useEffect, useState } from 'react';
import AdminDashboard from '@/components/(admin)/AdminDashboard';
import { fetchDashboardData } from '@/lib/adminData';

export default function AdminPage() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchDashboardData();
        setDashboardData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <div>Cargando dashboard...</div>;
  if (error) return <div>Error: {error}</div>;

  return <AdminDashboard {...dashboardData} />; // ← Esto ya lo pasa todo
}
