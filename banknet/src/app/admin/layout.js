'use client';

import Sidebar from '@/components/(admin)/Sidebar';
import styles from '@/styles/admin/Dashboard.module.css';

export default function AdminLayout({ children }) {
  return (
    <div className={styles.adminContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        {children}
      </div>
    </div>
  );
}