// Una función que reciba un nombre de una persona de cualquier forma y tipo --> "   rUBen   " y te lo devuelva con buen formato --> Ruben

function beautifyName(name) {
  name = name.trim().toLowerCase();
  return console.log(name.charAt(0).toUpperCase() + name.slice(1));
}

beautifyName("    seRGiO ");
