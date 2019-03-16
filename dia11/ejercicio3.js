// Crear una función que pasándole el array, borre los elementos pares

let names = ["Pepe", "Rafa", "Tito", "Maria", "Josefina", "Cañita Brava"];
// debugger;

function deleteEvenNumbers(names) {
  //   let arrayAux = [];
  for (let i = 1; i < names.length; i++) {
    // if (i % 2 === 0) {
    //   arrayAux.push(names[i]);
    // }
    names.splice(i, 1); // si en el let i = 1 definimos i = 0, aquí definimos el names.splice(i + 1, 1)
  }
}

deleteEvenNumbers(names);
console.log(names);
