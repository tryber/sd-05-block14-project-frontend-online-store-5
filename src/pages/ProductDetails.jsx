import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

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
    const { addCart } = this.props;
    return produto ? (
      <div>
        <Link to="/">Voltar</Link>
        <div data-testid="product-detail-name">{produto.title}</div>
        <Button testId="product-detail-add-to-cart" produto={produto} addCart={addCart} />
      </div>
    ) : <div>CARREGANDO...</div>;
  }
}

export default ProductDetails;
