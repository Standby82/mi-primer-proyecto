document.addEventListener('DOMContentLoaded', () => {
  const saludarBtn = document.getElementById('saludar-btn');
  const mensajeEl = document.getElementById('mensaje');

  if (saludarBtn && mensajeEl) {
    saludarBtn.addEventListener('click', () => {
      mensajeEl.textContent = '¡Hola desde mi proyecto!';
    });
  }
});
