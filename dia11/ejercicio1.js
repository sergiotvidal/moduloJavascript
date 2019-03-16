// HACER UNA CLASE FURGONETA QUE EXTIENDA DE VEHICULO
// HACER UNA CLASE COCHE QUE EXTIENDA DE VEHICULO

// VEHICULO TIENE UNAS PROPIEDADES POR DEFECTO: PUERTAS 5, PESO 3000 KG FURGONETA SUSTITUYE EL PESO A 5000 KG COCHE SUSTITUYE EL PESO A 3500 KG Y AÑADE UN CAMPO RADIO(TRUE / FALSE), FURGONETA ADEMÁS AÑADE EXTRA UN COLOR Y UN TIPO QUE PUEDE SER ESPECIAL O NO (TRUE / FALSE)

class Vehicle {
  constructor(puertas = 5, peso = 3000) {
    this.puertas = puertas;
    this.peso = peso;
  }
}

class Van extends Vehicle {
  constructor(color, especial = true, peso = 5000) {
    super();
    this.color = color;
    this.especial = especial;
    this.peso = peso;
  }
  // especial(veh1){
  // return veh1.tipo ? true : false;
  // }
}

class Car extends Vehicle {
  constructor(radio = true, peso = 3500) {
    super();
    this.radio = radio;
    this.peso = peso;
  }

  // hasRadio(veh1){
  //     return veh1.radio ? true : false;
  // }
}

class Ford extends Car {
  constructor(puertas, tipo = "Ford") {
    super();
    this.tipo = tipo;
    this.puertas = puertas;
  }
}

const ford1 = new Ford(3, "Ford fiesta");
const furgoneta1 = new Van("red", false);

console.log(furgoneta1);
