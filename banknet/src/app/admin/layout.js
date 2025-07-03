'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/(admin)/Sidebar';
import styles from '@/styles/admin/Dashboard.module.css';
import { getUserFromCookie } from '@/lib/auth';

export default function AdminLayout({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = getUserFromCookie();

    if (!user || user.userType !== 'EMPLEADO') {
      router.replace('/unauthorized');
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  if (!isAuthorized) return null; // o un loading simple

  return (
    <div className={styles.adminContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        {children}
      </div>
    </div>
  );
}
