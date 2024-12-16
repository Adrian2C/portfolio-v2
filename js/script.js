/*===============SWIPER TESTIMONIAL================= */
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },


  //test
  effect: "cube",
  creativeEffect: {
    flipEffect: {
      slideShadows: false,
    },
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ["100%", 0, 0],
    },
  },
  followFinger: "true",
});
/*===============NUMBER ANIMATION================= */


addEventListener("DOMContentLoaded", () => {
  const contadores = document.querySelectorAll(".number__container--num");
  const velocidad = 1000;

  // Función para animar los contadores
  const animarContadores = contador => {
    const cantidad_maxima = +contador.dataset.cantidadTotal;
    const incremento = cantidad_maxima / velocidad;

    const actualizar_contador = () => {
      const valor_actual = +contador.innerText;
      if (valor_actual < cantidad_maxima) {
        contador.innerText = Math.ceil(valor_actual + incremento);
        setTimeout(actualizar_contador, 200);
      } else {
        contador.innerText = cantidad_maxima;
      }
    };

    actualizar_contador();
  };

  // Función llamada por IntersectionObserver
  const mostrarContadores = (entradas, observer) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        const contador = entrada.target;
        contador.classList.add("animar");
        contador.classList.remove("ocultar");
        animarContadores(contador);

        // Deja de observar este elemento una vez animado
        observer.unobserve(contador);
      }
    });
  };

  // Configurar el IntersectionObserver
  const observer = new IntersectionObserver(mostrarContadores, {
    threshold: 0.75, // Porcentaje visible requerido para activar
  });

  // Seleccionar los elementos y aplicar el observador
  contadores.forEach(contador => {
    contador.classList.add("ocultar"); // Añadir clase inicial
    observer.observe(contador);
  });
});



/*===============INPUT ANIMATION================= */
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}
function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}
inputs.forEach((input) => {
  input.addEventListener(
    "focus",
    focusFunc
  ); /*hasta aca hace que al seleccionar el input para escribir, eel placeholder se suba y quede tachado */
  input.addEventListener("blur", blurFunc);
});

/* ----========Navbar ======------ */
const navbar = document.querySelector(".header");

// Escucha el evento de scroll
window.addEventListener("scroll", () => {
  const scrollDistance = window.scrollY; // Obtiene la distancia del scroll

  if (scrollDistance > 200) {
    // Si el usuario ha scrolleado más de 200px
    navbar.style.backgroundColor = "black"; // Fondo negro opaco
    navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)"; // Agrega sombra
  } else if (scrollDistance > 50) {
    // Si el scroll está entre 50px y 200px
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Negro semitransparente
    navbar.style.boxShadow = "none"; // Sin sombra
  } else {
    // Si el usuario está en la parte superior
    navbar.style.backgroundColor = "rgba(34, 34, 34, 0.54)"; // Color original
    navbar.style.boxShadow = "none"; // Sin sombra
  }
})