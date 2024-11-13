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
// function scrollAndAnimate(event, sectionId) {
//   event.preventDefault();

//   const section = document.getElementById(sectionId);
//   section.scrollIntoView({ behavior: 'smooth' });

//   event.currentTarget.classList.add('animate__slideInDown');

//   setTimeout(() => {
//     event.currentTarget.classList.remove('animate__slideInDown');
//   }, 1000);
// }

function scrollAndAnimate(event, sectionId) {
  event.preventDefault();

  const section = document.getElementById(sectionId);
  const link = event.currentTarget;

  // Desplaza suavemente a la sección
  section.scrollIntoView({ behavior: 'smooth' });

  // Agrega la clase animate__slideInDown solo cuando se hace clic
  link.classList.add('animate__slideInDown');

  // Remueve la clase animate__slideInDown después de la duración de la animación (1s)
  setTimeout(() => {
    link.classList.remove('animate__slideInDown');
  }, 1000); // Duración en milisegundos
}

// BUTTON SHAKE

const shakeButton = document.getElementById('shakeButton');

setInterval(() => {
  // Agregar la animación
  shakeButton.classList.add('animate__shakeY');

  // Remover la animación después de 1 segundo (duración de animate__shakeY)
  setTimeout(() => {
    shakeButton.classList.remove('animate__shakeY');
  }, 1000); // Ajusta el tiempo si has personalizado la duración de la animación
}, 10000); // 10000 ms = 10 segundos

// COPIADO PORTAPAPELES

function copiarAlPortapapeles() {
  const input = document.getElementById('aliasInput');
  navigator.clipboard
    .writeText(input.value) // Copia al portapapeles
    .then(() => {
      alert('¡Alias/CVU copiado al portapapeles!');
    })
    .catch((err) => {
      console.error('Error al copiar:', err);
      alert('Hubo un problema al copiar el texto.');
    });
}

// NOTIFICACION COPIADO EN PORTAPAPELES

function copiarAlPortapapeles() {
  const input = document.getElementById('aliasInput');
  navigator.clipboard
    .writeText(input.value)
    .then(() => {
      mostrarNotificacion();
    })
    .catch((err) => {
      console.error('Error al copiar:', err);
    });
}

function mostrarNotificacion() {
  const notification = document.getElementById('notification');
  notification.classList.remove('hidden'); // Muestra la notificación
  setTimeout(() => {
    notification.classList.add('hidden'); // Oculta la notificación después de 3 segundos
  }, 3000);
}

// CONFIRMACION POR WHATSAPP

// document.getElementById('sendBtn').addEventListener('click', function () {
//   const name = document.getElementById('nameInput').value.trim();

//   if (name === '') {
//     alert('Por favor, ingresa un nombre');
//     return;
//   }

//   const phoneNumber = '1562303847'; // Reemplaza con el número de WhatsApp al que quieres enviar el mensaje
//   const message = `¡Hola vicky! soy ${name}. Te confirmo que voy a asistir a tu fiesta.`;

//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//     message
//   )}`;

//   window.open(whatsappUrl, '_blank');
// });

//

// document.getElementById('sendBtn').addEventListener('click', function () {
//   const name = document.getElementById('nameInput').value.trim();

//   if (name === '') {
//     alert('Por favor, ingresa un nombre');
//     return;
//   }

//   // Número de teléfono de destino (asegúrate de que sea en formato internacional)
//   const phoneNumber = '5491162303847'; // Cambia esto al número al que deseas enviar el mensaje

//   // Mensaje predefinido que incluye el nombre del usuario
//   const message = `¡Hola vicky! soy ${name}. Te confirmo que voy a asistir a tu fiesta.`;

//   // Codificar el mensaje para la URL
//   const encodedMessage = encodeURIComponent(message);

//   // Construir la URL de WhatsApp
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

//   // Usar un pequeño retraso antes de redirigir
//   setTimeout(function () {
//     window.location.href = whatsappUrl; // Redirigir directamente a WhatsApp
//   }, 500); // Esperar medio segundo antes de redirigir
// });

