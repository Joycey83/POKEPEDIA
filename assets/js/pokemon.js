function displayPokemon(response) {
  console.log(response);
  const pokeContainer = document.querySelector(".pokemon-container");
  const pokeImgContainer = document.querySelector(".img-wrapper");
  const headingOne = document.querySelector(".poke-name");
  headingOne.innerText = response.data.name;
  pokeContainer.appendChild(headingOne);

  // Getting both types and adding specific color type
  response.data.types.forEach((type) => {
    const typeName = document.createElement("span");
    typeName.innerText = type.type.name;
    typeName.classList.add(createColorSpan(type.type.name));
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

let url = "https://pokeapi.co/api/v2/pokemon/50";
axios.get(url).then(displayPokemon);

function displayMoreInfo(response) {
  const pokeInfoContainer = document.querySelector(".poke--info");
  console.log(response);
  const description = document.createElement("span");
  const pokeJpnLang = document.createElement("h2");
  const pokeChnLang = document.createElement("h2");
  pokeJpnLang.innerText = response.data.genera[0].genus;
  pokeChnLang.innerText = response.data.genera[2].genus;
  document.body.appendChild(pokeJpnLang);
  document.body.appendChild(pokeChnLang);

  console.log(pokeJpnLang);
  console.log(pokeChnLang);

  description.innerText = response.data.flavor_text_entries[9].flavor_text;
  pokeInfoContainer.appendChild(description);

  console.log(response.data.flavor_text_entries[9].flavor_text);
}

function createColorSpan(type) {
  switch (type.toLowerCase()) {
    case "grass":
      return "grass-type";
    case "fire":
      return "fire-type";
    case "water":
      return "water-type";
    case "poison":
      return "poison-type";
    case "rock":
      return "rock-type";
    case "ground":
      return "ground-type";
    case "normal":
      return "normal-type";
    case "flying":
      return "flying-type";
    case "bug":
      return "bug-type";
    case "electric":
      return "electric-type";
    case "fairy":
      return "fairy-type";
    case "psychic":
      return "psychic-type";
    case "ice":
      return "ice-type";
    case "fighting":
      return "fighting-type";
    case "ghost":
      return "ghost-type";
    case "dark":
      return "dark-type";
    case "steel":
      return "steel-type";
    case "dragon":
      return "dragon-type";
    default:
      return "pokemon-type-span";
  }
}
