import React from 'react';
import { Link } from 'react-router-dom';

class ProductInfo extends React.Component {
  render() {
    const { produto } = this.props;
    return (
      <div data-testid="product">
        <Link to={`/details/${produto.id}`} className="product" data-testid="product-detail-link">
          <img className="productImg" src={produto.thumbnail} alt={produto.title} />
          <div>{produto.title}</div>
          <div className="productPrice">{`R$${produto.price.toFixed(2)}`}</div>
          {produto.shipping.free_shipping
            ? <div className="free-shipping" data-testid="free-shipping">Entrega grátis</div>
            : null}
        </Link>
      </div>
    );
  }
}

export default ProductInfo;
