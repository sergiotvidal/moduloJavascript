/*
 *  1, 2, 3... GO!
 */

// ERRORES, FECHAS, TIPOS MAS A FONDO, ASINCRONÍA

// ERRORES

// sintaxis básica
try {
  // codigo que queremos probar
} catch (e) {
  // la variable e sería el error que viene del try
  // si hay un error entra directamente dentro del catch
  console.error("app.js y error", e);
}

// esto es lo que te vendría en el e
error = {
  name : "ReferenceError"
  message : "loqueseaquemires is not defined"
  stack: "error at ..."
}

// logging --> elasticsearch, kibana, full search Text, investigar

// podemos crear errores customizados con clases, para luego, por ejemplo, definir el error que obtiene el usuario

class LoginError extends Error {
  constructor() {
    super();
    this.name = "LoginError"
  }
}

// ASINCRONÍA

//sintaxis básica
setTimeout(function() {
  //aquí va el código
}, timeout); // timeout --> ms

//sintaxis intervalos
setInterval(function() {
  //aquí va el código
}, 2000);

// aquí el this salta un nivel hacia atrás (al obj), y funciona, un arrow function saltaría 2 niveles hacia atrás, y tomaría el nivel ventana
let obj = {
  name: "Pepe",
  hola: function() {
    console.log("Hola" + this.name);
  }
}

//para hardcodear los this que quieras sin preocuparte del scope, buscar funcionalidades del .bind en MDN

// TIPOS

// Métodos mas importantes para -->

// Números

Math.floor()
//4.1 -> 4
//4.6 -> 4
// -1.2 -> -2
// -1.9 -> -2
Math.ceil()
//4.1 -> 4
//4.6 -> 4
// -1.2 -> -2
// -1.9 -> -2
Math.trunc()
//trunca los números
Math.round()
//redondea los números

let num = 234.429425
num = num.toFixed(2)
// cortar el número a dos decimales y REDONDEA

isNaN()
isFinite()

parseInt()
//para convertir un string a un número entero. Tiene que empezar por un número, cuando llegue a un NaN, deshecha todo

parseFloat()
//para convertir string a número con decimales

Math.pow()
//elevar un número

// mirar métodos en MDN

// Strings

let str = "jkaka kalwdslkasd adglas"

str = str.length
// esto no es un método, es una propiedad

let cadena = "nksdfgnlasdkl"
//estos dos métodos son lo mismo
for (let i = 0; i < cadena.length; i++) {
  console.log(cadena[i]);
}

for (let letra of cadena) {
  console.log(cadena);
}

// FOR OF --> funciona para arrays y strings (al igual que para objetos utilizaba for in)

cadena.charAt(1); // seleccionar el caracter en la posición 2 -> 0 1 2

cadena.includes("pepe") // te devuelve un true o un false

cadena.indexOf("pepe") // devuelve la posición del () o -1 si no lo encuentra (es el false)

cadena.normalize() // "normaliza" el string, modifica caracteres raros ºª%

cadena.substr() // seleccionar un trozo del string a partir del caracter (numericamente) que le indiques en el ()

// Arrays

// sintaxis básica
let names = ["Pepe", "Rafa", "Maria"];

names.length; // dice la longitud del array

names.push(); // introduce un elemento en última posición

let algo = names.pop(); // toma el último valor del array y lo asocia a la variable

names.unshift(); // introduce los elementos del () en primera posición

names.shift(); // quita el elemento en primera posición, no tiene parámetros

for(let name of names) {
  console.log(name);
}

for (let [key, valor] of names.entries()) {
  console.log(key);
  console.log(valor);
}

names.splice(); // entre el () ponemos la posición de inicio y cuántos elementos queremos borrar -> retorna los elementos eliminados

names.splice(1, 1, "Yisuscraist") // para incluir un elemento en el lugar del elemento que borramos

let res = names.slice(1,2) // para retornar los valores del array que queramos

console.log("RES -> ", res)

names.map //

let names2 = names.map(name => {
  return name + "2"
}); //al ser arrow funct, podemos obviar el return

let names3 = names.map((name, i) => { // imprimir los pares(salen undefined)
  if(i % 2 == 0) {
    return name;
  }
})

let names4 = names.filter((name, i) => { //devuelve lo mismo que el .map de arriba, pero filtrando la lista(no salen undefined)
  if (i % 2 == 0) {
    return false;
  }
  return true;
})

[1, 2, 4, 6].reduce((ac, current) => { // sirve para acumular
  return ac + current;
}, 200);

let str = "sdjigals asdklgalsd asdkg";

str.split(""); // divide todo el string letra por letra
str.split(" "); // divide el string por los espacios


// DESTRUCTURING

let arrayNormal = ["Abel", "Pepe"];

let [name1, name2] = arrayNormal;

// lo de arriba es exactamente lo mismo que esto
let name1 = arrayNormal[0];
let name2 = arrayNormal[1];

let str4 = "RED";
let [a,b,c] = str4;

let arrayNormal = ["Rubén", "Costa"];
let obj4 = {}
[obj4.name, obj4.lastName] = arrayNormal;

let obj = {
  window = 100,
  innerHeight: "200px",
  a: 1,
  b: 2,
  c: 3,
};

let {window: w = 0, innerHeight, alalalala = 5, ...rest} = obj // con el window: w, renombramos la propiedad window como w y le cambiamos el valor también de 100 a 0

// MIRAR EN MDN JSON JS, DATES: como crear una fecha, métodos de Date, asincronía

// LIBRERÍAS DE FECHAS: momentjs
// web para encontrar librerías --> npmjs