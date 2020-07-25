import React from 'react';

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
          <div className="product" key={produto.id} data-testid="product">
            <img src={produto.thumbnail} alt={produto.title} />
            {produto.title}
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
