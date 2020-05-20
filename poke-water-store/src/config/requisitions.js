const axios = require('axios');
var pokemonss;

const getAllPokemon = async () => {
    let newPokemonsData = [];
    let pokemons = await axios.get("https://pokeapi.co/api/v2/type/water/")
                       .then(pokemon =>pokemon.data.pokemon).catch(error => error)
    
    await pokemons.map(async (pokemon, index) => {
        newPokemonsData[index] = await completePokemonData(pokemon.pokemon, index)
    })   
    
    return await savePokemons(newPokemonsData)
}



const savePokemons = async pokemonsData=> {
    if(!checkCache()) {
        await localStorage.setItem('pokemons', JSON.stringify(pokemonsData))
    }
    return pokemonsData;
};

const checkCache = () => (localStorage.getItem('pokemons') != null) ? true : false;

const getPokemonByName = async (pokemonName) => {
    var pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(pokemonData => pokemonData.data)
    return pokemon
}

const completePokemonData = async (pokemon, id) => {
    let spritePokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(pokemon => {
        return [
            (pokemon.data.sprites.front_default != null) ? pokemon.data.sprites.front_default : "https://i.pinimg.com/originals/95/d5/cd/95d5cded00f3a3e8a98fb1eed568aa9f.png",
            (pokemon.data.sprites.back_default != null) ? pokemon.data.sprites.back_default : "https://i.pinimg.com/originals/95/d5/cd/95d5cded00f3a3e8a98fb1eed568aa9f.png",
            (pokemon.data.sprites.front_female != null) ? pokemon.data.sprites.front_female : "https://i.pinimg.com/originals/95/d5/cd/95d5cded00f3a3e8a98fb1eed568aa9f.png",
            (pokemon.data.sprites.back_female != null) ? pokemon.data.sprites.back_female : "https://i.pinimg.com/originals/95/d5/cd/95d5cded00f3a3e8a98fb1eed568aa9f.png",
        ]
    })
    pokemon.sprites = spritePokemon
    pokemon.id = id
    pokemon.price = (Math.random() * 1000).toFixed(2);
    return pokemon
}

const finishCart = () => {
    let cart  = localStorage.getItem('cart')
    localStorage.setItem('cart',JSON.stringify([]))
    return cart / 100;    
}

let functions = {
    getAllPokemon:getAllPokemon, getPokemonByName:getPokemonByName,finishCart:finishCart, pokemons:pokemonss
}
export default functions;