const searchForm = document.querySelector("#search-form");
const inputElement = document.querySelector("#pokemon-name-input");
const generateBtn = document.querySelector("#generate-button");
const pokemonContainer = document.querySelector(".poke-container");
const pokemonRightContainer = document.querySelector(".poke-right-container");
const pokemonCard = document.querySelector("#pokemon-card");
const errorMessage = document.querySelector("#error-message");
const pokemonLimit = document.querySelector("#poke-limit");
const pokemonAttributes = document.querySelector(".poke-attributes");

const pokeApiUrl = " https://pokeapi.co/api/v2/pokemon/";

const catchThePokemon = async () => {
  pokemonCard.innerHTML = "";
  errorMessage.innerHTML = "";
  pokemonLimit.innerHTML = "";
  pokemonContainer.innerHTML = "";
  pokemonRightContainer.innerHTML = "";

  let pokemonName = inputElement.value.toLowerCase();
  // Generate a random number between 1 and 500
  let pokemonId = Math.floor(Math.random() * 1025) + 1;

  let finalUrl = pokeApiUrl;
  if (!isNaN(pokemonName) && pokemonName > 1025) {
    pokemonLimit.innerHTML = `<img class="poke-limit-img" src="assets/image/cant-catch-all-logo.jpg"/>`;
    return;
  } else if (pokemonName) {
    finalUrl += pokemonName;
  } else {
    finalUrl += pokemonId;
  }

  // clear the search input
  inputElement.value = "";

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
  const pokeId = data.id;
  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.home.front_default;
  // const imgSrc = data.sprites.other.dream_world.front_default;
  const pokeName = data.species.name.toUpperCase();
  const pokeHeight = data.height;
  const pokeWeight = data.weight;
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpecialAtk = data.stats[3].base_stat;
  const statSpecialDef = data.stats[4].base_stat;
  const statSpeed = data.stats[5].base_stat;

  //   Create a new container for the type spans
  const typesContainer = document.createElement("div");
  typesContainer.className = "pokeTypeSpan-container";

  // Getting both types and adding specific color type
  data.types.forEach((type) => {
    const typeName = document.createElement("span");
    typeName.className = "poke-type-span";
    typeName.innerText = type.type.name;
    typeName.classList.add(createColorSpan(type.type.name));
    typesContainer.appendChild(typeName);
  });

  const pokemonCard = document.createElement("div");
  pokemonCard.className = "pokemon-card";

  // Create elements
  const idElement = document.createElement("p");
  idElement.className = "poke-id-num";
  idElement.innerHTML = `<span>#${String(pokeId).padStart(3, "0")}</span> `;

  const nameElement = document.createElement("h1");
  nameElement.className = "poke-name";
  nameElement.textContent = pokeName;

  const hpElement = document.createElement("p");
  hpElement.className = "hp";
  hpElement.innerHTML = `<span class="hp-heading">HP</span> ${hp}`;

  const imgElement = document.createElement("img");
  imgElement.className = "poke-img";
  imgElement.src = imgSrc;

  const heightElement = document.createElement("div");
  heightElement.className = "poke-height";
  heightElement.innerHTML = `<h5>Height</h5>
  <span class="height">${pokeHeight} m</span>`;
  pokemonAttributes.appendChild(heightElement);

  const weightElement = document.createElement("div");
  weightElement.className = "poke-weight";
  weightElement.innerHTML = `<h5>Weight</h5> <span class="weight">${pokeWeight} kg</span>`;
  pokemonAttributes.appendChild(weightElement);

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
      <h3>${statSpecialAtk}</h3>
      <p>Special.Atk</p>
    </div>
    <div>
      <h3>${statSpecialDef}</h3>
      <p>Special.Def</p>
    </div>
    <div>
      <h3>${statSpeed}</h3>
      <p>Speed</p>
    </div>
  
  `;
  pokemonCard.appendChild(idElement);
  pokemonCard.appendChild(nameElement);
  pokemonCard.appendChild(hpElement);
  pokemonCard.appendChild(imgElement);
  pokemonCard.appendChild(typesContainer);
  pokemonRightContainer.appendChild(heightElement);
  pokemonRightContainer.appendChild(weightElement);
  pokemonRightContainer.appendChild(statsElement);

  pokemonContainer.appendChild(pokemonCard);
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

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  catchThePokemon();
});

window.addEventListener("load", catchThePokemon);
