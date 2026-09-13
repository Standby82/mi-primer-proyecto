document.addEventListener('DOMContentLoaded', () => {
  const saludarBtn = document.getElementById('saludar-btn');
  const mensajeEl = document.getElementById('mensaje');
  const volverBtn = document.getElementById('volver-btn');

  if (saludarBtn && mensajeEl) {
    saludarBtn.addEventListener('click', () => {
      mensajeEl.textContent = '¡Hola desde mi proyecto!';
    });
  }

  if (volverBtn) {
    volverBtn.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
});
