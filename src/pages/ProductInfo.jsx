import React from 'react';
import { Link } from 'react-router-dom';

class ProductInfo extends React.Component {
  render() {
    const { produto } = this.props;
    return (
      <Link to={`/details/${produto.id}`} className="product" key={produto.id} data-testid="product">
        <img className="productImg" src={produto.thumbnail} alt={produto.title} />
        <div>{produto.title}</div>
        <div className="productPrice">{`R$${produto.price.toFixed(2)}`}</div>
        {produto.shipping.free_shipping
          ? <div className="free-shipping" data-testid="free-shipping">Entrega grátis</div> : null}
      </Link>
    );
  }
}

export default ProductInfo;
