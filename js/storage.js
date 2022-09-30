const almacenarCarrito = (carrito) => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

const obtenerCarrito = () => {
  return JSON.parse(localStorage.getItem("carrito"));
};

export { almacenarCarrito, obtenerCarrito };
