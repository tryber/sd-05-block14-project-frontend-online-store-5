import React from 'react';

class ProductList extends React.Component {
  render() {
    return (
      <div className="product-list">
        <div className="hidden" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      </div>
    );
  }
}

export default ProductList;
