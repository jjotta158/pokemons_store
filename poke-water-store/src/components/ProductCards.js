import React from 'react';
import {FaPlus} from 'react-icons/fa'
const ProductCards = ({pokemons, adicionaPokemon}) => {
    
    let allPokemons = pokemons
        allPokemons.filter((pokemon) => {
            return pokemon != null
        })
        let ShowRoom = getAleatoryPokemon()

    function getAleatoryPokemon() {
        let i =0;
        let listPokemons = [];
        while ( i < allPokemons.length) {
            var aleatorio = Math.floor(Math.random() * allPokemons.length);
            if (listPokemons.indexOf(aleatorio) === -1 && allPokemons[aleatorio] != null){
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
                if (ShowRoom.indexOf(index) !== -1) {                    
                    
                    return (
                        <div style={styles.card} id="card">                            
                            <div style={styles.conteudo}>                                
                                <img src={value.sprites[0]} style={{width:'100px'}} alt='{value.name}'></img>
                                <span style={{color:'#3F464D', fontWeight:'bold'}}>{value.name}</span>
                                <span style={{color:'#2186C4'}}>{`R$ ${value.price}`}</span>
                            </div>
                            <div style={styles.footer}>
                                <button onClick={() => {                                    
                                    adicionaPokemon(value.id,value.name, value.price, 1)
                                }} style={{border:'none',backgroundColor:'transparent', color:'#fff'}}>ADD</button>
                                <FaPlus></FaPlus>
                            </div>
                        </div>
                    )
                } else {
                    return false
                }})}
        </section>
    )
}

const styles = {
    cards:{
        width:'90%',
        display:'flex',
        flexDirection:"row",
        flexWrap:'wrap',
        justifyContent:'center',
        alignCenter:'center',
        
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
        backgroundColor:'rgba(126, 206, 252,0.05)'
        
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
        backgroundColor:'#3F464D',
        color: '#3F464D',
        fontSize:'10px',
        borderBottomLeftRadius:'1vmin',
        borderBottomRightRadius:'1vmin'
    }
}

export default ProductCards;