/**
 * HACER UN PROGRAMA QUE TE PIDA UN NUMERO1 Y LUEGO UN NUMERO2
 * LUEGO QUE TE PIDA LA OPERACIÓN QUE QUIERES HACER (SUMA, RESTA, MULT, DIV)
 * EN BASE A LO QUE SELECCIONE HACER LA OPERACIÓN
 */

let num1 = +prompt("enter a number");
let num2 = +prompt("enter another number");

let operation = prompt(
  "Which type of operation would you like to do? (Add/Substract/Multiplication/Division"
).toLowerCase();

number1 = isFinite(num1);
number2 = isFinite(num2);

if (number1 && number2) {
  if (operation == "add") {
    alert(num1 + num2);
  } else if (operation == "substract") {
    alert(num1 - num2);
  } else if (operation == "multiplication") {
    alert(num1 * num2);
  } else if (operation == "division") {
    alert(num1 / num2);
  } else {
    prompt(
      "Please, enter an operation name: Add, Substract, Multiplication, Division"
    );
  }
} else {
  alert("Those aren't numbers!");
}
