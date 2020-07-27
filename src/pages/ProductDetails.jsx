import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { produto: null };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`https://api.mercadolibre.com/items/${id}`).then((data) => data.json())
      .then((result) => this.setState({ produto: result }));
  }

  render() {
    const { produto } = this.state;
    return produto ? (
      <div data-testid="product-detail-name">{produto.title}</div>
    ) : <div>CARREGANDO...</div>;
  }
}

export default ProductDetails;
