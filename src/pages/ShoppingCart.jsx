import React from 'react';
import { Link } from 'react-router-dom';
import CarrinhoVazinho from './CarrinhoVazio';
import QuantidadeCarrinho from '../components/QuantidadeCarrinho';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const { cart } = this.props;
    this.state = { products: cart };
    this.loadCart = this.loadCart.bind(this);
  }

  componentDidMount() {
    this.loadCart();
  }

  loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    this.setState({ products: cart || [] });
  }

  render() {
    const { inc, dec } = this.props;
    const { products } = this.state;
    if (products.length === 0) return <CarrinhoVazinho />;
    return (
      <div>
        <Link to="/">Voltar</Link>
        {products ? products.map((product) => (
          <div key={product.product.id}>
            <div data-testid="shopping-cart-product-name">{product.product.title}</div>
            <QuantidadeCarrinho
              max={product.product.available_quantity}
              inc={inc}
              dec={dec}
              qnt={product.quantity}
            />
          </div>
        )) : null}
        <Link to="/checkout" data-testid="checkout-products">Finalizar Compra</Link>
      </div>
    );
  }
}

export default ShoppingCart;
