// escribir una función testNum que le pasas un parametro y retorna una promise que comprueba que el valor sea mayor que 10, si no la rechaza

function testNum(number) {
  let promise = new Promise(function(resolve, reject) {
    if (number > 10) {
      resolve(true);
    } else reject(false);
  });
}

testNum(25);
testNum(8);
