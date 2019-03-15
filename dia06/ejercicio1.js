// CUÁL ES EL ÚLTIMO VALOR QUE ALERTA ESTE BLOQUE:

// let i = 4;

// while (i) {
//   //aquí alertaría hasta el 1, porque el 0 es un FALSY
//   alert(i--);
// }

// La respuesta es 1

// QUÉ VALORES ALERTA ESTE BLOQUE

let i = 0;
while (++i < 3) alert(i); // Empieza en el 1, llega hasta el 2

let x = 0;
while (x++ < 3) alert(x); // Alerta hasta el 3

//EL VALOR QUE TOMA PARA VALORAR ES EL STATEMENT DE LA IZQUIERDA (X++ < 3) Y EL QUE MUESTRA ES EL DE LA DERECHA, POR ESO EN EL PRIMER EJEMPLO SOLO MUESTRA HASTA EL 2, Y EN EL OTRO HASTA EL 3
