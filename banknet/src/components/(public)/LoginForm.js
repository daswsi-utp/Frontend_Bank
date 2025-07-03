"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/authService";
import styles from "../../styles/user/LoginForm.module.css";
import Image from "next/image";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const payload = { email, password };
    console.log("📤 Enviando credenciales:", payload);

    try {
      const response = await login(payload);
      console.log("✅ Login exitoso. Datos recibidos del backend:", response);

      // Guardar en cookie codificada
      document.cookie = `user=${encodeURIComponent(
        JSON.stringify(response)
      )}; path=/`;

      // Redirigir al dashboard privado
      if (response.userType === "CLIENTE") {
        router.push("/cliente");
      } else if (response.userType === "EMPLEADO") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch (err) {
      console.error("❌ Error en login:", err);
      setError("Correo o contraseña incorrectos");
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div>
            <div className={styles.spinner}></div>
            <div className={styles.loadingText}>Cargando...</div>
          </div>
        </div>
      )}

      <div className={styles.gridContainer}>
        <div className={styles.imageSection}>
          <Image
            src="/banco.png"
            alt="BankNet"
            layout="fill"
            objectFit="cover"
            quality={10}
            priority
          />
          <div className={styles.imageOverlay}>
            <h2 className={styles.welcomeTitle}>Bienvenido a BankNet</h2>
            <p className={styles.welcomeText}>
              Tu seguridad es nuestra prioridad
            </p>
          </div>
        </div>

        <div className={styles.formSection}>
          <div className={styles.formCard}>
            <h2 className={styles.title}>Iniciar Sesión</h2>
            {error && <div className={styles.error}>{error}</div>}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Correo Electrónico
                </label>
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
                <label htmlFor="password" className={styles.label}>
                  Contraseña
                </label>
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

              <button
                type="submit"
                className={styles.button}
                disabled={isLoading}
              >
                Iniciar Sesión
              </button>
            </form>

            <div className={styles.footer}>
              <p className={styles.footerText}>
                ¿No tienes una cuenta?{" "}
                <a href="/registro" className={styles.link}>
                  Regístrate aquí
                </a>
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
