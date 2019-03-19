// Una función que tenga un setTimeOut de 2 seg. que devuelva una respuesta al llamar a un API público

function callAPI(url) {
  return fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data =>
      setTimeout(() => {
        return data;
      }, 6000)
    );
}

// console.log(data);
let var1 = callAPI("https://randomuser.me/api/");

console.log(var1);
var1.then(res => console.log(res));
