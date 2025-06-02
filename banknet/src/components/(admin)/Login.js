'use client';

import { useState } from 'react';
import styles from '@/styles/admin/Login.module.css';
import { loginAdmin } from '@/lib/authadmin';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const admin = await loginAdmin(email, password);
      console.log("Admin logueado:", admin); // puedes quitarlo después
      onLogin(admin); // pasa datos al dashboard o lo que necesites
    } catch (err) {
      console.error(err);
      setError("Credenciales incorrectas");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginOverlay}>
      <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>
          <h2 className={styles.loginTitle}>Panel Administrativo</h2>
          <p className={styles.loginSubtitle}>Ingrese sus credenciales</p>
        </div>

        {error && (
          <div className={styles.errorMessage}>
            <span>⚠️</span> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Correo</label>
            <input
              id="email"
              type="email"
              className={styles.formInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.formLabel}>Contraseña</label>
            <input
              id="password"
              type="password"
              className={styles.formInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className={styles.loginButton}
            disabled={isLoading}
          >
            {isLoading ? 'Verificando...' : 'Ingresar'}
          </button>
        </form>

        <div className={styles.loginFooter}>
          <p className={styles.footerText}>Sistema administrativo v1.0</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
