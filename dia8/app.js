/*
 *  1, 2, 3... GO!
 */

// REPASO DE FUNCIONES

//función declarativa:

function test() {
  // lo que sea
  typeof null; // el null es un objecto
  return null;
}

//función de expresión:

const nombre = function(num1, num2) {
  //lo que sea aquí dentro
  return 8;
};

console.log(nombre()); // imprime el return de la función
console.log(test()); // imprime el resultado de la función, en este caso UNDEFINED pq no tiene un return definido

// ARROW FUNCTIONS


// son funciones anónimas, pueden dar problemas

//si es una función de una sola línea, al ser una arrow function, puede omitirse el return

//si la arrow funct apunta a un this, está apuntando al documento entero aunque esté dentro de una función, por ejemplo, le pones this.nombre y busca a nivel general un name

function test() {

  createHote(
    return null
  )
}

const nombre = function(num1, num2){
  return num1 + num2;
}

const suma = (num1, num2) => num1 + num2

const suma = (num1, num2) => {
  let access = checkPermissions();
  if(!access) return "No puedes entrar";
  
  return num1 + num2;
}

