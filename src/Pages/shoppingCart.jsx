import React from 'react';
import imagem from './shopping-cart.jpg'

class ShoppingCart extends React.Component {
    constructor(props){
      super(props)
    }
    
    render(){
    return (
      <div>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
        <button data-testid="shopping-cart-button">
          <img src={imagem}/>
        </button>
      </div>
    );
    }
}

export default ShoppingCart;
