const pokemon = [
  {
    number: 1,
    name: 'Bulbasaur',
  },
  {
    number: 2,
    name: 'Ivysaur',
  },
  {
    number: 3,
    name: 'Venusaur',
  },
];

const getPokemonByNumber = (number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const pokemonSelected = pokemon.find(
        (pokemon) => pokemon.number === number
      );
      if (pokemonSelected) {
        resolve(pokemonSelected);
      } else {
        reject('El número de pokemón indicado no existe');
      }
    }, 5000);
  });

getPokemonByNumber(2)
  .then((pokemon) => {
    return pokemon.name;
  })
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    console.error(error);
  });

const getPokemon = async (number) => {
  try {
    const pokemon = await getPokemonByNumber(number);
    console.log(pokemon);
  } catch (error) {
    console.error(error);
  }
};

getPokemon(8);
