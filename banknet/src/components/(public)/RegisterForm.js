'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingScreen from '../utils/LoadingScreen';
import styles from '../../styles/user/RegisterForm.module.css';
import { USER_API } from '@/lib/api';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apePaterno: '',
    apeMaterno: '',
    email: '',
    telefono: '',
    dni: '',
    departamento: '',
    provincia: '',
    distrito: '',
    direccion: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      setIsLoading(false);
      return;
    }

    try {
      const userResponse = await fetch(USER_API.CREATE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          apePaterno: formData.apePaterno,
          apeMaterno: formData.apeMaterno,
          email: formData.email,
          telefono: formData.telefono,
          dni: formData.dni,
          departamento: formData.departamento,
          provincia: formData.provincia,
          distrito: formData.distrito,
          direccion: formData.direccion,
          password: formData.password // El backend la usará para crear la credencial
        }),
      });

      if (!userResponse.ok) {
        const errorData = await userResponse.json();
        console.error('Error detalle:', errorData);
        throw new Error(errorData.message || 'Error al registrar usuario');
      }

      router.push('/login?registro=exitoso');
    } catch (err) {
      setError(err.message || 'Error inesperado');
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {isLoading && <LoadingScreen />}
      <div className={styles.card}>
        <h2 className={styles.title}>Registro en BankNet</h2>
        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="nombre">Nombres</label>
              <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="apePaterno">Apellido Paterno</label>
              <input type="text" id="apePaterno" name="apePaterno" value={formData.apePaterno} onChange={handleChange} required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="apeMaterno">Apellido Materno</label>
              <input type="text" id="apeMaterno" name="apeMaterno" value={formData.apeMaterno} onChange={handleChange} required className={styles.input} />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                pattern="[0-9]*"
                required
                placeholder="Ej. 987654321"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="dni">DNI</label>
              <input type="text" id="dni" name="dni" value={formData.dni} onChange={handleChange} required className={styles.input} />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="departamento">Departamento</label>
              <input type="text" id="departamento" name="departamento" value={formData.departamento} onChange={handleChange} required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="provincia">Provincia</label>
              <input type="text" id="provincia" name="provincia" value={formData.provincia} onChange={handleChange} required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="distrito">Distrito</label>
              <input type="text" id="distrito" name="distrito" value={formData.distrito} onChange={handleChange} required className={styles.input} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="direccion">Dirección Completa</label>
            <textarea id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} required className={styles.textarea} />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required minLength="8" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
              <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required minLength="8" className={styles.input} />
            </div>
          </div>

          <button type="submit" className={styles.button}>
            Registrarse
          </button>
        </form>

        <div className={styles.footer}>
          <p>¿Ya tienes una cuenta? <a href="/login" className={styles.link}>Inicia sesión aquí</a></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
