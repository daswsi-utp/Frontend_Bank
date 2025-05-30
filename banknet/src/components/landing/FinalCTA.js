// FinalCTA.js
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta-content">
        <h2>¿Listo para cambiar la forma en que manejas tu dinero?</h2>
        <p className="cta-subtitle">Únete a miles de usuarios que ya disfrutan de una banca sin complicaciones</p>
        
        <div className="cta-buttons">
          <Link href="/private/register" className="btn btn-primary" aria-label="Registrarse en BankNet">
            Empieza ahora gratis
          </Link>
          <Link href="/Iniciar-Sesion" className="btn btn-outline" aria-label="Iniciar sesión en BankNet">
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </section>
  );
}