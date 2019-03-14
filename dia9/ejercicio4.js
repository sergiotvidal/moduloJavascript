// crear una función que multiplique por 3 todas las propiedades numéricas del objeto

let person = {
  kg: 80,
  size: 180,
  name: "Juan"
};

function multiplier(obj) {
  for (let key in obj) {
    if (isFinite(obj[key])) {
      obj[key] = person[key] * 3; // obj[key] *= 3
    } else continue;
    console.log(person[key]);
  }

  return null;
}

multiplier(person);
// console.log(person);
