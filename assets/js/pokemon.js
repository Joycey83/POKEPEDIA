const MAX_POKEMON = 321;

const inputElement = document.querySelector("#pokemon-name-input");
const searchBtn = document.querySelector("#search-btn");
const shuffleBtn = document.querySelector("#shuffle-btn");
const pokemonContainer = document.querySelector(".poke-container");
const pokemonNum = document.querySelector(".poke-number");
const pokemonName = document.querySelector(".poke-name");
const pokemonImg = document.querySelector(".poke-img");

axios
  .get(`https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}`)
  .then((response) => {
    allPokemons = response.data.results;
    console.log(allPokemons);
  });

// Display my pokemon
