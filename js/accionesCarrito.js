import { calcularTotal } from "./actualizarCarrito.js";
import { hardware } from "./productos.js";

let carrito = [];

function setCarrito(carrito_) {
  carrito = carrito_;
}

function agregarAlCarrito(id) {
  let producto = hardware.find((hardware) => hardware.id === id);

  let productoEnCarrito = carrito.find((producto) => producto.id === id);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    producto.cantidad = 1;

    carrito.push(producto);
  }
  plasmarCarrito();
  calcularTotal();
}

function plasmarCarrito() {
  let carritoCards = document.querySelector("#modalCarrito");

  carritoCards.innerHTML = "";

  carrito.forEach((ele, index) => {
    let card = document.createElement("div");
    card.classList.add("col-12");
    card.classList.add("col-md-4");
    card.classList.add("mb-5");
    card.classList.add("d-flex");
    card.classList.add("justify-content-center");
    card.innerHTML = `

    <div class="card" style="width: 18rem;">
              <img src="${ele.imagen}" class="card-img-top" alt="${ele.nombre}">
              <div class="card-body">
                <h5 class="card-title">${ele.nombre}</h5>
                <p class="card-title">$${ele.precio}</p>
                <p class="card-title">Cantidad: ${ele.cantidad}</p>
                <button type="button" class="btn btn-danger">Eliminar</button>
                </div>

            </div>
          </div>
  `;

    card.querySelector("button").addEventListener("click", () => {
      eliminarProducto(index);
    });

    carritoCards.appendChild(card);
  });
}

function eliminarProducto(i) {
  carrito[i].cantidad--;

  if (carrito[i].cantidad === 0) {
    carrito.splice(i, 1);
  }

  plasmarCarrito();
  calcularTotal();
}

export { agregarAlCarrito, setCarrito, plasmarCarrito, carrito };
