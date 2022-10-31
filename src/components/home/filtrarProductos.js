import { plasmarProductos } from "../../app.js";
import { productsController } from "../../controllers/productsController.js";

const inputSearch = document.getElementById("buscador");

const buscarProductos = async (productoNombre) => {
  const productos = await productsController();

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(productoNombre.toLowerCase())
  );

  plasmarProductos(productosFiltrados);
};

inputSearch.addEventListener("input", (e) => {
  buscarProductos(e.target.value);
});
