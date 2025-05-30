import Link from 'next/link';
import styles from '../../styles/globals.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="logo.png" alt="BankNet" />
        </div>
        
        <div className="nav-links">
          <Link href="#benefits">Beneficios</Link>
          <Link href="#how-it-works">Cómo funciona</Link>
          <Link href="#why-us">Por qué elegirnos</Link>
          <Link href="#contact">Contacto</Link>
        </div>
        
        <div className="auth-buttons">
          <Link href="/private/login" className="btn btn-outline">Iniciar sesión</Link>
          <Link href="/private/register" className="btn btn-primary">Crear cuenta</Link>
        </div>
      </div>
    </nav>
  );
}