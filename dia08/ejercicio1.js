const user = {
  rol: "admin"
};

function checkPermissions(user) {
  return user.rol == "admin";
}

function isEven(num, msg, user) {
  let access = checkPermissions(user);
  if (!access) return false;

  if (num % 2 == 0) {
    return msg || true;
  }
  return false;
}

// function test(pepe, extra) {
//   console.log(isEven(pepe) + 1 + extra); // retorna true=1 + 1 + valor de extra
//   return isEven(pepe);
// }

// // test(25);
// test(6, 8);

function test(pepe, extra, msg, user, desayuno) {
  if (desayuno) {
    desayuno = prompt("Qué quieres de desayuno?");
  }
  let access = checkPermissions(user);
  console.log(isEven(pepe, msg, user) + 1 + extra);
  return access ? desayuno : isEven(pepe, msg, user) + 1 + extra;
}

test(2, 2, "Jibiri", user, true);
