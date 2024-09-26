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

  //autoplay
  /*   autoplay: {
    delay: 5000,
  }, */

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

  const animarContadores = () => {
    for (const contador of contadores) {
      const actualizar_contador = () => {
        let cantidad_maxima = +contador.dataset.cantidadTotal,
          valor_actual = +contador.innerText,
          incremento = cantidad_maxima / velocidad;
        if (valor_actual < cantidad_maxima) {
          contador.innerText = Math.ceil(valor_actual + incremento);
          setTimeout(actualizar_contador, 200);
        } else {
          contador.innerText = cantidad_maxima;
        }
      };
      actualizar_contador();
    }
  };
  const mostrarContadores = elementos => {
    elementos.forEach(elemento => {
      if(elemento.isIntersecting){
        elemento.target.classList.add('animar')
        elemento.target.classList.remove('ocultar')
        setTimeout(animarContadores, 300)
      }
    })
  }
  const observer = new IntersectionObserver(mostrarContadores,{
    threshold:0.75 // 0 -1
  })
  const elementosHTML = document.querySelectorAll(".number__container--num");
  elementosHTML.forEach(elementoHTML  => {
    observer.observe(elementoHTML)
  })
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
