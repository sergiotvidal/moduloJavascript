// TENIENDO X => NÚMERO POSITIVOS
// Hacer un código que muestre los números primos de X

// 1. VALIDAR TODO
// 2. RECORRER X (i)
// 3. CHECKEAR SI i ES DIVISIBLE SOLO ENTRE 1 Y SI MISMO
// 4. SI 3) SE CUMPLE,
// 5. SI 3) NO SE CUMPLE,

let n = 10;

numPrimo: for (let i = 2; i <= n; i++) {
  // va a pasar por los números del 2 al n TODO: Preguntar pq si definimos un 1 en el let i = 1, solo da el 1 como resultado
  for (let j = 2; j < i; j++) {
    // si i = 5, j pasaría por 2, 3, 4
    if (i % j == 0) continue numPrimo; //aquí le decimos que en caso de que el resto dé 0, pase del número y vuelva a empezar numPrimo
  }
  console.log(i); // esto es como poner un else al if anterior
}
