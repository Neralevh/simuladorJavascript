import { plasmarProductos } from "./app.js";
import {
  plasmarCarrito,
  carrito,
  setCarrito,
} from "./components/cart/accionesCarrito.js";
import { obtenerCarrito } from "./components/storage/storage.js";
import { calcularTotal } from "./components/cart/actualizarCarrito.js";
import { productsController } from "./controllers/productsController.js";

document.addEventListener("DOMContentLoaded", async () => {
  const producto = await productsController();
  plasmarProductos(producto);

  localStorage.getItem("carrito") != null &&
    (setCarrito(obtenerCarrito()), plasmarCarrito(carrito), calcularTotal());
});