//

document.getElementById('sendBtn').addEventListener('click', function (event) {
  event.preventDefault(); // Evita que el enlace se ejecute inmediatamente

  const name = document.getElementById('nameInput').value.trim();

  if (name === '') {
    alert('Por favor, ingresa un nombre');
    return;
  }

  // Número de teléfono de destino (en formato internacional, sin +)
  const phoneNumber = '5491162303847'; // Cambia esto al número de WhatsApp al que deseas enviar el mensaje

  // Mensaje predefinido que incluye el nombre del usuario
  const message = `¡Hola vicky! soy ${name}. Te confirmo que voy a asistir a tu fiesta.`;

  // Codificar el mensaje para la URL
  const encodedMessage = encodeURIComponent(message);

  // Construir la URL de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Asignar la URL al atributo href del enlace
  // document.getElementById('sendBtn').setAttribute('href', whatsappUrl);

  console.log(whatsappUrl);

  // Open WhatsApp with the message
  window.open(whatsappUrl, '_blank');
});

// function sendMessage() {
//   const name = document.getElementById('nameInput').value.trim();
//   const phoneNumber = '5491162303847'; // El número de WhatsApp
//   const message = `¡Hola vicky! soy ${name}. Te confirmo que voy a asistir a tu fiesta.`; // Si no hay nombre, mensaje por defecto
//   const encodedMessage = encodeURIComponent(message);

//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

//   // Usar window.open en lugar de un enlace directo
//   window.open(whatsappUrl, '_blank');
// }

// function sendMessage() {
//   const name = document.getElementById('nameInput').value.trim(); // Obtiene el nombre del input
//   const phoneNumber = '5491150893047'; // Número de WhatsApp al que enviar
//   const message = name ? `Hi ${name}!` : 'Hi there!'; // Si el nombre está vacío, se manda un mensaje genérico
//   const encodedMessage = encodeURIComponent(message); // Codifica el mensaje para la URL

//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`; // Genera la URL de WhatsApp

//   // Usamos window.open() para abrir WhatsApp en una nueva ventana
//   window.open(whatsappUrl, '_blank'); // Esto abre WhatsApp sin cerrar la ventana actual
// }

// function sendMessage(event) {
//   // Prevenir el comportamiento predeterminado del botón (evitar recarga de página)
//   event.preventDefault();

//   // Obtener el valor del input
//   const name = document.getElementById('nameInput').value.trim();
//   const phoneNumber = '5491150893047'; // Número de WhatsApp
//   const message = name ? `Hi ${name}!` : 'Hi there!'; // Mensaje con nombre o genérico
//   const encodedMessage = encodeURIComponent(message); // Codificar el mensaje

//   // Crear la URL de WhatsApp con el mensaje predefinido
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

//   // Abrir WhatsApp en una nueva ventana o pestaña
//   window.open(whatsappUrl, '_blank');
// }

//
//
//

// document.getElementById('sendBtn').addEventListener('click', function () {
//   const name = document.getElementById('nameInput').value.trim();

//   if (name === '') {
//     alert('Por favor, ingresa un nombre');
//     return;
//   }

//   // Número de teléfono de destino (asegúrate de que sea en formato internacional)
//   const phoneNumber = '5491162303847'; // Cambia esto al número al que deseas enviar el mensaje

//   // Mensaje predefinido que incluye el nombre del usuario
//   const message = `¡Hola vicky! soy ${name}. Te confirmo que voy a asistir a tu fiesta.`;

//   // Codificar el mensaje para la URL
//   const encodedMessage = encodeURIComponent(message);

//   // Construir la URL de WhatsApp
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

//   // Usar un pequeño retraso antes de redirigir
//   setTimeout(function () {
//     window.location.href = whatsappUrl; // Redirigir directamente a WhatsApp
//   }, 500); // Esperar medio segundo antes de redirigir
// });
