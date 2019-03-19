/*
 * 1, 2, 3 Go!
 * _________________
 */

"use strict";

console.log("hola");
console.log("cosas");
alert("Hola me llamo Sergio");
alert("lalala");

//comentario de una línea

/**
 * Variables
 *
 * se declaran con var, let y const
 */

// var name = "Sergio";

// if (true) {
//     var name = "Sergio"; // al estar declarada la variable en un var, js hace hoisting automáticamente, lo que quiere decir que "sube" la variable al inicio del documento, sacándolo del scope que le estamos dando al meterlo en una variable y lo hace válido para todo el archivo

// }

if (true) {
  const name = "Sergio";
  if (true) {
    // name = "Luis"; daría error pq en el nivel superior está establecida una variable con el const que convertiría en fija la variable name, si quisiesemos que fuese modificable, lo tendríamos que declarar en un let
    console.log(name);
  }
}

console.log(name);

let valor1 = 1;
let valor2 = 5;
let suma = valor1 + valor2;

//HOISTING
let middleName = "Cosas";
const lastName = "Más cosas";

let addressType;

//STRINGS

const name = "hola";
const name = "hola";
const name = `hola`; // Backsticks, características especiales

console.log("mi nombre es " + name + "\n" + "siguiente línea");
console.log(`mi nombre es ${name} y además
guarda el formato
del texto`);
