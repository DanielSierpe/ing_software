let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle("activar")
}

document.querySelector("#acceder-btn").onclick = () => {
  document.querySelector(".acceder-form-container").classList.toggle("activar");
}

document.querySelector("#close-acceder-form").onclick = () => {
  document.querySelector(".acceder-form-container").classList.remove("activar");
}

window.onscroll = () => {
  if(window.scrollY > 0){
    document.querySelector(".site-header").classList.add("activar")
  }else document.querySelector(".site-header").classList.remove("activar")

  navbar.classList.remove("activar")
}

window.onload = () => {
  if(window.scrollY > 0){
    document.querySelector(".site-header").classList.add("activar")
  }else document.querySelector(".site-header").classList.remove("activar")

}

const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active")
})

var swiper = new Swiper(".vehiculo-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".modelos-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".opiniones-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
//--------------------------------------VARIABLES------------------------------------
const carrito = document.getElementById('carrito');
const modelos = document.getElementById('modelos');
const listaProducto = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

//--------------------------------------LISTENER------------------------------------
cargarEventListener();

function cargarEventListener() {
    
  modelos.addEventListener('click', comprarModelos);
    carrito.addEventListener('click', eliminarModelos);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}

//--------------------------------------FUNCIONES------------------------------------

//añadir el producto
function comprarModelos(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const modelos = e.target.parentElement.parentElement;
        // almacenar en leerDatosProducto
        leerDatosModelos(modelos);
    }
}

//leer los datos del prodcuto
function leerDatosModelos(modelos) {
    const infoModelos = {
        imagen: modelos.querySelector('.imagen_producto img').src,
        titulo: modelos.querySelector('.nombre_producto').textContent,
        precio: modelos.querySelector('.precio').textContent,
        id: Modelos.querySelector('a').getAttribute('data-id')
        }
    insertarCarrito(infoModelos);
}

//insertar producto en el carrito mediante una fila
function insertarCarrito(modelos) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
        <img src="${modelos.imagen}" width="100">
        </td>
        <td>${modelos.titulo}</td>
        <td> ${modelos.precio}</td>
        <td>
        <a href="#" class="borrar-producto" data-id"${modelos.id}">x</a>
        </td>
    `;
    listaModelos.appendChild(row);
    guardarModelosLocalStorage(modelos);
}

// eliminar productos
function eliminarModelos(e) {
    e.preventDefault();
    let modelos, modelosID;
    if (e.target.classList.contains('borrar-producto')) {
        e.target.parentElement.parentElement.remove();
        modelos = e.target.parentElement.parentElement;
        modelosID = modelos.querySelector('a').getAttribute('data-id');
    }
    eliminarModelosLocalStorage(modelosID);

}

// eliminar usando boton vaciar carrito
function vaciarCarrito() {
    while (listaModelos.firstChild) {
        listaModelos.removeChild(listaModelos.firstChild);
    }
    vaciarLocalStorage();
    return false;
}