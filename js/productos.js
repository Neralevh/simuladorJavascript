const hardware = [
  {
    id: 1,
    categoria: "Armados",
    nombre: "Cpu Gama Baja",
    precio: "96999",
    procesador: "AMD Ryzen 3 4100",
    memoriaRam: "8GB",
    tarjetaGrafica: "RX 550 4Gb",
    imagen: "./public/images/armados1.png",
    cantidad: "1",
  },
  {
    id: 2,
    categoria: "Armados",
    nombre: "Cpu Gama Media",
    precio: "99999",
    procesador: "AMD Ryzen 5 5600",
    memoriaRam: "8GB",
    tarjetaGrafica: "RTX 3050 8Gb",
    imagen: "./public/images/armados2.png",
    cantidad: "1",
  },
  {
    id: 3,
    categoria: "Armados",
    nombre: "Cpu Gama Alta",
    precio: "402999",
    procesador: "AMD Ryzen 7 5700X",
    memoriaRam: "16GB (2x8GB)",
    tarjetaGrafica: "RTX 3080 12Gb",
    imagen: "./public/images/armados3.png",
    cantidad: "1",
  },
  {
    id: 4,
    categoria: "Combos",
    nombre: "Combo 1",
    precio: "44999",
    procesador: "AMD Ryzen 3 4100",
    memoriaRam: "8Gb DDR4 3200Mhz",
    motherboard: "Asus A320",
    imagen: "./public/images/combo1.png",
    cantidad: "1",
  },
  {
    id: 5,
    categoria: "Combos",
    nombre: "Combo 2",
    precio: "69999",
    procesador: "AMD Ryzen 5 5600G",
    memoriaRam: "8GB (2x4GB)",
    motherboard: "Asus A320",
    imagen: "./public/images/combo2.png",
    cantidad: "1",
  },
  {
    id: 6,
    categoria: "Combos",
    nombre: "Combo 3",
    precio: "121999",
    procesador: "AMD Ryzen 7 5700X",
    memoriaRam: "16Gb (2x8GB) 3200Mhz",
    motherboard: "Asus B450 + Cooler",
    imagen: "./public/images/combo3.png",
    cantidad: "1",
  },
];

const [
  { nombre },
  { procesador },
  { tarjetaGrafica },
  { precio },
  { memoriaRam },
  { categoria },
] = hardware;

console.log(nombre, procesador, tarjetaGrafica, precio, memoriaRam, categoria);

const adicionHardware = [
  {
    id: 0,
    categoria: "Armados",
    nombre: "Cpu Oficina",
    precio: "70000",
    procesador: "AMD Ryzen 3 4100",
    memoriaRam: "8GB",
    motherboard: "MSI A320M-A PRO MAX AM4",
    tarjetaGrafica: "GeForce GT 710 2GB",
    imagen: "./public/images/armados0.png",
    cantidad: "1",
  },
];

hardware.push(...adicionHardware);
console.log(hardware);
export { hardware };
