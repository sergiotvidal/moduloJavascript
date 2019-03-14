/*
 *  1, 2, 3... GO!
*/


// REPASO OBJETOS


// las propiedades pueden ser string o symbol(valores únicos: let algo = Symbol("1"))
let obj = { //se definen de esta forma, tienen valores y propiedades
    name: "Alex", // propiedad: valor
    oranges = 23,
    apples = 213
}

obj.name2 = function() // si no existe lo crea

// acceso dinámico
let loquesea = prompt("escribe name, apples u oranges");
obj[loquesea]; //dependiendo de lo que introduzca el usuario en el prompt, esto valdrá el valor que encuentra en el obj

let dog = {
    hola dog: true
}

//para llamar propiedades que tienen espacios
dog["hola dog"] = "hola";

// selector dinámico

let icons = {
    changeSheet: {
        active: false,
        done: true
    }
    changeSheet2: {
        active: false,
        done: true
    }
    changeSheet3: {
        active: false,
        done: true
    }
}

function changeIconActive(icon) {
    icons[icon].active = !icons[icon].active;
}

function changeIconDone(icon) {
    icons[icon].done = !icons[icon].done;
}

// se pueden retornar objetos

function getUser() {
    let user = getUserFromDB()

    return {
        user: user, // si el valor y la propiedad se llaman igual, se puede omitir la propiedad al llamarlo (podría poner solo user)
        obj2 : {
            dato1: "aleatorio"
        }
    }
}

// checkear si existe una propiedad en un objeto

let casa = {
    puertas: 2,
    ventanas: null
};

"puertas" in casa // daría true

//mostrar las propiedades de un objeto con un bucle

for(let key in casa) {
    console.log(key); // imprimiría puertas en la 1º iteración, ventanas en la 2º
}


let casa2 = casa; 

casa2.ventanas = 24; //al estar vinculados, casa.ventanas también se modifica a 24

let x = {}

let y = {}

if(x == y){
    console.log("afalkf"); //no se imprime pq x == y es false
}

x = y

if(x == y){
    console.log("afalkf"); //se imprime pq x == y ahora es true
}

////////////////////////////////////////// EJERCICIO1 EJERCICIO2 EJERCICIO3 EJERCICIO4

/////////////////////////////////// CHECKEAR EN MDN LOS MÉTODOS DE OBJETOS, STRINGS, ARRAYS, NUMBERS...



// FUSIONAR OBJETOS

// utilizar el object.assign()

// FUNCIONES DENTRO DE OBJETOS, REFERENCIA AL OBJETO DESDE DENTRO

let person3 = {
    name: "María"
    run: function() {
        console.log(`I'm ${this.name} and i'm running`); // este this hace referencia al objeto
    }
}

person3.run() // para llamar a la función dentro del objeto

// CÓMO LLAMAR A UNA FUNCIÓN SIN LLAMARLA(hacer que una función se llame a si misma)

(function saludar(){
    console.log("Hola");
})(); // esto viene bien para un init



// FUNCIÓN GENERADORA DE OBJETOS

function Person(name, lastName, country = "Spain") { //nombre de la función va con mayúsculas si es generadora
    this.name = name;
    this.lastName = lastName;
    this.country = country;
    this.fullName = function (){
        return this.name + " " + this.lastName;
    }
}

let person1 = new Person("Murillo", "Ferreira", "Brazil");
let person2 = new Person("Iñaki", "López-Rekarte");
let person3 = new Person("Mutiu", "Adepoju")

console.log(person1);
console.log(person3.fullName());





