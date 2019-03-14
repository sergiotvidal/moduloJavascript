//escribir una función que me de el total de manzanas

let apples = {
  red: 10,
  green: 23,
  golden: 72,
  yellow: 2
};

function sumApples(params) {
  for (let key in params) {
    sum += apples[key];
  }
}

let sum = 0;
sumApples(apples);
console.log(sum);
