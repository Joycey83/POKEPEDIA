function displayPokemon(response) {
  console.log(response);
}
let url = `https://pokeapi.co/api/v2/pokemon/123`;
axios.get(url).then(displayPokemon);
