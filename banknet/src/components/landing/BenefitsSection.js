import CustomIcon from "../icons/CustomIcon";

const benefits = [
  { icon: "bank", title: "Cuenta bancaria online", description: "Sin papeleos" },
  { icon: "card", title: "Tarjeta de débito virtual", description: "Compras en línea" },
  { icon: "transfer", title: "Transferencias seguras", description: "Entre bancos" },
  { icon: "loan", title: "Simulación de préstamos", description: "Sin salir de casa" },
  { icon: "security", title: "Autenticación segura", description: "Tecnología avanzada" },
  { icon: "notification", title: "Notificaciones", description: "En tiempo real" },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="benefits-section">
      <h2>Todo lo que necesitas para manejar tu dinero</h2>
      
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            {/* Cambia esto: */}
            {/* <img src={benefit.icon} alt={benefit.title} /> */}
            
            {/* Por esto: */}
            <CustomIcon 
              icon={benefit.icon} 
              className="icon-style" // Añade tus clases CSS aquí
            />
            
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}