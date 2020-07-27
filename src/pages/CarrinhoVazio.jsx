import React from 'react';

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
