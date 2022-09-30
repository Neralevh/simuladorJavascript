import { plasmarProductos } from "./app.js";
import { plasmarCarrito, carrito, setCarrito } from "./accionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { calcularTotal } from "./actualizarCarrito.js";

document.addEventListener("DOMContentLoaded", () => {
  plasmarProductos();

  if (localStorage.getItem("carrito") != null) {
    setCarrito(obtenerCarrito());
    plasmarCarrito(carrito);
    calcularTotal();
  }
});
