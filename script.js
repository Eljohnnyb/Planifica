// Obtener elementos del DOM (HTML)
const inputRutina = document.getElementById('nombreRutina');
const panelRutinas = document.getElementById('panelRutinas');

// Función principal para agregar una rutina
function agregarRutina() {
    const texto = inputRutina.value.trim(); // Quita espacios en blanco

    // Validación: si el campo está vacío, avisar
    if (texto === '') {
        alert("Por favor escribe una rutina antes de agregar.");
        return;
    }

    // Crear un nuevo div para la rutina
    const rutina = document.createElement('div');
    rutina.classList.add('event-item');

    // Contenido HTML interno de la tarjeta
    rutina.innerHTML = `
        <p>${texto}</p>
        <button class="eliminar-btn">Eliminar</button>
    `;

    // Agregar funcionalidad al botón "Eliminar"
    rutina.querySelector('.eliminar-btn').addEventListener('click', () => {
        rutina.remove();
    });

    // Agregar la rutina al contenedor principal
    panelRutinas.appendChild(rutina);

    // Limpiar el input después de agregar
    inputRutina.value = '';
    inputRutina.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarRutina();
        }
    });
}
