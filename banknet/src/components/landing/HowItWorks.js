export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Regístrate con tu DNI y correo',
      description: 'Proceso rápido y seguro'
    },
    {
      number: '2',
      title: 'Crea tu cuenta bancaria en minutos',
      description: 'Sin papeleos ni trámites'
    },
    {
      number: '3',
      title: 'Administra tu dinero desde donde estés',
      description: 'Acceso 24/7 desde cualquier dispositivo'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <h2>Empieza en 3 simples pasos</h2>
      
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-number">{step.number}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}