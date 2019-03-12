// Una función que recibe un string cualquiera y te dice si es palíndromo o no

function palindrome(str) {
  let frase = str
    .split("")
    .reverse()
    .join("");
  return frase == str
    ? console.log("Es palíndromo")
    : console.log("No es palíndromo");
}

palindrome("asa");

palindrome("calamar");
