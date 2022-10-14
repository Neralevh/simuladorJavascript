const productsController = async () => {
  try {
    const response = await fetch("./src/data/productos.json");
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Ooops, algo fallo", error);
  }
};

export { productsController };
