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
    return (
      <div>
        {this.state.categorias.map((categoria) =>
          <div data-testid="category" key={categoria.id}>{categoria.name}</div>)}
      </div>
    );
  }
}

export default Categorias;
