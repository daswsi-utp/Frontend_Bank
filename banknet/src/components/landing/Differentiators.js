// Differentiators.js
export default function Differentiators() {
  const advantages = [
    'Sin colas, sin trámites físicos',
    'Transacciones en segundos',
    'Plataforma amigable',
    'Asistencia y soporte en línea',
    'Seguridad con múltiples capas'
  ];

  return (
    <section id="why-us" className="differentiators">
      <div className="differentiators-container">
        <div className="differentiators-content">
          <h2>¿Por qué elegir BankNet?</h2>
          
          <div className="advantages-list">
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-item">
                <span className="check-icon">✓</span>
                <p>{advantage}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="differentiators-image">
          <img 
            src="imagen1banknet.avif" 
            alt="Persona usando BankNet en su dispositivo móvil" 
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}