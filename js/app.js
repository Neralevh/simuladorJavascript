const carrito = [];

function plasmarProductos() {
  const contenedor = document.getElementById("fila");

  hardware.forEach((hardware) => {
    const div = document.createElement("div");
    div.classList.add("col-md-4");
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
              <img src="${hardware.imagen}" class="card-img-top" alt="${hardware.nombre}">
              <div class="card-body">
                <h5 class="card-title">${hardware.nombre}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Procesador: ${hardware.procesador}</li>
                <li class="list-group-item">Tarjeta Grafica: ${hardware.tarjetaGrafica}</li>
                <li class="list-group-item">Memoria Ram: ${hardware.memoriaRam}</li>
                <li class="list-group-item">Motherboard: ${hardware.motherboard}</li>
                <li class="list-group-item">Precio: $${hardware.precio}</li>
              </ul>
              <div class="card-body">
                <button type="button" class="btn btn-dark">Agregar al carrito 🛒</button>
              </div>
            </div>
          </div>
  `;
    contenedor.appendChild(div);

    div.querySelector("button").addEventListener("click", () => {
      agregarAlCarrito(hardware.id);
    });
  });
}

plasmarProductos();

function agregarAlCarrito(id) {
  let producto = hardware.find((hardware) => hardware.id === id);

  let productoEnCarrito = carrito.find((producto) => producto.id === id);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    producto.cantidad = 1;

    carrito.push(producto);
  }
  plasmarCarrito();
  calcularTotal();
}

function plasmarCarrito() {
  let carritoCards = document.querySelector("#modalCarrito");

  carritoCards.innerHTML = "";

  carrito.forEach((ele, index) => {
    let card = document.createElement("div");
    card.classList.add("col-12");
    card.classList.add("col-md-4");
    card.classList.add("mb-5");
    card.classList.add("d-flex");
    card.classList.add("justify-content-center");
    card.innerHTML = `

    <div class="card" style="width: 18rem;">
              <img src="${ele.imagen}" class="card-img-top" alt="${ele.nombre}">
              <div class="card-body">
                <h5 class="card-title">${ele.nombre}</h5>
                <p class="card-title">$${ele.precio}</p>
                <p class="card-title">Cantidad: ${ele.cantidad}</p>
                <button type="button" class="btn btn-danger">Eliminar</button>
                </div>

            </div>
          </div>
  `;

    card.querySelector("button").addEventListener("click", () => {
      eliminarProducto(index);
    });

    carritoCards.appendChild(card);
  });
}

function eliminarProducto(i) {
  carrito[i].cantidad--;

  if (carrito[i].cantidad === 0) {
    carrito.splice(i, 1);
  }

  plasmarCarrito();
  calcularTotal();
}

function calcularTotal() {
  let total = 0;
  carrito.forEach((ele) => {
    total += ele.precio * ele.cantidad;
  });

  const precioFinal = document.getElementById("totalCarrito");

  precioFinal.innerHTML = `
<h5 class="card-title">$ ${total}</h5>`;
}
