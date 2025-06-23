'use client';

import { useState } from 'react';
import styles from '@/styles/admin/Settings.module.css';

export default function SettingsTabs() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabsHeader}>
        <button 
          className={`${styles.tabButton} ${activeTab === 'general' ? styles.active : ''}`}
          onClick={() => setActiveTab('general')}
        >
          General
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'security' ? styles.active : ''}`}
          onClick={() => setActiveTab('security')}
        >
          Seguridad
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'notifications' ? styles.active : ''}`}
          onClick={() => setActiveTab('notifications')}
        >
          Notificaciones
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'integrations' ? styles.active : ''}`}
          onClick={() => setActiveTab('integrations')}
        >
          Integraciones
        </button>
      </div>
      
      <div className={styles.tabContent}>
        {activeTab === 'general' && (
          <div>
            <div className={styles.settingGroup}>
              <h3 className={styles.settingTitle}>Configuración General</h3>
              
              <div className={styles.settingItem}>
                <div>
                  <div className={styles.settingLabel}>Nombre del Banco</div>
                  <div className={styles.settingDescription}>El nombre que aparecerá en el sistema</div>
                </div>
                <input type="text" className={styles.inputField} defaultValue="BankNet" />
              </div>
              
              <div className={styles.settingItem}>
                <div>
                  <div className={styles.settingLabel}>Moneda Principal</div>
                  <div className={styles.settingDescription}>Moneda base para todas las transacciones</div>
                </div>
                <select className={styles.filterSelect}>
                  <option>USD - Dólar Americano</option>
                  <option>EUR - Euro</option>
                  <option>MXN - Peso Mexicano</option>
                </select>
              </div>
            </div>
            
            <button className={styles.saveButton}>Guardar Cambios</button>
          </div>
        )}
        
        {activeTab === 'security' && (
          <div>
            <div className={styles.settingGroup}>
              <h3 className={styles.settingTitle}>Configuración de Seguridad</h3>
              
              <div className={styles.settingItem}>
                <div>
                  <div className={styles.settingLabel}>Autenticación en Dos Pasos</div>
                  <div className={styles.settingDescription}>Requerir verificación adicional para accesos</div>
                </div>
                <label className={styles.switch}>
                  <input type="checkbox" />
                  <span className={styles.slider}></span>
                </label>
              </div>
              
              <div className={styles.settingItem}>
                <div>
                  <div className={styles.settingLabel}>Registro de Actividad</div>
                  <div className={styles.settingDescription}>Mantener un registro de todas las acciones administrativas</div>
                </div>
                <label className={styles.switch}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>
            
            <button className={styles.saveButton}>Guardar Cambios</button>
          </div>
        )}
        
        
      </div>
    </div>
  );
}