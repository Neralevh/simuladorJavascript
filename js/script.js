let nombreVisitante = prompt(
  "Hola querido tutor, ingresa tu nombre por favor."
);
alert(`Bienvenido a mis desafios ${nombreVisitante}`);

let repeticiones = prompt(
  "Aca somos muy cordiales, por favor decime ¿Cuantas veces te gustaria ser saludado?"
);
for (let i = 0; i < repeticiones; i++) {
  alert(`Hola ${nombreVisitante}, este es tu saludo N°${i + 1}`);
}
