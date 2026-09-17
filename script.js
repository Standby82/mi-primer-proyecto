document.addEventListener('DOMContentLoaded', () => {
  const saludarBtn = document.getElementById('saludar-btn');
  const mensajeEl = document.getElementById('mensaje');
  const volverBtn = document.getElementById('volver-btn');
  const nuevaTareaInput = document.getElementById('nueva-tarea');
  const agregarBtn = document.getElementById('agregar-btn');
  const tasksList = document.getElementById('tasks-list');

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

  // Lógica para agregar tareas
  if (nuevaTareaInput && agregarBtn && tasksList) {
    agregarBtn.addEventListener('click', () => {
      const texto = nuevaTareaInput.value.trim();
      if (!texto) return;

      const li = document.createElement('li');
      li.className = 'task-item';
      const taskText = document.createElement('span');
      taskText.className = 'task-text';
      taskText.textContent = texto;

      const deleteBtn = document.createElement('button');
      deleteBtn.type = 'button';
      deleteBtn.className = 'btn btn-delete';
      deleteBtn.setAttribute('aria-label', 'Eliminar tarea');
      deleteBtn.textContent = 'Eliminar';

      deleteBtn.addEventListener('click', () => {
        tasksList.removeChild(li);
      });

      const completeBtn = document.createElement('button');
      completeBtn.type = 'button';
      completeBtn.className = 'btn btn-complete';
      completeBtn.setAttribute('aria-label', 'Marcar tarea como completada');
      completeBtn.textContent = 'Completar';

      completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
        completeBtn.textContent = li.classList.contains('completed') ? 'Deshacer' : 'Completar';
        completeBtn.setAttribute('aria-label', li.classList.contains('completed') ? 'Desmarcar tarea como completada' : 'Marcar tarea como completada');
      });

      li.appendChild(taskText);
      li.appendChild(completeBtn);
      li.appendChild(deleteBtn);
      tasksList.appendChild(li);
      nuevaTareaInput.value = '';
      nuevaTareaInput.focus();
    });
  }
});
