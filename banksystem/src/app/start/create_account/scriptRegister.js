
function seleccionarMoneda(boton) {
    // Quitar la clase 'selected' de todos los botones
    const botones = document.querySelectorAll('.moneda-btn');
    botones.forEach(btn => btn.classList.remove('selected'));
  
    // Agregar la clase 'selected' solo al que se hizo clic
    boton.classList.add('selected');
  }