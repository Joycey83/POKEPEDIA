function displayPokemon(response) {
  console.log(response);
  const pokeContainer = document.querySelector(".pokemon-container");
  const pokeImgContainer = document.querySelector(".img-wrapper");
  const headingOne = document.querySelector(".poke-name");
  headingOne.innerText = response.data.name;
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

  // Fetch more info
  let url = `https://pokeapi.co/api/v2/pokemon-species/${response.data.id}/`;
  axios.get(url).then(displayMoreInfo);
}

let url = "https://pokeapi.co/api/v2/pokemon/54";
axios.get(url).then(displayPokemon);

function sanitizeString(str) {
  return str.replace(/[^0-9a-z\s]/gi, "");
}

function displayMoreInfo(response) {
  console.log(response);
  const pokeContainer = document.querySelector(".poke--info");
  const description = document.createElement("span");
  description.innerText = sanitizeString(
    response.data.flavor_text_entries[7].flavor_text
  );
  pokeContainer.appendChild(description);

  console.log(response.data.flavor_text_entries[7].flavor_text);
}
