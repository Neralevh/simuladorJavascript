import { agregarAlCarrito } from "./accionesCarrito.js";
import { hardware } from "./productos.js";

function plasmarProductos() {
  const contenedor = document.getElementById("fila");

  hardware.forEach((hardware) => {
    const div = document.createElement("div");
    div.classList.add("col-md-4");
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
              <img src="${hardware.imagen}" class="card-img-top" alt="${hardware.nombre}">
              <div class="card-body">
                <h5 class="card-title">${hardware.nombre}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Procesador: ${hardware.procesador}</li>
                <li class="list-group-item">Tarjeta Grafica: ${hardware.tarjetaGrafica}</li>
                <li class="list-group-item">Memoria Ram: ${hardware.memoriaRam}</li>
                <li class="list-group-item">Motherboard: ${hardware.motherboard}</li>
                <li class="list-group-item">Precio: $${hardware.precio}</li>
              </ul>
              <div class="card-body">
                <button type="button" class="btn btn-dark">Agregar al carrito 🛒</button>
              </div>
            </div>
          </div>
  `;
    contenedor.appendChild(div);

    div.querySelector("button").addEventListener("click", () => {
      agregarAlCarrito(hardware.id);
    });
  });
}
export { plasmarProductos };
