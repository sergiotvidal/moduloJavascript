// SI NUMERO ESTÁ ENTRE 18 Y 28 INCLUÍDOS participantType = "Junior"
// SI ES MAYOR ... participantType = "Senior"
// SI NO ... participantType = null
// SI ES Junior, PREGUNTAR CUANTOS AÑOS LLEVA PROGRAMANDO
// Y MOSTRARLO ("Soy un Junior/Senior y llevo X años programando")

let age = +prompt("How old are you?");
let participantType = "";
let years = 0;

let isNumber = isFinite(age);

if (isNumber) {
  if (age >= 18 && age <= 28) {
    participantType = "Junior";
    years = +prompt("How many years have you been programming?");
  } else if (age > 28) {
    participantType = "Senior";
    years = +prompt("How many years have you been programming?");
  } else {
    participantType = null;
  }
}

if (participantType) {
  console.log(`Soy un ${participantType} y llevo ${years} años programando`);
} else {
  console.log("MADRE MÍA TODO MAL");
}

// if (participantType == "Junior" || participantType == "Senior") {
//   alert(
//     `You are a ${participantType} and you have been programming for ${years} years`
//   );
// } else {
//   null;
// }
