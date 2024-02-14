const inputElement = document.querySelector("#pokemon-name-input");
const searchBtn = document.querySelector("#search-btn");
const shuffleBtn = document.querySelector("#shuffle-btn");
const pokemonContainer = document.querySelector(".poke-container");
const pokemonNum = document.querySelector(".poke-number");
const pokemonName = document.querySelector(".poke-name");
const pokemonImg = document.querySelector(".poke-img");

const pokeApiUrl = " https://pokeapi.co/api/v2/pokemon/";
// generate 321 Pokemon function

function generatePokemon() {
  const pokemonId = Math.floor(Math.random() * 350) + 1;

  // Combine the pokeapi url with pokemon id
  const finalUrl = pokeApiUrl + pokemonId;
  axios
    .get(finalUrl)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
}
