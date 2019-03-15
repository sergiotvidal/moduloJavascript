// crear un objeto personaje
// que tenga un contador de vida
// y que tenga dos metodos -> increaseLife que incrementa la vida en 50 puntos
// y decreaseLife que la baja en 50
// tiene que tener ota funcion que muestre la vida total

// que los metodos del objeto de arriba se puedan llamar encadenadamente:
// personaje.increaseValue().decreaseValue().increaseValue().decreaseValue()

let personaje = {
  vida: 100,
  increaseLife(num) {
    this.vida += num;
    return this;
  },
  decreaseLife(num) {
    this.vida -= num;
    return this;
  },
  showLife() {
    console.log(this.vida);
    return this;
  }
};
personaje
  .increaseLife(50)
  .increaseLife(10)
  .decreaseLife(24)
  .showLife(); // 150

console.log(personaje.vida); // 150
