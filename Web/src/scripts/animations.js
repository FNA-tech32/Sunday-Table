// Esta función es el corazón de todas las animaciones del sitio
// La ejecuto cada vez que se carga una página para que todo funcione bien
function inicializarAnimaciones() {

  /* 1. MENÚ MÓVIL */
  const menuBtn = document.querySelector('.boton-menu');
  const navLinks = document.querySelector('.enlaces-nav');

  if (menuBtn && navLinks) {
    // Cuando haces click en la hamburguesa, el menú se abre o cierra
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('activo');
    });

    // Esto me pareció importante: cierro el menú cuando eliges una opción
    // Así la experiencia en móvil es mucho más fluida
    const enlaces = navLinks.querySelectorAll('a');
    enlaces.forEach(enlace => {
      enlace.addEventListener('click', () => {
        navLinks.classList.remove('activo');
      });
    });
  }

  /*2. NAVBAR DINÁMICA CON SCROLL*/
  const header = document.querySelector('.cabecera');

  if (header) {
    // Quería que el header cambiara cuando bajaras en la página
    // Añade un fondo y sombra después de 50px de scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('con-scroll');
      } else {
        header.classList.remove('con-scroll');
      }
    });
  }

  /* 3. ANIMACIÓN SCROLL CON INTERSECTION OBSERVER*/
  const observerOptions = {
    threshold: 0.15,  // Activo la animación cuando veo el 15% del elemento
    rootMargin: '0px 0px -50px 0px'  // Este margen hace que la animación empiece un poco antes
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Cuando el elemento entra en el viewport, le añado la clase 'mostrar'
      if (entry.isIntersecting) {
        entry.target.classList.add('mostrar');
      }
    });
  }, observerOptions);

  const elementosOcultos = document.querySelectorAll('.oculto');

  // hHago que las tarjetas aparezcan en cascada
  // En vez de aparecer todas a la vez, van saliendo una tras otra
  elementosOcultos.forEach((el, index) => {
    if (el.classList.contains('tarjeta-producto')) {
      // El truco está en calcular un delay diferente para cada tarjeta
      // Uso módulo 4 porque tengo 4 columnas, así cada fila empieza al mismo tiempo
      const delay = (index % 4) * 0.15;
      el.style.transitionDelay = `${delay}s`;
    }
    observer.observe(el);
  });

  /* 4. PARALLAX SUAVE (Efecto simple)*/
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.contenido-principal');

    // Este efecto parallax es sutil pero queda muy bien
    // Muevo el contenido del hero más despacio que el scroll para dar profundidad
    parallaxElements.forEach(el => {
      const speed = 0.5;
      el.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// Ejecutar en la carga inicial
document.addEventListener('DOMContentLoaded', inicializarAnimaciones);

// Ejecutar en cada transición de página de Astro
document.addEventListener('astro:page-load', inicializarAnimaciones);