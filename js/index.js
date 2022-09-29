import { plasmarProductos } from "./app.js";
import { plasmarCarrito } from "./accionesCarrito.js";

document.addEventListener("DOMContentLoaded", () => {
  plasmarProductos();
  if (localStorage.getItem("carrito")) {
    const carrito = JSON.parse(localStorage.getItem("carrito"));
    plasmarCarrito();
  }
});
