'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LoadingScreen from "../utils/LoadingScreen";
import styles from "../../styles/user/LoginForm.module.css";
import Image from "next/image";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVICE_AUTH_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al iniciar sesión");
      }

      const { token, refreshToken, user } = await response.json();
      document.cookie = `${process.env.NEXT_PUBLIC_TOKEN_COOKIE_NAME}=${token}; path=/; max-age=${process.env.NEXT_PUBLIC_TOKEN_EXPIRATION}`;
      document.cookie = `${process.env.NEXT_PUBLIC_REFRESH_TOKEN_COOKIE_NAME}=${refreshToken}; path=/; max-age=${process.env.NEXT_PUBLIC_TOKEN_EXPIRATION * 7}`;

      const redirectPath =
        user.rol === "ADMIN" ? "/admin/dashboard" : "/dashboard";
      router.push(redirectPath);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {isLoading && <LoadingScreen />}
      
      <div className={styles.gridContainer}>
        {/* Sección de imagen */}
        <div className={styles.imageSection}>
          <Image
            src="/sulleybank.png"
            alt="Banking Security"
            layout="fill"
            objectFit="cover"
            quality={10}
            priority
          />
          <div className={styles.imageOverlay}>
            <h2 className={styles.welcomeTitle}>Bienvenido a BankNet</h2>
            <p className={styles.welcomeText}>Tu seguridad es nuestra prioridad</p>
          </div>
        </div>
        
        {/* Sección del formulario */}
        <div className={styles.formSection}>
          <div className={styles.formCard}>
            <h2 className={styles.title}>Iniciar Sesión</h2>
            {error && <div className={styles.error}>{error}</div>}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.input}
                  placeholder="tu@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.label}>Contraseña</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={styles.input}
                  placeholder="••••••••"
                />
              </div>

              <button type="submit" className={styles.button}>
                Iniciar Sesión
              </button>
            </form>

            <div className={styles.footer}>
              <p className={styles.footerText}>
                ¿No tienes una cuenta?{' '}
                <a href="/registro" className={styles.link}>Regístrate aquí</a>
              </p>
              <p className={styles.footerText}>
                <a href="/recuperar-contrasena" className={styles.link}>
                  ¿Olvidaste tu contraseña?
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;