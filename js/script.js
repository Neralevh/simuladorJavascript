let savedPIN = "1996";
let ingresar = false;
alert("Bienvenido/a a H4rd Solutions");
let userName = prompt("Ingrese su usuario");

function saludar(userName) {
  alert(`Hola de nuevo ${userName}`);
}

function pasarOperacion(op) {
  if (op == "sumar") {
    return (a, b) => a + b;
  } else if (op == "restar") {
    return (a, b) => a - b;
  }
}

let suma = pasarOperacion("sumar");
let resta = pasarOperacion("restar");

class Producto {
  constructor(categoria, nombre, precio) {
    this.categoria = categoria;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
  }
}

function checkUser() {
  for (let i = 2; i >= 0; i--) {
    let userPIN = prompt(`Ingrese su clave. Tiene ${i + 1} intentos.`);
    if (userPIN === savedPIN) {
      saludar(userName);
      ingresar = true;
      break;
    } else {
      alert(`Error, te quedan ${i} intentos`);
    }
  }
}

if (ingresar) {
  let saldo = 0;
  const carritoItems = [];
  const preciosCarrito = [];

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

  alert(`Usted tiene $${saldo} en su cuenta`);

  let opcion = prompt(
    `/////////////////////////MENU/////////////////////////
    \n¿Que desea hoy?:
    \n1- Cuenta.
    \n2- Equipos Armados.
    \n3- Combos Actualizacion.
    \n4- Carrito.
    \nPresioná X para finalizar.`
  );

  while (opcion != "X" && opcion != "x") {
    switch (opcion) {
      case "1":
        let cuenta = prompt(
          `/////////////////////////CUENTA/////////////////////////
          \nElegí una opción:
          \n1- Saldo.
          \n2- Ingresar dinero.
          \nPresioná X para salir.`
        );
        while (cuenta != "X" && cuenta != "x") {
          switch (cuenta) {
            case "1":
              alert(`Hola ${userName} tu saldo es de $${saldo}`);
              break;
            case "2":
              let deposito = parseInt(prompt("Ingresa monto a depositar"));
              saldo = suma(saldo, deposito);
              alert(`Su nuevo saldo es \n$ ${saldo}`);
              break;
            default:
              alert("Elegiste una opción inválida.");
              break;
          }
          cuenta = prompt(
            `/////////////////////////CUENTA/////////////////////////
            \nElegí una opción:
            \n1- Saldo.
            \n2- Ingresar dinero.
            \nPresioná X para salir.`
          );
        }
        break;
      case "2":
        alert(`Estas en ${producto1["categoria"]}`);
        let armados = prompt(
          `/////////////////////////EQUIPOS ARMADOS/////////////////////////
          \nElija entre alguna de estas opciones
          \n1- Gama baja:
          \nAMD Ryzen 3 4100 + 8GB + RX 550 4Gb: $96999
          \n2- Gama media:
          \nAMD Ryzen 5 5600 + 8GB + RTX 3050 8Gb: $99999
          \n3- Gama Alta:
          \nAMD Ryzen 7 5700X + 16GB (2x8GB) + RTX 3080 12Gb + 500GB NVME: $402999
          \nPresioná X para salir.`
        );
        while (armados != "X" && armados != "x") {
          switch (armados) {
            case "1":
              if (saldo >= producto1["precio"]) {
                carritoItems.push(hardware[0]);
                preciosCarrito.push(producto1.precio);
                alert(`Se ha agregado ${producto1["nombre"]} a su carrito`);
              } else {
                alert(
                  "Usted no posee saldo suficiente para agregar a su carro"
                );
              }

              break;
            case "2":
              if (saldo >= producto2["precio"]) {
                carritoItems.push(hardware[1]);
                preciosCarrito.push(producto2.precio);
                alert(`Se ha agregado ${producto2["nombre"]} a su carrito`);
              } else {
                alert(
                  "Usted no posee saldo suficiente para agregar a su carro"
                );
              }

              break;
            case "3":
              if (saldo >= producto3["precio"]) {
                carritoItems.push(hardware[2]);
                preciosCarrito.push(producto3.precio);
                alert(`Se ha agregado ${producto3["nombre"]} a su carrito`);
              } else {
                alert(
                  "Usted no posee saldo suficiente para agregar a su carro"
                );
              }

              break;
            default:
              alert("Elegiste una opción inválida.");
              break;
          }
          armados = prompt(
            `/////////////////////////EQUIPOS ARMADOS/////////////////////////
            \nElija entre alguna de estas opciones
            \n1- Gama baja:
            \nAMD Ryzen 3 4100 + 8GB + RX 550 4Gb: $96999
            \n2- Gama media:
            \nAMD Ryzen 5 5600 + 8GB + RTX 3050 8Gb: $99999
            \n3- Gama Alta:
            \nAMD Ryzen 7 5700X + 16GB (2x8GB) + RTX 3080 12Gb + 500GB NVME: $402999
            \nPresioná X para salir.`
          );
        }
        break;
      case "3":
        alert(`Estas en ${producto4["categoria"]}`);
        let combos = prompt(
          `/////////////////////////COMBOS/////////////////////////
          \nElija entre alguna de estas opciones
          \nCombo1:
          \nAMD Ryzen 3 4100 + Asus A320 + 8Gb DDR4 3200Mhz: $44999
          \nCombo2:
          \nAMD Ryzen 5 5600G + Asus A320 + 8GB (2x4GB): $69999
          \nCombo3:
          \nAMD Ryzen 7 5700X + ASUS B450 + 16Gb (2x8GB) 3200Mhz + Fan: $121999
          \nPresioná X para salir.`
        );
        while (combos != "X" && combos != "x") {
          switch (combos) {
            case "1":
              if (saldo >= producto4["precio"]) {
                carritoItems.push(hardware[3]);
                preciosCarrito.push(producto4.precio);
                alert(`Se ha agregado ${producto4["nombre"]} a su carrito`);
              } else {
                alert(
                  "Usted no posee saldo suficiente para agregar a su carro"
                );
              }

              break;
            case "2":
              if (saldo >= producto5["precio"]) {
                carritoItems.push(hardware[4]);
                preciosCarrito.push(producto5.precio);
                alert(`Se ha agregado ${producto5["nombre"]} a su carrito`);
              } else {
                alert(
                  "Usted no posee saldo suficiente para agregar a su carro"
                );
              }

              break;
            case "3":
              if (saldo >= producto6["precio"]) {
                carritoItems.push(hardware[5]);
                preciosCarrito.push(producto6.precio);
                alert(`Se ha agregado ${producto6["nombre"]} a su carrito`);
              } else {
                alert(
                  "Usted no posee saldo suficiente para agregar a su carro"
                );
              }

              break;
            default:
              alert("Elegiste una opción inválida.");
              break;
          }
          combos = prompt(
            `/////////////////////////COMBOS/////////////////////////
          \nElija entre alguna de estas opciones
          \nCombo1:
          \nAMD Ryzen 3 4100 + Asus A320 + 8Gb DDR4 3200Mhz: $44999
          \nCombo2:
          \nAMD Ryzen 5 5600G + Asus A320 + 8GB (2x4GB): $69999
          \nCombo3:
          \nAMD Ryzen 7 5700X + ASUS B450 + 16Gb (2x8GB) 3200Mhz + Fan: $121999
          \nPresioná X para salir.`
          );
        }
        break;
      case "4":
        let carritoTotal = preciosCarrito.reduce(
          (acumulador, elemento) => acumulador + elemento,
          0
        );
        for (const partes of carritoItems) {
          alert(`Usted tiene en su carrito:
          ${partes.categoria.toUpperCase()}
          Procesador:${partes.procesador}
          RAM:${partes.memoriaRam}
          Gráfica:${partes.tarjetaGrafica}
          Motherboard: ${partes.motherboard}`);
        }

        let carrito = prompt(
          `/////////////////////////CARRITO/////////////////////////
          \nSu carrito tiene un coste total de $${carritoTotal}
          \n¿Que desea hacer?
          \n1- Comprar.
          \n2- Eliminar Carrito
          \nPresioná X para salir.`
        );
        while (carrito != "X" && carrito != "x") {
          switch (carrito) {
            case "1":
              if (carritoTotal == "") {
                alert("No puede realizar la compra si el carrito esta vacio");
                break;
              }
              if (saldo >= carritoTotal) {
                saldo = resta(saldo, carritoTotal);
                carritoItems.length = 0;
                preciosCarrito.splice(0, preciosCarrito.length);
                carritoTotal = 0;
                alert(
                  `Muchas gracias por su compra, su saldo restante es: $${saldo}. ¡Hasta la proxima!`
                );
              } else
                alert(
                  "Usted no posee saldo suficiente para realizar esta compra."
                );

              break;
            case "2":
              if (carritoItems != "") {
                carritoItems.length = 0;
                preciosCarrito.splice(0, preciosCarrito.length);
                carritoTotal = 0;
                alert("Su carrito ha sido vaciado");
              } else {
                alert("No se puede eliminar un carrito vacio");
              }
              break;
            default:
              alert("Elegiste una opción inválida.");
              break;
          }
          carrito = prompt(
            `/////////////////////////CARRITO/////////////////////////
          \nSu carrito tiene un coste total de $${carritoTotal}
          \n¿Que desea hacer?
          \n1- Comprar.
          \n2- Eliminar Carrito
          \nPresioná X para salir.`
          );
        }
        break;
      default:
        alert("Elegiste una opción inválida.");
        break;
    }
    opcion = prompt(
      `¿Que desea hoy?:
      \n1- Cuenta.
      \n2- Equipos Armados.
      \n3- Combos Actualizacion.
      \n4- Carrito.
      \nPresioná X para finalizar.`
    );
  }
} else {
  alert("Intente otra vez, hasta pronto");
}
alert("Muchas gracias por su visita");
