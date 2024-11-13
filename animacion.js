// H1
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.text-anim');

  // Ejecuta la animación inmediatamente cuando se carga la página
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('animate__fadeInUp');
      el.classList.remove('invisible');
    }, index * 75); // Controla el retraso entre los elementos para la cascada
  });
});

// FECHA
document.addEventListener('DOMContentLoaded', function () {
  // Seleccionamos los elementos con las clases escalera-1 y escalera-2
  const escaleras = document.querySelectorAll('.escalera-1, .escalera-2');

  // Creamos el IntersectionObserver
  const obs = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        // Si el elemento está en el viewport, agregamos la clase 'show'
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          // Si el elemento ya no está en el viewport, removemos la clase 'show'
          entry.target.classList.remove('show');
        }
      });
    },
    {
      threshold: 0.5, // 50% del elemento debe ser visible para activar la animación
    }
  );

  // Observamos cada uno de los elementos
  escaleras.forEach((escalera) => {
    obs.observe(escalera);
  });
});

// A LINK NAVEGACIÓN ANIMACIÓN
function scrollAndAnimate(event, sectionId) {
  event.preventDefault();

  // Selecciona la sección de destino
  const section = document.getElementById(sectionId);

  // Desplaza suavemente hacia la sección
  section.scrollIntoView({ behavior: 'smooth' });

  // Agrega la clase animate__fadeInDown y la clase de visibilidad
  section.classList.add(
    'animate__fadeInDown',
    'animate__animated',
    'opacity-100'
  );

  // Remueve la clase de animación después de un tiempo para permitir repetirla
  setTimeout(() => {
    section.classList.remove('animate__fadeInDown', 'animate__animated');
  }, 1000); // Duración de la animación en ms
}
