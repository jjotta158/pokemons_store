import React, {useState} from 'react';
import SearchBar from './SearchBar'

const Header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.div}>
                <div className="logo" style={{width:'100%', display:'flex', justifyContent:'center'}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png" style={styles.logo}/>
                </div>                
            </div>
            
        </header>
    )
}
const styles = {
    header:{
        width:'100%',
        height:'10vmin',
        backgroundColor:'#CC281D',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
    },
    div:{
        width:'90%',
        height:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    logo:{
        width:'20%',
        height:'20%',
        display:'flex',
        alignItems:'center',
    }
}

export default Header;