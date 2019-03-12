// UN PROMPT QUE TE PREGHUNTE LA EDAD, SI TIENES < 18 CONSOLE.LOG("ERES UN NIÑO")
// SI TIENES > 18 CONSOLE.LOG("PUEDES VOTAR")

// let age = 0;

// age = +prompt("How old are you?")

// switch (age) {
//     case < 18: // no lo acepta
//         console.log("Ur still a kid");
//         break;

//     case >= 18:
//         console.log("You can vote!");

//     default:
//         break;
// }

// NO ADMITE LOS MAYOR QUÉ, MENOR QUÉ... CUALQUIER COSA CON LÓGICA NO LA ACEPTA, POR LO QUE HABRÍA QUE HACER TOOOOOODOS LOS CASOS DE EDAD ---> IDIOTEZ

// PASAR A SWITCH

let browser = prompt("Dime un browser");

// if (browser = "Vivaldi") {
// console.log("El mejor browser del mundo");
// }
// if (browser = "explorer") {
// console.log("Uffffffffff");
// }
// if (browser = "Chrome" || browser = "Mozilla") {
// console.log("Está bien");
// }

switch (browser) {
  case "Vivaldi":
    console.log("El mejor browser del mundo");
    break;
  case "explorer":
    console.log("Ufffffffff");
  case "Mozilla":
  case "Chrome":
    console.log("Está bien");
}
