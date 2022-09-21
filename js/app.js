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
                <a href="#" class="card-link">Agregar al carrito 🛒</a>
              </div>
            </div>
          </div>
  `;
  contenedor.appendChild(div);
});
