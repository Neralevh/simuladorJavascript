class Producto {
  constructor(categoria, nombre, precio) {
    this.categoria = categoria;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
  }
}

const producto1 = new Producto("Armados", "CPU Gama Baja", 96999);
const producto2 = new Producto("Armados", "CPU Gama Media", 99999);
const producto3 = new Producto("Armados", "CPU Gama Alta", 402999);
const producto4 = new Producto("Combos", "Combo 1", 44999);
const producto5 = new Producto("Combos", "Combo 2", 69999);
const producto6 = new Producto("Combos", "Combo 3", 121999);

const productos = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
];

const hardware = [
  {
    categoria: "Armados",
    procesador: "AMD Ryzen 3 4100",
    memoriaRam: "8GB",
    tarjetaGrafica: "RX 550 4Gb",
    motherboard: "No incluye",
  },
  {
    categoria: "Armados",
    procesador: "AMD Ryzen 5 5600",
    memoriaRam: "8GB",
    tarjetaGrafica: "RTX 3050 8Gb",
    motherboard: "No incluye",
  },
  {
    categoria: "Armados",
    procesador: "AMD Ryzen 7 5700X",
    memoriaRam: "16GB (2x8GB)",
    tarjetaGrafica: "RTX 3080 12Gb",
    motherboard: "No incluye",
  },
  {
    categoria: "Combos",
    procesador: "AMD Ryzen 3 4100",
    memoriaRam: "8Gb DDR4 3200Mhz",
    tarjetaGrafica: "No incluye",
    motherboard: "Asus A320",
  },
  {
    categoria: "Combos",
    procesador: "AMD Ryzen 5 5600G",
    memoriaRam: "8GB (2x4GB)",
    tarjetaGrafica: "No incluye",
    motherboard: "Asus A320",
  },
  {
    categoria: "Combos",
    procesador: "MD Ryzen 7 5700X",
    memoriaRam: "16Gb (2x8GB) 3200Mhz",
    tarjetaGrafica: "No incluye",
    motherboard: "Asus B450",
  },
];
