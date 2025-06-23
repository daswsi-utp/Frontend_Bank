import React from 'react';
import styles from '../../styles/components/LoadingScreen.module.css';

const LoadingScreen = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className={styles.loadingText}>Cargando...</p>
    </div>
  );
};

export default LoadingScreen;