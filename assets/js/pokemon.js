function displayPokemon(response) {
  console.log(response);

  const headingThree = document.createElement("h3");
  headingThree.innerText = response.data.species.name;
  document.body.appendChild(headingThree);

  const imgDiv = document.createElement("img");
  imgDiv.classList.add("pokemon-img");
  // imgDiv.src = response.data.sprites.other.dream_world.front_default;
  imgDiv.src = response.data.sprites.other.home.front_default;

  // if (imgDiv.src === null) {
  //   response.data.sprites.other.home.front_default;
  // }
  document.body.appendChild(imgDiv);
}
let url = `https://pokeapi.co/api/v2/pokemon/1025`;
axios.get(url).then(displayPokemon);
