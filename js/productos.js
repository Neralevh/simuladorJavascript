// CODIGO DEL PROGRAMA ANTERIOR
// class Producto {
//   constructor(categoria, nombre, precio) {
//     this.categoria = categoria;
//     this.nombre = nombre;
//     this.precio = parseFloat(precio);
//   }
// }

// const producto1 = new Producto("Armados", "CPU Gama Baja", 96999);
// const producto2 = new Producto("Armados", "CPU Gama Media", 99999);
// const producto3 = new Producto("Armados", "CPU Gama Alta", 402999);
// const producto4 = new Producto("Combos", "Combo 1", 44999);
// const producto5 = new Producto("Combos", "Combo 2", 69999);
// const producto6 = new Producto("Combos", "Combo 3", 121999);

// const productos = [
//   producto1,
//   producto2,
//   producto3,
//   producto4,
//   producto5,
//   producto6,
// ];

const hardware = [
  {
    id: 1,
    categoria: "Armados",
    nombre: "Cpu Gama Baja",
    precio: "96999",
    procesador: "AMD Ryzen 3 4100",
    memoriaRam: "8GB",
    tarjetaGrafica: "RX 550 4Gb",
    motherboard: "No incluye",
    imagen: "./images/armados1.png",
  },
  {
    id: 2,
    categoria: "Armados",
    nombre: "Cpu Gama Media",
    precio: "99999",
    procesador: "AMD Ryzen 5 5600",
    memoriaRam: "8GB",
    tarjetaGrafica: "RTX 3050 8Gb",
    motherboard: "No incluye",
    imagen: "./images/armados2.png",
  },
  {
    id: 3,
    categoria: "Armados",
    nombre: "Cpu Gama Alta",
    precio: "402999",
    procesador: "AMD Ryzen 7 5700X",
    memoriaRam: "16GB (2x8GB)",
    tarjetaGrafica: "RTX 3080 12Gb",
    motherboard: "No incluye",
    imagen: "./images/armados3.png",
  },
  {
    id: 4,
    categoria: "Combos",
    nombre: "Combo 1",
    precio: "44999",
    procesador: "AMD Ryzen 3 4100",
    memoriaRam: "8Gb DDR4 3200Mhz",
    tarjetaGrafica: "No incluye",
    motherboard: "Asus A320",
    imagen: "./images/combo1.png",
  },
  {
    id: 5,
    categoria: "Combos",
    nombre: "Combo 2",
    precio: "69999",
    procesador: "AMD Ryzen 5 5600G",
    memoriaRam: "8GB (2x4GB)",
    tarjetaGrafica: "No incluye",
    motherboard: "Asus A320",
    imagen: "./images/combo2.png",
  },
  {
    id: 6,
    categoria: "Combos",
    nombre: "Combo 3",
    precio: "121999",
    procesador: "AMD Ryzen 7 5700X",
    memoriaRam: "16Gb (2x8GB) 3200Mhz",
    tarjetaGrafica: "No incluye",
    motherboard: "Asus B450 + Cooler",
    imagen: "./images/combo3.png",
  },
];
