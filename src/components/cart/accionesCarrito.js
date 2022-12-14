import { calcularTotal } from "./actualizarCarrito.js";
import { hardware } from "../../data/productos.js";

let carrito = [];

function setCarrito(carrito_) {
  carrito = carrito_;
}

function agregarAlCarrito(id) {
  let producto = hardware.find((hardware) => hardware.id === id);

  let productoEnCarrito = carrito.find((producto) => producto.id === id);

  productoEnCarrito
    ? productoEnCarrito.cantidad++
    : ((producto.cantidad = 1), carrito.push(producto));

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

    card.querySelector("button").addEventListener("click", (event) => {
      event.stopPropagation();
      if (event.target.classList.contains("btn-danger")) {
        Swal.fire({
          title: "Esta seguro?",
          text: `Va a eleminar el producto`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Eliminar",
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.isConfirmed) {
            eliminarProducto(index);
            Swal.fire("Eliminado!", "El producto ha sido eliminado", "success");
          }
        });
      }
    });

    carritoCards.appendChild(card);
  });
}

function eliminarProducto(i) {
  carrito[i].cantidad--;

  carrito[i].cantidad === 0 && carrito.splice(i, 1);

  plasmarCarrito();
  calcularTotal();
}

export { agregarAlCarrito, setCarrito, plasmarCarrito, carrito };
