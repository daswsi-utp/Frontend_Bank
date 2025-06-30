'use client';

import { SessionProvider } from '@/contexts/SessionContext';
import Sidebar from '@/components/(admin)/Sidebar';
import styles from '@/styles/admin/Dashboard.module.css';

export default function AdminLayout({ children }) {
  return (
    <SessionProvider>
      <div className={styles.adminContainer}>
        <Sidebar />
        <div className={styles.mainContent}>
          {children}
        </div>
      </div>
    </SessionProvider>
  );
}
