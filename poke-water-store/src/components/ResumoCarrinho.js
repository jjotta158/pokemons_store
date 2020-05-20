import React from 'react';

export default class ResumoCarrinho extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cart:this.props.cart
        }
    }
    render() {
        return (
            <div style={{width:'100%',padding:'20px', minHeight:'1vmin'}}>

                {this.state.cart.map(pokemon => {
                    return(
                        <div style={styles.li}>
                            <span style={{textIndent:'3vmin', width:'7vmin'}} >{pokemon.name}</span>
                            <span style={{width:'5vmin'}}>R${parseFloat(pokemon.price).toFixed(2)}</span>
                            <span style={{width:'3vmin'}}>{pokemon.qtd}</span>
                        </div>
                    )
                })} 
            </div>
        )
    }
}

const styles = {
    li:{
        listStyleType:'none',
        textAlign:'center',
        textTransform:'capitalize',
        width:'auto',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        fontSize:'12px',
        color:'#666',
        fontWeight:'bolder',
        paddingRight:'2vmin'
    }
}