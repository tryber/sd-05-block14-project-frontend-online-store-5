import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

class ProductInfo extends React.Component {
  render() {
    const { produto, produto: { thumbnail } } = this.props;
    return (
      <div data-testid="product" className="product">
        <Link to={`/details/${produto.id}`} className="prodLink" data-testid="product-detail-link">
          <div className="productImgContainer">
            <img className="productImg" src={thumbnail.replace(/-I/i, '-O')} alt={produto.title} />
          </div>
          <div className="productTitle">{produto.title}</div>
          <div className="productPrice">{`R$${produto.price.toFixed(2)}`}</div>
          {produto.shipping.free_shipping
            ? <div className="free-shipping" data-testid="free-shipping">
                Entrega grátis
              </div>
              : null}
        </Link>
        <Button testId="product-add-to-cart" produto={produto} addCart={addCart} />
      </div>
    );
  }
}

export default ProductInfo;
