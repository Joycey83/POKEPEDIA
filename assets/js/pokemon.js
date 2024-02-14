const MAX_POKEMON = 320;

axios
  .get(`https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}`)
  .then((response) => {
    allPokemons = response.data.results;
    console.log(allPokemons);
  });
