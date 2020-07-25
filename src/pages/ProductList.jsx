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
            <img className="productImg" src={produto.thumbnail} alt={produto.title} />
            <div>{produto.title}</div>
            <div className="productPrice">{`R$${produto.price.toFixed(2)}`}</div>
            {produto.shipping.free_shipping
              ? <div className="free-shipping">Entrega grátis</div> : null}
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
