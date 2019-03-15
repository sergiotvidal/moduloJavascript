// crear objeto con varias propiedades, buscarlas y mostrarlas por consola

object = {
  prop1: true,
  prop2: "valor",
  prop3: "otro valor",
  test: "otro valor mas"
};

// for (let key in object) {
//   console.log(key);
// }

function deleteTest(object) {
  for (let key in object) {
    if (key === "test") {
      delete object.key;
    }
    console.log(key);
  }
}

// deleteTest(object);

// ESTE ESTÁ BIEN
// function deleteProperty(obj, propiedadABorrar) {
//   for (let key in obj) {
//     if (key === propiedadABorrar) delete obj[key];
//   }
// }

// let propiedadABorrar = "test";
// deleteProperty(object, propiedadABorrar);
// console.log(object);
