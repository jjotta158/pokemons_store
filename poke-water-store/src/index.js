import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import functions from './config/requisitions'
import * as serviceWorker from './serviceWorker';
async function init() {
  let pokemon = await functions.getAllPokemon();
  console.log(pokemon)
  let timeout = setTimeout(() => {
    if(pokemon !== true) {
      localStorage.setItem('pokemons', JSON.stringify(pokemon))
    } else {
      pokemon = JSON.parse(localStorage.getItem('pokemons'))
    }
    return ReactDOM.render(
      <React.StrictMode>
        <App pokemons={pokemon} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }, 1000)

if(pokemon.length > 0) {
  clearTimeout(timeout)
}
  
}
init()


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
