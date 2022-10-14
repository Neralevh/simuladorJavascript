import { carrito } from "./accionesCarrito.js";
import { almacenarCarrito } from "../storage/storage.js";

function calcularTotal() {
  let total = 0;
  carrito.forEach((ele) => {
    total += ele.precio * ele.cantidad;
  });

  const precioFinal = document.getElementById("totalCarrito");
  precioFinal.innerHTML = `
<h5 class="card-title">$ ${total}</h5>`;

  const cantidadFinal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  mostrarCantidadesCarrito(cantidadFinal);
  almacenarCarrito(carrito);
}

const mostrarCantidadesCarrito = (cantidadFinal) => {
  const contadorCarrito = document.getElementById("contador-carrito");
  contadorCarrito.innerText = cantidadFinal;
};

export { calcularTotal };
