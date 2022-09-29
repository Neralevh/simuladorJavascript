const almacenarCarrito = (carrito) => {
  localStorage.setItem("carrito", JSON.stringify("carrito"));
};

const obtenerCarrito = () => {
  const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
  return carritoStorage;
};

export { almacenarCarrito, obtenerCarrito };
