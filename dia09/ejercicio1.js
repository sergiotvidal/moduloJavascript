let casa = {
  puertas: 2,
  ventanas: null
};

for (let key in casa) {
  console.log(key); // imprimiría puertas en la 1º iteración, ventanas en la 2º
  console.log(casa[key]); // imprime los valores de las propiedades
}

let casa2 = {
  puertas: 234,
  ventanas: 53,
  cosas: 412
};

let casa2 = casa;

for (let key in casa2) {
  console.log(key); // imprimiría puertas en la 1º iteración, ventanas en la 2º
  console.log(casa[key]); // imprime los valores de las propiedades
}

// aquí daría error pq casa2 ya estaría definido
