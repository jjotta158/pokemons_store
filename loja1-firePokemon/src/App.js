import React, {useState, useEffect} from 'react';
import functions from './config/requisitions';
import './App.css';
import Header from './components/Header'
import ProductCards from './components/ProductCards'
import Menu from './components/MenuCarrinho'
import { FaShoppingCart, FaUndo } from "react-icons/fa";

function App({pokemon}) {
  
  const [cart, setCart] = useState((localStorage.getItem('cart') != null ? JSON.parse(localStorage.getItem('cart')) : []))
  const [reload, setReload] = useState(false);
    
  const atualizaCarrinho = (id, name, price, qtd) => {
    let nada  = cart;
    
    if (checkInCart(id)) {
      return true 
    } else {
      setCart('nada');
      nada.push({id, name, price, qtd})
      setTimeout(() => {
        setCart(nada)
      },100)      
    }
    localStorage.setItem('cart', JSON.stringify(cart))
        
  }
  const checkInCart = (id) => {
    let updated = false;
    cart.map(pokemon => {
      if(pokemon.id === id) {
        updated = true;        
        pokemon.qtd += 1
        return pokemon.price = pokemon.price * pokemon.qtd
      }
    })
    if (updated) {
      setCart('nothing')
      setTimeout(() => {
        setCart(cart)
      },100)
      localStorage.setItem('cart', JSON.stringify(cart))
      return true;
    }
    return false;
  }  
  
  
  return (
    <div>
      <Header/>
      <br></br>
      <div style={styles.main} className="main">
        <div style={{width:'80%'}} className="listProducts"><ProductCards pokemons={pokemon} adicionaPokemon={atualizaCarrinho}/></div>
        <aside className="cart" style={{display:'block', boxShadow: '7px 7px 10px 7px rgba(0,0,0,0.2)', padding:'1vmin', borderRadius:'1vmin'}}>
          <Menu cart={cart}/>        
          <button id="reload" onClick={() => setReload(!reload)} style={{width:'100%', height:'5vmin', border:'none', backgroundColor:'#CC281D', color:'white', marginTop:'1vmin'}}>Reload</button>
        </aside>
        <div className='modal' style={{display:'none'}} id="cartModal">
          <div id="cartContainer">
            <Menu cart={cart}/>          
          </div>
        </div>
        <div className='modal' id='finishModal' style={{display:'none'}}>
            <div id="finishContainer">
                <h2 style={{color:'#666'}}>Parabéns você ganhou:</h2>
                <h1 style={{color:'#666'}}><span style={{color:'#CC281D'}}>R$ {(localStorage.getItem('totalCart') * 0.01).toFixed(2)}</span> de volta</h1>
            </div>
        </div>
        <div className="floats" style={{display:'none'}}>
          <button onClick={() => setReload(!reload)}>
            <FaUndo></FaUndo>
          </button>
          <button onClick={() => {
            let cartModal = document.getElementById('cartModal')
            cartModal.style.display = 'flex'
          }}>
            <FaShoppingCart></FaShoppingCart>
          </button>
        </div>
      </div>
    </div>
  );
}
const styles = {
  main:{
    width:'95%',
    display:'flex',
    flexDirectino:'row',
    justifyContent:'space-between',
    alignItems:'flex-start',
    
  }
}

export default App;
