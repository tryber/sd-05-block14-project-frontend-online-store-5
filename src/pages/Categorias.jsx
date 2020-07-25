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
      <form className="categories">
        <label className="category" htmlFor="todas">Todas</label>
        <input
          className="radio"
          type="radio"
          name="categories"
          id="todas"
          onClick={() => reset()}
        />

        {categorias.map((categoria) => (
          <div>
            <label data-testid="category" className="category" htmlFor={categoria.id}>
              <input
                className="radio"
                id={categoria.id}
                name="categories"
                type="radio"
                onClick={() => onClick(categoria.id)}
                key={categoria.id}
              />
              {categoria.name}
            </label>
          </div>
        ))}
      </form>
    );
  }
}

export default Categorias;
