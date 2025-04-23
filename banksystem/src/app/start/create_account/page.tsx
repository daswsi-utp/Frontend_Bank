'use client';

import React from 'react';
import './styleRegister.css'; 


export default function RegisterPage() {
  return (
    <div>
      {/* Barra blanca superior */}
      <div className="barra-superior">
        <img src="/imgRegister/LOGO.jfif" alt="Logo" />
      </div>

      {/* Cuerpo dividido con tarjetas */}
      <div className="contenedor">
        <div className="mitad izquierda">
          <div className="tarjeta">
            <h1>CUENTA SIMPLE</h1>
            <p>Abre 100% online y disfruta de todos sus beneficios</p>
          </div>

          {/* Tarjetas adicionales */}
          <div className="tarjeta-info">
            <img src="/imgRegister/tarjeta1.png" alt="Icono" />

            <div className="texto-info">
              <h3>Triplicamos el retiro de tu AFP</h3>
              <p>
                Solicita el retiro de tu A en tu Cuenta Simple y estarás participando del sorteo donde podrás multiplicar x3 tu dinero. Serán 20 ganadores
              </p>
            </div>
          </div>

          <div className="tarjeta-info">
            <img src="/imgRegister/gratis.png" alt="Icono" />
            <div className="texto-info">
              <h3>Costo Cero</h3>
              <p>
                No cobra mantenimiento. Además, realiza tus pagos y transferencias interbancarias GRATIS en nuestros canales digitales
              </p>
            </div>
          </div>

          <div className="tarjeta-info">
            <img src="/imgRegister/hucha.png" alt="Icono" />
            <div className="texto-info">
              <h3>Ahorra en tu alcancía Virtual</h3>
              <p>Fácil, seguro y gana intereses.</p>
            </div>
          </div>
        </div>

        <div className="mitad derecha">
          <div className="tarjeta_2">
            <h1>Ingrese tus datos y abre tu cuenta de ahorros al instante</h1>
          </div>

          <div className="tarjeta_2">
            <form>
              <label htmlFor="dni1">Número de DNI</label>
              <div style={{ maxWidth: '300px' }}>
                <input type="text" id="dni1" placeholder="Ingrese su DNI" />
              </div>

              <br /><br />

              <label htmlFor="email">E-Mail</label>
              <div style={{ maxWidth: '300px' }}>
                <input type="text" id="email" name="email" placeholder="Ingrese su E-Mail" />
              </div>

              <br /><br />

              <label htmlFor="operador">Operador</label>
              <div style={{ maxWidth: '300px' }}>
                <select id="operador" name="operador">
                  <option value="movistar">Movistar</option>
                  <option value="claro">Claro</option>
                  <option value="entel">Entel</option>
                  <option value="bitel">Bitel</option>
                </select>
              </div>

              <br /><br />

              <label htmlFor="dni2">Número de DNI</label>
              <div style={{ maxWidth: '300px' }}>
                <input type="text" id="dni2" placeholder="Ingrese su DNI" />
              </div>

              <br /><br />

              <div className="checkbox">
                <input type="checkbox" id="autorizo" required />
                <label htmlFor="autorizo">
                  Autorizo a BankNet el{' '}
                  <a href="#" style={{ color: '#00b14f' }}>
                    Tratamiento de Datos Personales
                  </a>.
                </label>
              </div>

              <br /><br />

              <button
                className="class_boton"
                type="button"
                onClick={() => {
                  window.location.href = '/start/create_account/page2';
                }}
              >
                Siguiente
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
