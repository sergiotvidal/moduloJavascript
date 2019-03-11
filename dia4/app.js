/*
 * 1, 2, 3 ... GO!
 */

//OPERATORS

2 + 2; // reglas para operaciones iguales que en matemáticas

let num = 2; //para hacerlo negativo ->

num = -num;

num = +num; // se queda como está

2 + 2 + "1"; // sería 41, 4 de la operación, y el string del 1

// la forma rápida de convertir a número algo, es ponerle un + delante

+""; // esto sería 0, si tuviese un espacio en el string, sería otra cosa

let skates = "2";
let longBoards = "4";

let sum = +skates + +longBoards;

let ab, cd, ff; // para darle el mismo valor de 2 + 3 a las tres variables ->

ab = cd = ff = 2 + 3;

let num1 = 2;
let num2 = 2;

let num3 = 2 - (num1 = num2 + 1); // esto convierte el num1 en 3, luego hace la operación = -1

let valor1 = 4;

if (valor1 % 2 == 0) {
  console.log("Hola");
}

2 ** 4; // esta es la forma de escribir exponentes

4 ** (1 / 2); // raíz cuadrada
Math.sqrt(4); // otra forma de escribir lo de arriba

let contador = 1;

contador += 1;
contador = contador + 1; // son lo mismo el de arriba y este

let newContador = contador++; // el mas mas suma, pero si el valor (CON EL ++) se asigna a una nueva variable, la nueva variable toma el valor con el que llega el contador, en este caso 1, y el contador original suma un valor más

let newContador2 = ++contador; // aquí vale 2

//con resta, multip o división pasaría lo mismo

// EJEMPLO

let contador2 = 1;

contador++;

let loquesea = contador; // aquí contador vale 2, el inicial + el que se suma del contador++
console.log(contador); // imprime un 2

let cont = 1;

console.log(3 * ++cont); // da 6
console.log(3 * cont++); // da 3, pq hace la operación con el valor ANTES de aplicarle la suma

let variableReasignada = 2;

variableReasignada = 4; // reasignar variables se puede hacer hasta el infinito

let numero1 = 2;

numero1 += 2;
numero1 = numero1 + 2; // esto es lo mismo que la línea anterior, reasignamos numero1 al valor 4

//la resta, multip y división funcionan exactamente igual

let res = 2;
res *= 2 + 1;
console.log(res); // esto imprime 6, primero hace las operaciones del lado derecho y luego ejecuta el *=

// LA COMA (,)

let z = 0;
let loqs = ((z = 1 + 1), 2 + 2); // esto DESHECHA las operaciones anteriores a la última, que es la que guarda, por lo tanto esto daría 4, pero la variable z quedaría reasignada al valor de la suma

for (a = 3, b = 5, c = 10 * 8; a < 5; a++) {} // aquí la coma sirve para separar elementos que están definidos e igualados, si separas con comas elementos que no están definidos, no se guardan

// COMPARACIONES

if (2 != 2) {
  // siempre da un resultado booleano, un true o un false, los operandos que se pueden usar para comprobar su similaridad son ==, === (estricto), != y !== (estricto)
}

if (3 <= 6) {
} // lo mismo que arriba

if ("Hola" == "Hola") {
} // comprueba letra a letra si son iguales, se puede usar por ejemplo "a" < "b"

console.log("2" > 1); // daría un true, no compara el tipo
console.log("01" == 1); // true, el valor es el mismo y hay un doble igual
console.log(null == undefined); // true, esto lo evalúa como false == false
console.log(null === undefined); // false, pq no son estrictamente iguales

//COSAS RARAS
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false

// CÓMO MOSTRAR DATOS
// consolelog, alert, prompt, confirm

let isAdmin = confirm("Eres admin?");

let age = +prompt("Cuántos años tienes", 10); //le establecemos un valor por defecto con el 10, el + al principio convierte al dato introducido en un número

alert("Esto es una alerta");

if (isFinite(age) && age < 50) {
  //isFinite es una función de JS que se usa para saber si lo que se introduce es un número
  // si introduces un número máximo y el user mete un número o algo distinto al número, la variable queda sin definir
}

// CONDICIONES

if (2 == 2) {
  //algo
  //para meter más condiciones: crear otro if, crear un else if, crear un else
}

// si tienes una estructura anidada, el programa lee hasta que se encuentra el primer true

if (2 == 3) {
} else if (3 == 4) {
} // else (0 == 0) {

// }

if (2 == 2) {
  let mes = "Hola";
  if (true) {
  }
  console.log(mes);
} else if (3 == 1) {
} else {
}

if (2 == 2) {
  let mes = "Hola";
  if (true) {
    mes = "adios";
    console.log(mes);
  }
  console.log(mes);
} else if (3 == 1) {
} else {
}

// CONDICIÓN TERNARIA

true ? alert("esto es true") : alert("esto es false"); //se escribe de esta forma

let user = {
  role: "Admin"
};
let isAdmin2 = user.role === "Admin" ? "Admin" : "User"; // si es true, llama al primer resultado, si no llama al segundo

console.log(isAdmin2);
