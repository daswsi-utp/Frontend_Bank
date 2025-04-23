'use client';

import React, { useState } from 'react';

export default function RegisterStep2() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedProvince, setSelectedProvince] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [formData, setFormData] = useState({
    number: '',
    block: '',
    lot: '',
    interior: '',
    urbanization: '',
    maritalStatus: '',
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMaritalStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, maritalStatus: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(e.target.checked);
  };

  const handleSubmit = () => {
    if (termsAccepted) {
      window.location.href = 'IndexRegistro.html';
    } else {
      alert('Por favor, acepte los términos.');
    }
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
        <div className="step completed">2</div>
        <div className="step active">3</div>
      </div>

      {/* Formulario */}
      <div className="contenido_form">
        <form>
          <hr />

          <h1>Datos a Domicilio</h1>

          {/* Dirección */}
          <div className="fila-3columnas">
            <div className="columna">
              <label>Departamento</label>
              <select
                name="department"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="Arequipa">Arequipa</option>
                <option value="Lima">Lima</option>
                <option value="Ilo">Ilo</option>
              </select>
            </div>

            <div className="columna">
              <label>Provincia</label>
              <select
                name="province"
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
              >
                <option value="Arequipa">Arequipa</option>
                <option value="Lima">Lima</option>
                <option value="Ilo">Ilo</option>
              </select>
            </div>

            <div className="columna">
              <label>Distrito</label>
              <select
                name="district"
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
              >
                <option value="Caylloma">Caylloma</option>
                <option value="Callao">Callao</option>
                <option value="Ilo">Ilo</option>
              </select>
            </div>
          </div>

          {/* Dirección adicional */}
          <div className="fila-4columnas">
            <div className="columna">
              <label>Número</label>
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
              />
            </div>

            <div className="columna">
              <label>Manzana</label>
              <input
                type="text"
                name="block"
                value={formData.block}
                onChange={handleChange}
              />
            </div>

            <div className="columna">
              <label>Lote</label>
              <input
                type="text"
                name="lot"
                value={formData.lot}
                onChange={handleChange}
              />
            </div>

            <div className="columna">
              <label>Interior/Dpto</label>
              <input
                type="text"
                name="interior"
                value={formData.interior}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Urbanización */}
          <label>Urbaniacion</label>
          <input
            type="text"
            name="urbanization"
            value={formData.urbanization}
            onChange={handleChange}
          />
          <br />

          {/* Estado Civil */}
          <h1>Declaro que:</h1>
          <div className="estado-civil-group">
            <label className="radio-btn">
              <input
                type="radio"
                name="maritalStatus"
                value="Casado"
                checked={formData.maritalStatus === 'Casado'}
                onChange={handleMaritalStatusChange}
              />
              Casado
            </label>

            <label className="radio-btn">
              <input
                type="radio"
                name="maritalStatus"
                value="Conviviente"
                checked={formData.maritalStatus === 'Conviviente'}
                onChange={handleMaritalStatusChange}
              />
              Conviviente
            </label>
          </div>
          <br />

          <hr />

          {/* Términos y condiciones */}
          <div className="checkbox">
            <input
              type="checkbox"
              id="autorizo"
              required
              checked={termsAccepted}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="autorizo">He leido y aceptado los Terminos</label>
          </div>
          <br />
          <div className="checkbox">
            <input
              type="checkbox"
              id="autorizo2"
              required
              checked={termsAccepted}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="autorizo2">He leido y aceptado los Terminos</label>
          </div>
          <br />
          <div className="checkbox">
            <input
              type="checkbox"
              id="autorizo3"
              required
              checked={termsAccepted}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="autorizo3">Autorizo a el uso de mis datos</label>
          </div>
          <br />

          {/* Botón Abrir cuenta */}
          <div style={{ textAlign: 'center' }}>
            <button
              className="class_boton"
              type="button"
              onClick={handleSubmit}
            >
              Abrir cuenta
            </button>
          </div>
        </form>
      </div>
      <br />
    </div>
  );
}
