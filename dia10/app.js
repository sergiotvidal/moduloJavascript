/*
 *  1, 2, 3... GO!
 */
let obj = {};

// functiones constructoras -> crear objetos

function Person(a, b) {
  this.a = a;
  this.b = b;
}

const var1 = new Person("1", "2"); // nuevo objeto creado

for (let i in var1) {
  // seleccionar propiedades dentro del objeto creado
  var1[i];
}

////////////////////////////////////////////////// EJERCICIO1 EJERCICIO2

// CLASES
class Coche {
  constructor(modelo, color, potencia = 100) {
    this.modelo = modelo;
    this.color = color;
    this.potencia = potencia;
  }
  setModelo(modelo) {
    this.modelo = modelo;
  }

  sameModel(coche2) {
    return this.modelo === coche2.modelo;
  }

  static sameColor(coche1, coche2) {
    return coche1.color === coche2.color;
  }
}

let c1 = new Coche("OPEL", "Blanco", 90);
let c2 = new Coche("Carro", "Gris", 90);
let c3 = new Coche("", "Blanco", 90);
c1.sameModel(c2);
Coche.sameColor(c1, c2);

c1.setModelo("Ferrari");

/////////////////////////////////////////////////////// EJERCICIO3
class Animal {
  constructor(eyes = 2, mouth) {
    this.eyes = eyes;
    this.mouth = mouth;
  }

  jump() {
    console.log("Animal saltando");
  }
}

// CLASES DENTRO DE CLASES
class Dolphin extends Animal {
  constructor(name, weight, long, color) {
    super();
    this.name = name;
    this.weight = weight;
    this.long = long;
    this.color = color;
  }

  getName() {
    return this._name;
  }

  setName() {}

  jump() {
    console.log("Dolphin saltando...");
  }

  static reproduction(d1, d2) {
    return d1.color === d2.color ? "Mini Dolphin!" : false;
  }
}

let d1 = new Dolphin("Juanito", 199, 200, "red");
let d2 = new Dolphin("Juanita", 199, 200, "red");

d1.jump();
Dolphin.reproduction(d1, d2);
