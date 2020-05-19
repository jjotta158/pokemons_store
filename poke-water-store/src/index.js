import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import functions from './config/requisitions'
import * as serviceWorker from './serviceWorker';
async function init() {
  let pokemon = await functions.getAllPokemon();
  console.log(await functions.getAllPokemon())
  return ReactDOM.render(
    <React.StrictMode>
      <App pokemon={pokemon} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
init()


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
