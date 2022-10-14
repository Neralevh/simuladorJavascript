import { agregarAlCarrito } from "./components/cart/accionesCarrito.js";

function plasmarProductos(productos) {
  const contenedor = document.getElementById("fila");

  productos.forEach((hardware) => {
    const div = document.createElement("div");
    div.classList.add("col-md-4");
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
              <img src="${hardware.imagen}" class="card-img-top" alt="${
      hardware.nombre
    }">
              <div class="card-body">
                <h5 class="card-title">${hardware.nombre}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Procesador: ${
                  hardware.procesador
                }</li>
                <li class="list-group-item">Tarjeta Grafica: ${
                  hardware?.tarjetaGrafica || "No lo incluye"
                }</li>
                <li class="list-group-item">Memoria Ram: ${
                  hardware.memoriaRam
                }</li>
                <li class="list-group-item">Motherboard: ${
                  hardware?.motherboard || "No lo incluye"
                }</li>
                <li class="list-group-item">Precio: $${hardware.precio}</li>
              </ul>
              <div class="card-body">
                <button type="button" class="btn btn-dark" value"${
                  hardware.id
                }">Agregar al carrito 🛒</button>
              </div>
            </div>
          </div>
  `;
    contenedor.appendChild(div);

    div.querySelector("button").addEventListener("click", () => {
      Swal.fire({
        icon: "success",
        title: "Gracias!",
        text: "Su producto ha sido agregado al carrito",
        timer: 1500,
      });
      agregarAlCarrito(hardware.id);
    });
  });
}
export { plasmarProductos };
