const foco1 = document.getElementById('foco1-el');
const foco2 = document.getElementById('foco2-el');
const foco3 = document.getElementById('foco3-el');
const foco4 = document.getElementById('foco4-el');
const foco5 = document.getElementById('foco5-el');
const foco6 = document.getElementById('foco6-el');

// Función para mover los focos de forma aleatoria dentro de la pantalla
function moverFoco(foco, velocidad) {
  // Inicializa las posiciones aleatorias
  let posX = Math.random() * (window.innerWidth - foco.offsetWidth);
  let posY = Math.random() * (window.innerHeight - foco.offsetHeight);

  // Posiciona el foco en su ubicación inicial
  foco.style.left = `${posX}px`;
  foco.style.top = `${posY}px`;

  // Movimiento suave y aleatorio
  function movimiento() {
    // Movimiento aleatorio en ambas direcciones (X, Y)
    posX += (Math.random() - 0.5) * velocidad;
    posY += (Math.random() - 0.5) * velocidad;

    posX = Math.max(0, Math.min(window.innerWidth - foco.offsetWidth, posX));
    posY = Math.max(0, Math.min(window.innerHeight - foco.offsetHeight, posY));

    foco.style.transition = 'left 1s ease-out, top 1s ease-out'; // Aquí se aplica la transición

    foco.style.left = `${posX}px`;
    foco.style.top = `${posY}px`;

    requestAnimationFrame(movimiento);
  }

  // Inicia el movimiento
  movimiento();
}

// Llama a la función de movimiento
moverFoco(foco1, 5);
moverFoco(foco2, 6);
moverFoco(foco3, 10);
