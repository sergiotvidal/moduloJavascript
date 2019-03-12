/*
 *  1, 2, 3... GO!
 */

/////////////////////////EJERCICIO1, EJERCICIO2, EJERCICIO3, EJERCICIO4 Y EJERCICIO5

// FUNCIONES DECLARATIVAS

name("Loquesea");

function name(params) {
  console.log(params);
}

// FUNCIONES DE EXPRESIÓN

const name2 = function(params) {
  console.log(params);
};

let funcion2 = name2;
funcion2(2);

name2("Loquesea");

// CALLBACKS

function checkAge(age, accept, decline, test) {
  if (age <= 18) {
    decline();
  } else {
    accept();
  }
}

function accept() {
  console.log("Todo OK");
}

function decline() {
  console.log("No puedes");
}

checkAge(16, accept, decline);
