/*
 *  1, 2, 3... GO!
 */

// BOOLEANS

let verdadero = true; // 1, 2, 3, ... "Hola" strings con texto

let falso = false; // 0, "" strigs vacíos

let operacion = 2 < 4;
// console.log(operacion);

if (operacion) {
  console.log("Message");
}




// NULL

let name = null;




// UNDEFINED

let animal; // undefined
let lastName = undefined;





// OBJECTS

let obj = {};

let person = {
  name: "Pepe",
  eyeColor: "Green",
  eyes: true,
  canRun: false,
  age: 135,
  address: {
    street: "Calle Falsa",
    number: 123,
    geo: {
      lat: "",
      lon: ""
    }
  }
};

person.hasDog = true // para crear propiedades nuevas en el objeto

let field = "sheetChange3";

let icons = {
    sheetChange : {
        active = false,
        done = false
    },
    sheetChange2 : {
        active = false,
        done = false
    },
    sheetChang3 : {
        active = false,
        done = false
    },
    sheetChange4 : {
        active = false,
        done = false
    },
};

icons[field].active = !valor;

if (person.name == "Pepe") {
  console.log(person.address[field]);
}

console.log(person.address.street); // Buscaría el street dentro del address dentro del person

("obj.age"); //??????????






// ARRAY
// Se usa para guardar colecciones, normalmente ordenadas

let dogList = [];

let dogList = ["Valor1", "Valor2", "Valor3"]; // valor1, valor2 ... pueden ser strings, booleans, numeros, objetos...

let persons = [{name: "Pepe"}, {name: "Pepe2"}, {name: "Pepe3"}, {name: "Pepe4"}];


let cactus = {
    id: "1", //no se suelen poner aquí los id, se crean en bases de datos
    name: "Cactus",
    price: 20,
    stock: true
}

let flower {
    id: "1",
    name: "rosa",
    price: 16,
    color: "red"
}

let plants = [cactus, flower];

let id = Symbol("loquesea")

if("loquesea" == "loquesea")
console.log(id);


// TYPES CONVERTIONS

// tostring

let valorBoolean = null;

let newValor = String(valorBoolean);

typeof newValor;

// NUMBER

console.log("2" * "2");

let num = "12";

let newNum = Number(num); // 12

// falsy

// undefined
// null
// ""
// 0

// truthy "dgf", 23

Number(undefined); // NaN
Number(null); //
Number(false); // 0
Number(true); // 1
Number(""); // 0
Number("a"); // NaN
Number("    1    "); // 1

Boolean(1); // true
Boolean(0); // false
Boolean("Hola"); // true
Boolean(""); // false
Boolean("0"); // true

let name = "Ruben";
let lastName = "Costa";
let message = name + " " + lastName;

confirm("Eres admin?");

prompt("Cuántos años tienes");

alert("Esto es una alerta");