import React from 'react';
import { Link } from 'react-router-dom';

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
      <div>
        <Link to="/">Voltar</Link>
        <div data-testid="product-detail-name">{produto.title}</div>
      </div>
    ) : <div>CARREGANDO...</div>;
  }
}

export default ProductDetails;
