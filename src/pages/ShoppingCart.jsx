import React from 'react';
import { Link } from 'react-router-dom';
import CarrinhoVazinho from './CarrinhoVazio';
import QuantidadeCarrinho from './QuantidadeCarrinho';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const { carrinho } = this.props;
    this.state = { products: carrinho };
  }

  render() {
    const { inc, dec } = this.props;
    const { products } = this.state;
    if (products.length === 0) return <CarrinhoVazinho />;
    return (
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <div data-testid="shopping-cart-product-name">{product.title}</div>
            <QuantidadeCarrinho
              inc={inc}
              dec={dec}
            />
          </div>
        ))}
        <Link to="/checkout" data-testid="checkout-products">Finalizar Compra</Link>
      </div>
    );
  }
}

export default ShoppingCart;
