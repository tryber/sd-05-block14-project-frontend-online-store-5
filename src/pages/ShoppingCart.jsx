import React from 'react';
import CarrinhoVazinho from './CarrinhoVazio';
// import imagem from './shopping-cart.jpg';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const { carrinho } = this.props;
    this.state = { products: carrinho };
  }

  render() {
    const { products } = this.state;
    if (products.length === 0) return <CarrinhoVazinho />;
    return (
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <div data-testid="shopping-cart-product-name">{product.title}</div>
            <div data-testid="shopping-cart-product-quantity">1</div>
          </div>
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
