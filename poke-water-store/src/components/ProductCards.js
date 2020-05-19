import React, {useState, useEffect} from 'react';
import {FaPlus} from 'react-icons/fa'
const ProductCards = ({pokemons, adicionaPokemon}) => {
    let allPokemons = pokemons
    let ShowRoom = getAleatoryPokemon()
    function getAleatoryPokemon() {
        let i =0;
        let listPokemons = [];
        while ( i < 15) {
            var aleatorio = Math.floor(Math.random() * allPokemons.length);
            if (listPokemons.indexOf(aleatorio) == -1 && allPokemons[aleatorio] != null){
                listPokemons.push(aleatorio)
                i++
            }else {
                
            }
        }
        return listPokemons
    }

    return(
        <section style={styles.cards}>
            {allPokemons.map((value, index) => {                
                if (ShowRoom.indexOf(index) != -1) {                    
                    return (
                        <div style={styles.card} id="card">                            
                            <div style={styles.conteudo}>                                
                                <img src={value.sprites[0]} style={{width:'100px'}}></img>
                                <span>{value.name}</span>
                                <span style={{color:'#FF6055'}}>{`R$ ${value.price}`}</span>
                            </div>
                            <div style={styles.footer}>
                                <button onClick={() => adicionaPokemon(value.id,value.name, value.price, 1)} style={{border:'none',backgroundColor:'transparent', color:'#fff'}}>ADD</button>
                                <FaPlus></FaPlus>
                            </div>
                        </div>
                    )
                }})}
        </section>
    )
}

const styles = {
    cards:{
        display:'flex',
        flexDirection:"row",
        flexWrap:'wrap',
        justifyContent:'center',
        alignCenter:'center'
    },
    card:{
        width:'180px',
        height:'200px',
        display:'flex',
        flexDirection:'column',
        boxShadow:'1px 1px 10px 2px rgba(0,0,0,0.2)',
        justifyContent:'space-between',
        alignItems:'center',
        margin:'1vmin',
        borderRadius:'1vmin',
        
    },
    conteudo:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        textTransform:'capitalize'
    },
    footer:{
        width:'100%',
        height:'40px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#CC281D',
        color: '#fff',
        fontSize:'10px',
        borderBottomLeftRadius:'1vmin',
        borderBottomRightRadius:'1vmin'
    }
}

export default ProductCards;