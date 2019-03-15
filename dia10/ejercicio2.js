// crear una funcion constructora
// que:
// cree un objeto acumulador usando la funcion
// constructora Acumulador con un valor inicial.
// Ese objeto debe tener un metodo 'introduce'
// que te salta un prompt y te lo suma en el
// acumulador

function Acumulador(valorInicial) {
  // --> FUNCIÓN CONSTRUCTORA / GENERADORA
  this.valorInicial = valorInicial; // crea la propiedad y le da un valor
  this.introduce = function() {
    let res = +prompt("dame un num");
    // checks
    this.valorInicial += res;
    return this;
  };
}
let ac = new Acumulador(21); // esto crea un NUEVO objeto ac

ac = {
  valorInicial: 21,
  introduce() {
    let res = +prompt("dame un num");

    this.valorInicial += res;
    return this;
  }
};

// let ac2 = new Acumulador(0);
// ac.introduce();
// console.log(ac);
