'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/admin/Sidebar.module.css';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { 
      icon: '🏠', 
      label: 'Dashboard', 
      href: '/admin',
      active: pathname === '/admin'
    },
    { 
      icon: '💳', 
      label: 'Cuentas', 
      href: '/admin/accounts',
      active: pathname === '/admin/accounts'
    },
    { 
      icon: '↔️', 
      label: 'Transacciones', 
      href: '/admin/transactions',
      active: pathname === '/admin/transactions'
    },
    { 
      icon: '📊', 
      label: 'Reportes', 
      href: '/admin/reports',
      active: pathname === '/admin/reports'
    },
    { 
      icon: '👥', 
      label: 'Clientes', 
      href: '/admin/clients',
      active: pathname === '/admin/clients'
    },
    { 
      icon: '⚙️', 
      label: 'Configuración', 
      href: '/admin/settings',
      active: pathname === '/admin/settings'
    },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>BankNet Admin</div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link 
                href={item.href} 
                className={`${styles.menuItem} ${item.active ? styles.active : ''}`}
              >
                <span className={styles.menuIcon}>{item.icon}</span>
                <span className={styles.menuLabel}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.footer}>
        <div className={styles.userProfile}>
          <div className={styles.avatar}>AD</div>
          <div>
            <p className={styles.userName}>Admin User</p>
            <p className={styles.userRole}>Administrador</p>
          </div>
        </div>
        <button className={styles.logoutButton}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Sidebar;