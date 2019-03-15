// una función que acepte dos parámetros x y n y devuelva x elevado a n

function elevate(x, n) {
  // FORMA1
  // return console.log(x ** n);

  // FORMA2
  let res = x;
  for (let i = 1; i < n; i++) {
    // TODO: PREGUNTAR POR QUÉ x SE SIGUE MULTIPLICANDO SI NO DEFINIMOS LA VARIABLE RES
    res *= x;
  }
  return console.log(res);
}

elevate(2, 5);
