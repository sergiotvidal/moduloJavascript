fetch("https://api.github.com/users/sergiotvidal")
  .then(res => {
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.log("Error", e));

async function githubExample(
  url = "https://api.github.com/users/sergiotvidal"
) {
  try {
    let res = await fetch(url);
    let user = await res.json();
    console.log(user);
  } catch (e) {
    console.log(e);
  }
}

// esto es lo mismo de arriba, pero escrito con nomenclatura anterior
function githubExample(url = "https://api.github.com/users/sergiotvidal") {
  fetch(url)
    .then(res => {
      res
        .json()
        .then(data => {
          console.log(data);
        })
        .catch(e => {
          console.log(e);
        });
    })
    .catch(e => {
      console.log(e);
    });
}
