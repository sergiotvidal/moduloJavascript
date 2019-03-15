// una función que me retorne true si soy mayor de edad o retorne una alerta de confirmación de si mis padres me dieron permiso

function checkAge(age) {
  // FORMA 1
  //   if (age >= 18) {
  //     return true;
  //   } else {
  //     confirm("Acceder con el permiso de tus padres.");
  //   }

  // FORMA2
  // function checkAge(age) {
  // if (age >= 18) return true;
  // return confirm("Acceder con el permiso de tus padres.")
  // }

  // funciones que hacen saltar un diálogo en la web: prompt, alert y confirm

  // EN TERNARIO FORMA3
  // return age >= 18 ? true : confirm("Acceder con el permiso de tus padres.");

  //  FORMA4
  return age >= 18 || confirm("Acceder con el permiso de tus padres.");
}

checkAge(17);
