// Una función que al pasarle un array de users los haga de type admin (solo a los pares)

let people = [
  {
    name: "Pepe",
    location: "Coruña",
    type: "user"
  },
  {
    name: "Yisuscraist",
    location: "Madrid",
    type: "user"
  },
  {
    name: "Cañita Brava",
    location: "Monte Curuto",
    type: "user"
  },
  {
    name: "Fermín",
    location: "Barsalona",
    type: "user"
  }
];

// function isAdmin(people) {
//   for (let i = 0; i < people.length; i++) {
//     people[i].type = "admin";
//   }
// }

// isAdmin(people);
// console.log("People who is admin -> ", people);

function makeAdmin(users) {
  let newArray = users.map((user, i) => {
    if (i % 2 != 0) {
      user.type = "admin";
    }
    return user;
  });
  return newArray;
}

let res = makeAdmin(people);
console.log(res);

// Una función que al pasarle un array de users nos los filtre por la localización que le pasemos

let userLocation = prompt("Introduce tu localización");

function locationFilter(people) {
  let result = people.filter((person, i) => {
    if (person.location == userLocation) {
      return true;
    }
    return false;
  });

  return result;
}

let res2 = locationFilter(people);
console.log(`The user who is in ${userLocation} is -> `, res2);

// solución de Rubén (sin el prompt)

// function filterByLocation(people, location) {
//   return people.filter((user, i) => {
//     if (user.location == location) return true;
//     return false;
//   });
// }

// let res2 = filterByLocation(people, "Madrid");
// console.log(res2);

//otra forma mas de escribirlo

// function filterByLocation(people, location) {
//   return people.filter(user => location == user.location);
// };
