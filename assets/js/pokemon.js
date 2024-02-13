function displayPokemon(response) {
  console.log(response);
  const pokeContainer = document.querySelector(".pokemon-container");
  const pokeImgContainer = document.querySelector(".img-wrapper");
  const headingOne = document.querySelector(".poke-name");
  headingOne.innerText = response.data.species.name;
  pokeContainer.appendChild(headingOne);

  // Getting both types
  response.data.types.forEach((type) => {
    const typeName = document.createElement("p");
    typeName.innerText = type.type.name;
    pokeContainer.appendChild(typeName);
  });

  const imgDiv = document.createElement("img");
  imgDiv.classList.add("poke--img");
  imgDiv.src = response.data.sprites.other.home.front_default;

  pokeImgContainer.appendChild(imgDiv);
}
let url = `https://pokeapi.co/api/v2/pokemon/67`;
axios.get(url).then(displayPokemon);
