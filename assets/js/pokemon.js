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
