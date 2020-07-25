import React from 'react';
// import Imagem from './shopping-cart.jpg';

class CarrinhoVazio extends React.Component {
  render() {
    return (
      <div className="empty-cart" data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </div>
    );
  }
}

export default CarrinhoVazio;
