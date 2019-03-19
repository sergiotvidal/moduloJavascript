/*
 *  1, 2, 3... GO!
 */

// Programa que pida nombre por prompt

// let isAdmin = prompt("Who are you?")
//   .toLocaleLowerCase()
//   .trim();

// isAdmin = isAdmin.toLowerCase().trim(); hace que devuelva un string convertido todo en minúsculas y sin espacios delante o detrás

// ESCRITO CON IFS Y ELSES

// if (isAdmin == "admin") {
//   alert("Hello master");
// } else if (isAdmin == "user") {
//   alert("Hello User");
// } else {
//   alert("I don't know you");
// }

// ESCRITO CON CONDICIONES TERNARIAS

// isAdmin == "admin"
//   ? alert("Hello master")
//   : isAdmin == "user"
//   ? alert("Hello user")
//   : alert("I don't know you");


/////////////////////////////////////////////////////////////////////////////////////////// EJERCICIO y EJERCICIO2

// EL || CON IFS

// if (isAdmin === "admin" || isAdmin === "user") { //el || significa o
//     alert(`Hello ${isAdmin}`)
// } else {
//     alert("I don't know you")
// }

// EL || CON CONDICIONES

// isAdmin === "admin" || isAdmin === "user"
//   ? alert(`Hello ${isAdmin}`)
//   : alert("I don't know you");

// OPERADORES LÓGICOS

// OR ||

alert(true || true); //true
alert(true || false); //true
alert(false || true); //true
alert(false || false); //false

// AND && (tiene mayor prioridad que el OR)

alert(true && true); //true
alert(true && false); //false
alert(false && true); //false
alert(false && false); //false

//OTRO USO DEL &&

let whatever = 1;

whatever > false && alert("Is admin"); // como "whatever > false" es true, entonces ejecuta el alert y muestra el Is admin

// NOT !

let booleano = true;

booleano = !booleano; // el ! cambia el valor

let isRed = 0;

isRed = !isRed;

("hola"); // true

!!"hola"; // convierte el string en un boolean, si quieres el string como boolean pero en contrario: !"hola"

alert(!!"Hola");
alert(Boolean("Hola")); // estas dos expresiones son idénticas

///////////// BUCLES

// el WHILE

let flag = false;

while (true) {
  console.log("Hola");

  //pasa algo, como por ejemplo
  flag = true;
  if (flag == true) {
    break;
  }
}

let cont = 0;

while (cont <= 3) {
  console.log(cont);
  cont++;
}

let cont2 = 0;

while (true) {
  console.log(cont2);
  cont2++;
  if (cont2 == 3) {
    break;
  }
}

let cont3 = 5;

while (cont3) {
  console.log(cont3);
  cont3--;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////// EJERCICIO3

// el DO-WHILE

do {
  console.log("Hola");
} while (false);

let limit = 0;

do {
  console.log(limit);
} while (limit < 5);


// el FOR

let array = [
    {name: "Pepe"}
    {name: "Luis"}
    {name: "Ana"}
    {name: "María"}
    {name: "Yisuscraist"}
]

for (let i = 0; i < array.lenght; i++) {
    const element = array [i];
    console.log(element);
}

let array = [
    {name: "Pepe", isAdmin: true},
    {name: "Luis", isAdmin: false}
    {name: "Ana", isAdmin: false}
    {name: "María", isAdmin: true}
    {name: "Yisuscraist", isAdmin: true}
]

console.log("La lenght es -> ", array.length);

for (let i = 0; i < array.length; i++) {
  if (array[i].isAdmin) {
    console.log(array[i].name);
  }
}

let index = 0;

for (; index < 4; index++) {
    // const element = array[index];
    
}


// el CONTINUE (solo se usa con el FOR)

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


///////////////////////////////////////////////////////////////////////////////////////////////////////// EJERCICIO4