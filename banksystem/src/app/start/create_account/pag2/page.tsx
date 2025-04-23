'use client';

import React, { useState } from 'react';

export default function RegisterStep1() {
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
  const [selectedCivilStatus, setSelectedCivilStatus] = useState<string | null>(null);

  const handleCurrencySelection = (currency: string) => {
    setSelectedCurrency(currency);
  };

  const handleCivilStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCivilStatus(event.target.value);
  };

  return (
    <div>
      {/* Barra superior */}
      <div className="barra-superior">
        <img src="LOGO.jfif" alt="Logo" />
      </div>

      {/* Barra de progreso */}
      <div className="progressbar">
        <div className="step completed">1</div>
        <div className="step active">2</div>
        <div className="step completed">3</div>
      </div>

      {/* Contenido del formulario */}
      <div className="contenido_form">
        <h1>Datos Personales</h1>
        <form>
          {/* Campo E-mail */}
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" required />
          <br />
          <br />

          {/* Confirmar E-mail */}
          <label htmlFor="confirm-email">Confirma tu E-mail</label>
          <input type="email" id="confirm-email" required />
          <br />
          <br />

          {/* Fecha de nacimiento */}
          <label htmlFor="dob">Fecha de Nacimiento</label>
          <br />
          <input type="date" id="dob" />
          <br />

          {/* Selección de moneda */}
          <label>¿En qué moneda quieres abrir tu cuenta?</label>
          <br />
          <input
            type="button"
            className="moneda-btn"
            value="Soles"
            onClick={() => handleCurrencySelection('Soles')}
          />
          <input
            type="button"
            className="moneda-btn"
            value="Dólares"
            onClick={() => handleCurrencySelection('Dólares')}
          />
          <br />
          <br />

          {/* Estado Civil */}
          <label>Estado Civil</label>
          <br />
          <div className="estado-civil-group">
            <label className="radio-btn">
              <input
                type="radio"
                name="estado_civil"
                value="Casado"
                onChange={handleCivilStatusChange}
              />
              Casado
            </label>

            <label className="radio-btn">
              <input
                type="radio"
                name="estado_civil"
                value="Conviviente"
                onChange={handleCivilStatusChange}
              />
              Conviviente
            </label>

            <label className="radio-btn">
              <input
                type="radio"
                name="estado_civil"
                value="Divorciado"
                onChange={handleCivilStatusChange}
              />
              Divorciado
            </label>

            <label className="radio-btn">
              <input
                type="radio"
                name="estado_civil"
                value="Soltero"
                onChange={handleCivilStatusChange}
              />
              Soltero
            </label>

            <label className="radio-btn">
              <input
                type="radio"
                name="estado_civil"
                value="Viudo"
                onChange={handleCivilStatusChange}
              />
              Viudo
            </label>
          </div>
          <br />
          <br />

          {/* Botón Siguiente */}
          <div style={{ textAlign: 'center' }}>
            <button
              className="class_boton"
              type="button"
              onClick={() => (window.location.href = 'Registro2.html')}
            >
              Siguiente
            </button>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
}
