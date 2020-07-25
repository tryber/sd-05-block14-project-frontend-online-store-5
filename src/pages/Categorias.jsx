import React from 'react';
import { getCategories } from '../services/api';

class Categorias extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categorias: [] };
  }

  componentDidMount() {
    getCategories().then((resolve) => this.setState({ categorias: resolve }));
  }

  render() {
    const { categorias } = this.state;
    const { onClick, reset } = this.props;
    return (
      <div className="categories">
        <div onClick={() => reset()} className="category">
          Todas
        </div>
        {categorias.map((categoria) => (
          <div
            onClick={() => onClick(categoria.id)}
            className="category"
            data-testid="category"
            key={categoria.id}
          >
            {categoria.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categorias;
