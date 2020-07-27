import React from 'react';
import ProductInfo from './ProductInfo';

class ProductList extends React.Component {
  render() {
    const { value } = this.props;
    return value === null ? (
      <div className="product-list">
        <div className="hidden" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      </div>
    ) : (
      <div className="product-list">
        {value.results.map((produto) => (
          <ProductInfo produto={produto} />
        ))}
      </div>
    );
  }
}

export default ProductList;
