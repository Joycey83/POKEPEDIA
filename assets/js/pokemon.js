const inputElement = document.querySelector("#pokemon-name-input");
const generateBtn = document.querySelector("#generate-button");
const pokemonContainer = document.querySelector(".poke-container");
const pokemonNum = document.querySelector(".poke-number");
const pokemonCard = document.querySelector("#pokemon-card");
const errorMessage = document.querySelector("#error-message");
const pokemonLimit = document.querySelector("#poke-limit");

const pokeApiUrl = " https://pokeapi.co/api/v2/pokemon/";

const catchThePokemon = async () => {
  pokemonCard.innerHTML = "";
  errorMessage.innerHTML = "";
  pokemonLimit.innerHTML = "";

  let pokemonName = inputElement.value.toLowerCase();
  // Generate a random number between 1 and 400
  let pokemonId = Math.floor(Math.random() * 400) + 1;

  let finalUrl = pokeApiUrl;
  if (!isNaN(pokemonName) && pokemonName > 400) {
    pokemonLimit.innerHTML = `<img class="poke-limit-img" src="assets/image/cant-catch-all-logo.jpg"/>`;
    return;
  } else if (pokemonName) {
    finalUrl += pokemonName;
  } else {
    finalUrl += pokemonId;
  }

  // Fetch generated URL using axios
  try {
    const fetchPokemon = await axios.get(finalUrl);
    displayPokemon(fetchPokemon.data);
  } catch (error) {
    errorMessage.innerHTML = `<h2 class="error-heading">OH NOOOOOOOOOOOOO invalid Pokemon Number or Name! Please try again</h2> <img class="error-img" src="assets/image/no-pokemon-img.png"/>`;
  }
};

const displayPokemon = (data) => {
  console.log(data);
  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.dream_world.front_default;
  //   const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
  const pokeName = data.species.name.toUpperCase();
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

  //   Create a new container for the type spans
  const typesContainer = document.createElement("div");

  // Getting both types and adding specific color type
  data.types.forEach((type) => {
    const typeName = document.createElement("span");
    typeName.innerText = type.type.name;
    typeName.classList.add(createColorSpan(type.type.name));
    typesContainer.appendChild(typeName);
  });

  // Create elements
  const nameElement = document.createElement("h1");
  nameElement.className = "poke-name";
  nameElement.textContent = pokeName;

  const hpElement = document.createElement("p");
  hpElement.className = "hp";
  hpElement.innerHTML = `<span>HP</span> ${hp}`;

  const imgElement = document.createElement("img");
  imgElement.className = "poke-img";
  imgElement.src = imgSrc;

  const statsElement = document.createElement("div");
  statsElement.className = "stats";
  statsElement.innerHTML = `
    <div>
      <h3>${statAttack}</h3>
      <p>Attack</p>
    </div>
    <div>
      <h3>${statDefense}</h3>
      <p>Defense</p>
    </div>
    <div>
      <h3>${statSpeed}</h3>
      <p>Speed</p>
    </div>
  `;

  pokemonCard.appendChild(nameElement);
  pokemonCard.appendChild(hpElement);
  pokemonCard.appendChild(imgElement);
  pokemonCard.appendChild(typesContainer);
  pokemonCard.appendChild(statsElement);
};

// function to get the color types from each specific pokemon
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

generateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  catchThePokemon();
});
