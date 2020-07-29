import React from 'react';
import { Link } from 'react-router-dom';

class Imagem extends React.Component {
  render() {
    const { cartImage, cartSize } = this.props;
    return (
      <Link className="cart-link" data-testid="shopping-cart-button" to="/cart">
        {`(${cartSize})`}
        <img className="cart-img" src={cartImage} alt="shopping cart" />
      </Link>
    );
  }
}

export default Imagem;
