import React from 'react';
import { Link } from 'react-router-dom';
import cartImage from './shopping-cart.jpg';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart">
          <img src={cartImage} alt="shopping cart" />
        </Link>
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      </div>
    );
  }
}

export default ProductList;
