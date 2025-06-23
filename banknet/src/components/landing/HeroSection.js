import Link from 'next/link';
import Card3D from '../utils/Card3D';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Tu banco en línea, siempre contigo</h1>
        <p className="subtitle">Abre tu cuenta, transfiere, paga y solicita préstamos desde una sola plataforma segura y moderna.</p>
        
        <div className="cta-buttons">
          <Link href="/private/register" className="btn btn-primary">Crear cuenta gratis</Link>
          <Link href="/Iniciar Sesion" className="btn btn-outline">Iniciar Sesion</Link>
        </div>
      </div>
      
      <div className="hero-image">
        <Card3D /> 
      </div>
    </section>
  );
}