// Crear una clase Delfin, el delfin que tenga un nombre, un peso,
// longitud, color y los metodos saltar que imprime por consola saltando...
// yy un metodo general de reproduccion que al pasarle dos delfines con el mismo color
// nos da un true (mini dolphin)

class Animal {
  constructor(eyes = true) {
    this.eyes = eyes;
  }

  respirar() {
    console.log("estoy respirando");
  }
}
class Dolphin extends Animal {
  constructor(name, weight, long, color) {
    super(2);
    this._name = name;
    this.weight = weight;
    this.long = long;
    this.color = color;
  }

  getName() {
    return this._name; // el barrabaja "simula" que es una variable privada es decir que no puedes hacer d1._name y lo tienes que coger a traves del metodo getName
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

Dolphin.reproduction(d1, d2);

d1.jump();
Dolphin.reproduction(d1, d2);
