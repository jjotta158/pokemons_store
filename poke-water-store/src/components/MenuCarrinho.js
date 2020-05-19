import React from 'react'
import ResumoCarrinho from './ResumoCarrinho'
import { FaWindowClose } from "react-icons/fa";
import functions from '../config/requisitions';
import '../App.css';
export default class Menu extends React.Component {
    constructor(props) {
        console.log(props)
        super(props)
        this.state = {
            cart:this.props.cart,
            backmoney:0
        }
    }
    getTotalCart() {
        let total = 0.0 ;
        if ( typeof this.state.cart == 'string') {
            this.setState({cart:[]})
        } else {
            this.state.cart.map(pokemon => {            
                total = total + parseFloat(pokemon.price)
            })
        }
        
        
        localStorage.setItem('totalCart', total.toFixed(2));
        return total.toFixed(2)
    }
    finishCart() {
        this.setState({backmoney:functions.finishCart()})
        if (document.getElementById('finishModal')) {
            let cartModal = document.getElementById('cartContainer')
            cartModal.style.display = 'none'
            document.getElementById('finishModal').style.display = 'flex'
            document.getElementById('finishModal').style.zIndex = 100000
        }
        setTimeout(() => {
            window.location.reload()
        }, 5000);
    }

    render() {
        return(
            <div style={styles.menu} id="cart">
                <div style={styles.header}>
                    <h2>Carrinho</h2>
                    <button style={{display:'none'}} id="closeCart" onClick={() => {
                        let cartModal = document.getElementById('cartModal')
                        cartModal.style.display = 'none'
                    }}>
                        <FaWindowClose ></FaWindowClose>
                    </button>
                </div>
                <ResumoCarrinho cart={this.state.cart}/>
                <div style={{width:'90%',height:'10vmin', borderBottom:'1px solid #ccc', borderTop:'1px solid #ccc', display:'flex', justifyContent:'space-between', fontWeight:'bolder', color:"#666", fontSize:'18px'}}>
                    <span>Total:</span>
                    <span>R$ {this.getTotalCart()}</span>
                </div>
                <br></br>
                <div style={styles.footer} id="footerCart">
                    <button style={{width:'94%', height:'5.5vmin', backgroundColor:'#CC281D', border:'none',color:'#eee', fontSize:'16px'}} onClick={() =>  this.finishCart()}>Finalizar</button>
                </div>
            </div>
        )
    }
}

const styles = {
    menu:{
        width:'350px',        
        display:'flex',        
        alignItems:'center',
        flexDirection:'column',        
        backgroundColor:'#eee',
    },  
    header:{    
        width:'98%',
        height:'5vmin',
        textAlign:'left',
        backgroundColor:'#eee',
        display:'flex',
        alignItems:'center',
        marginRight:'1vmin',
        justifyContent:'space-between',
        textIndent:'1.5vmin',
        color:'#666',
    },
    footer:{
        width:'99.9%',
        height:'7vmin',
        display:'flex',
        alignItems:'flex-start',
        justifyContent:'center',
        borderRadius:'0px'
    }

}