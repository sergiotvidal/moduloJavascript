/*
 *  1, 2, 3... GO!
 */

// Asincronía: PROMISES

//métodos principales para resolver --> resolve and reject

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve("Todo OK José Luis");
  }, 3000);
});

promise.then(resultado => console.log(resultado));

promise.catch(error => console.log(resultado)); // esto sería para obtener los errores

// otro ejemplo

let promise = new Promise(function(resolve, reject) {
  let array = ["Pepe", "MAría", "Luisa"];

  if (array.includes("Pepe")) {
    resolve("Hay un Pepe");
  }
  reject("No hay un Pepe"); // sería mejor escribir -> reject(new Error("No se ha encontrado a Pepe"));
});

promise.then(resultado => console.log(resultado));

// ASYNC y AWAIT

let data = pedirDatos("https://randomuser.me/api/");

async function example() {
  let data = await pedirDatos("https://randomuser.me/api/");
  return Promise.resolve(data);
}

example().then(data => console.log(data));

let data = await example(); // un await solo se puede hacer dentro de la async function

// otro ejemplo en Ejercicio4

// PROMISE ALL

Promise.all; // espera hasta que estén todas las promesas resueltas y correctas, si todas están bien, palante, si no, error

// JSON

let obj = {
  name: "Pepe",
  age: 40
};

let json = JSON.stringify(obj);

console.log(typeof json); // pasa de objeto a string el json original --> string

let newObj = JSON.parse(json); // pasa de string a objeto
