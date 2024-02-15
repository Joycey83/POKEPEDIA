const inputElement = document.querySelector("#pokemon-name-input");
const searchBtn = document.querySelector("#search-btn");
const shuffleBtn = document.querySelector("#shuffle-button");
const pokemonContainer = document.querySelector(".poke-container");
const pokemonNum = document.querySelector(".poke-number");
const pokemonCard = document.querySelector("#pokemon-card");

const pokeApiUrl = " https://pokeapi.co/api/v2/pokemon/";

const catchThePokemon = async () => {
  card.innerHTML = "";
  // Generate a random number between 1 and 150
  let pokemonId = Math.floor(Math.random() * 350) + 1;
  // Combine the pokeapi url with pokemon id
  const finalUrl = pokeApiUrl + pokemonId;
  // Fetch generated URL using axios
  try {
    const fetchPokemon = await axios.get(finalUrl);
    displayPokemon(fetchPokemon.data);
  } catch (error) {
    console.log(error);
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

  card.appendChild(nameElement);
  card.appendChild(hpElement);
  card.appendChild(imgElement);
  card.appendChild(typesContainer);
  card.appendChild(statsElement);
};
