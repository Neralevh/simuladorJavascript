let savedPIN = "1996";
alert("Bienvenido/a a H4rd Solutions");
let userName = "";
let saldo = 0;
const carritoItems = [];
const preciosCarrito = [];

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

function checkUser() {
  userName = prompt("Ingrese su usuario");
  for (let i = 2; i >= 0; i--) {
    let userPIN = prompt(`Ingrese su clave. Tiene ${i + 1} intentos.`);
    if (userPIN === savedPIN) {
      saludar(userName);
      return true;
      break;
    } else {
      alert(`Error, te quedan ${i} intentos`);
    }
  }
  return false;
}

function mostrarMenu() {
  let opcion = prompt(
    `/////////////////////////MENU/////////////////////////
    \n¿Que desea hoy?:
    \n1- Cuenta.
    \n2- Equipos Armados.
    \n3- Combos Actualizacion.
    \n4- Carrito.
    \nPresioná X para finalizar.`
  );
  return opcion;
}

function manejarCuenta() {
  function gestionarCuenta() {
    let cuenta = prompt(
      `/////////////////////////CUENTA/////////////////////////
          \nElegí una opción:
          \n1- Saldo.
          \n2- Ingresar dinero.
          \nPresioná X para salir.`
    );
    return cuenta;
  }
  cuenta = gestionarCuenta();
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
    cuenta = gestionarCuenta();
  }
}

function seleccionarEquiposArmados() {
  alert(`Estas en ${producto1["categoria"]}`);
  function mostrarArmados() {
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
    return armados;
  }
  armados = mostrarArmados();
  while (armados != "X" && armados != "x") {
    let productoSeleccionado = null;
    let hardwareSeleccionado = null;
    switch (armados) {
      case "1":
        productoSeleccionado = producto1;
        hardwareSeleccionado = hardware[0];
        break;
      case "2":
        productoSeleccionado = producto2;
        hardwareSeleccionado = hardware[1];
        break;
      case "3":
        productoSeleccionado = producto3;
        hardwareSeleccionado = hardware[2];
        break;
      default:
        alert("Elegiste una opción inválida.");
        break;
    }
    if (productoSeleccionado != null) {
      if (saldo >= productoSeleccionado["precio"]) {
        carritoItems.push(hardwareSeleccionado);
        preciosCarrito.push(productoSeleccionado.precio);
        alert(`Se ha agregado ${productoSeleccionado["nombre"]} a su carrito`);
      } else {
        alert("Usted no posee saldo suficiente para agregar a su carro");
      }
    }

    armados = mostrarArmados();
  }
}

function seleccionarCombosActualizacion() {
  alert(`Estas en ${producto4["categoria"]}`);
  function mostrarCombos() {
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
    return combos;
  }
  combos = mostrarCombos();
  while (combos != "X" && combos != "x") {
    let productoSeleccionado = null;
    let hardwareSeleccionado = null;
    switch (combos) {
      case "1":
        productoSeleccionado = producto4;
        hardwareSeleccionado = hardware[3];
        break;
      case "2":
        productoSeleccionado = producto5;
        hardwareSeleccionado = hardware[4];
        break;
      case "3":
        productoSeleccionado = producto6;
        hardwareSeleccionado = hardware[5];
        break;
      default:
        alert("Elegiste una opción inválida.");
        break;
    }
    if (productoSeleccionado != null) {
      if (saldo >= productoSeleccionado["precio"]) {
        carritoItems.push(hardwareSeleccionado);
        preciosCarrito.push(productoSeleccionado.precio);
        alert(`Se ha agregado ${productoSeleccionado["nombre"]} a su carrito`);
      } else {
        alert("Usted no posee saldo suficiente para agregar a su carro");
      }
    }

    combos = mostrarCombos();
  }
}

function manejarCarrito() {
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

  function gestionarCarrito() {
    let carrito = prompt(
      `/////////////////////////CARRITO/////////////////////////
          \nSu carrito tiene un coste total de $${carritoTotal}
          \n¿Que desea hacer?
          \n1- Comprar.
          \n2- Eliminar Carrito
          \nPresioná X para salir.`
    );
    return carrito;
  }
  carrito = gestionarCarrito();
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
          alert("Usted no posee saldo suficiente para realizar esta compra.");

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
    carrito = gestionarCarrito();
  }
}

//  COMIENZO DE PROGRAMA
if (checkUser()) {
  alert(`Usted tiene $${saldo} en su cuenta`);

  let opcion = mostrarMenu();
  while (opcion != "X" && opcion != "x") {
    switch (opcion) {
      case "1":
        manejarCuenta();
        break;
      case "2":
        seleccionarEquiposArmados();
        break;
      case "3":
        seleccionarCombosActualizacion();
        break;
      case "4":
        manejarCarrito();
        break;
      default:
        alert("Elegiste una opción inválida.");
        break;
    }
    opcion = mostrarMenu();
  }
} else {
  alert("Intente otra vez, hasta pronto");
}
alert("Muchas gracias por su visita");
