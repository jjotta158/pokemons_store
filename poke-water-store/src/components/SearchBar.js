import React, {useState, useEffect} from 'react'
import functions from '../config/requisitions.js';
import {FaSearch} from 'react-icons/fa'
var timeout;
const SearchBar = () => {
    const [search, setSearch] = useState('');
    useEffect(() => {
        clearTimeout(timeout);        
        timeout = setTimeout(() => {
            console.log(search)
            functions.getPokemonByName(search)
        }, 1000)
    }, [search])
    return (
        <div style={styles.divSearchbar}>
            <label for="search"></label>
            <input style={styles.input} onKeyUp={(e) => setSearch(e.target.value)} id="search"></input>
            <FaSearch></FaSearch>
        </div>
    )
}
const styles = {
    divSearchbar:{
        width:"100%", 
        backgroundColor:'white',              
        borderRadius:'1vmin', 
        height:'5vmin', 
        border:'0.3vmin solid #FF6055', 
        display:'flex', 
        justifyContent:'space-between',
        alignItems:'center',
        fontSize:'4vmin',
        padding:'5px',
        color:'#CC281D'
    },
    input:{
        width: '95%', 
        height:'100%',
        border: 'none',
        marginRight:'5px',
        backgroundColor: 'transparent', 
        TextIndent: '5vmin'
    }
}
export default SearchBar;