/////////// BUCLES FOR CON ARRAYS

// let array = [
//   { name: "Pepe" },
//   { name: "Luis" },
//   { name: "Ana" },
//   { name: "María" },
//   { name: "Yisuscraist" }
// ];

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   console.log(element);
// }

let array = [
  { name: "Pepe", isAdmin: true },
  { name: "Luis", isAdmin: false },
  { name: "Ana", isAdmin: false },
  { name: "María", isAdmin: true },
  { name: "Yisuscraist", isAdmin: true }
];

// console.log("La lenght es -> ", array.length);

// for (let i = 0; i < array.length; i++) {
//   if (array[i].isAdmin) {
//     console.log(array[i].name);
//   }
// }

//cambiarle el nombre a los users que no sean admins a "default" usando continue

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (array[i].isAdmin) {
    console.log(array[i].name);
    continue; // el programa comprueba si eres admin, y si es true, imprime el nombre y continua
  }
  array[i].name = "Default";
  console.log(array[i].name);
}

// Recorrer un array de 3x3 que en cada cuadrado (como si fuese un tablero de hundir la flota) pida un valor (1-> barco; 0 -> agua). Si no ponemos nada en la casilla, las iteraciones se paran.

let coordenada;

joseluis: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i <= 3 && j <= 3) {
      coordenada = prompt(`Introduce un 1 o un 0 para la coordenada ${i}${j}`);
    }
    if (coordenada == 1) {
      console.log("BUENAS TARDES");
    } else if (coordenada === 0) {
      console.log("BUENAS NOCHES");
    } else if (coordenada === "") {
      console.log("BUENAS MAÑANAS");
      break joseluis;
    } else {
      break joseluis;
    }
    console.log(`En la coordenada ${i}${j} hay un ${coordenada}`);
  }
}
