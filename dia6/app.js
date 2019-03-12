import { userInfo } from "os";

/*
 *  1, 2, 3... GO!
 */

//Para comprobar qué tipo está devolviendo

let result = prompt("Example");
console.log("The result is -> ", result);
console.log(typeof result);

isFinite();

//////////////////////////////////////////////////////////// EJERCICIO1  Y EJERCICIO2

// SWITCH

//otra forma de hacer condiciones

let key = "Pepe";

switch (key) {
  case "Pepe":
    console.log("Hola Pepe");
    break;

  case "Luis":
    console.log("Hola Luis");
    break;
  default:
    console.log("Hola Default");
    break;
}

// a no ser que sea algo muy simple, mejor usar siempre ifs

// let name = "Pepe";
//
// if (name="Pepe"){
// console.log("Hola Pepe");
// } else if (name = "Luis"){
// console.log("Hola Luis");
// } else {
// console.log("Hola Default");
// }

// este sería el equivalente en if

// los CASE se pueden juntar

switch (key) {
  case 5: // si el caso es 5 o 10, pasa el "Hola Pepe"
  case 10:
    console.log("Hola Pepe");
    break;

  default:
    console.log("Hola Default");
    break;
}

/////////////////////////////////////////////////////////////////// EJERCICIO3

// FUNCIONES

function getPepe() {
  console.log("Soy Pepe");
}

function sum(num1, num2) {
  return num1 + num2;
}

getPepe(); // vuelve a llamar a la función
sum(4, 8); // si tiene parámetros definidos en la función original, hay que definirlos cada vez que llamemos a la función

// EN UNA FUNCIÓN SI NO HAY RETURN, SE RETORNA UNDEFINED!!!!!!!!!!!!!

// nunca definir una variable que se use dentro de una función, ni cambiar una variable que exista fuera dentro de la función

// función que reconozca si un número es par

function isEven(num) {
  if (user.isAdmin == false) return "No tienes permiso para hacer esto";

  if (num % 2 == 0) {
    return true;
  }
  return false;
}

function saludar() {
  console.log(name);
}

function saludarMejorada(name, saludo = "Qué tal") {
  // se pueden poner valores por defecto a los parámetros
  console.log(saludo + " " + name);
}

saludarMejorada("Pepe", "Adiós"); // Adiós Pepe
saludarMejorada("Manolo"); // falta un parámetro --> undefined si no tiene valor por defecto
saludarMejorada("Manolo"); // Qué tal Manolo --> toma el parámetro por defecto

let coffee = "con leche";

function showCoffeeType(type) {
  type = type = type = "Té";
  let coffee = "solo";

  console.log(coffee); //aquí mostraría "solo" a pesar de definir la función coffee antes como "con leche", pq están en el mismo scope y la variable se redefine
  console.log(type); // imprimiría Té a pesar de definir el type más abajo como solo, lo que haría aquí es solo = solo = solo = Té, por lo tanto toma Té como valor para mostrar en el clg
}

//vigilar el scope de las funciones

showCoffeeType("solo");
