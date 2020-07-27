import React from 'react';
import { getCategories } from '../services/api';

class Categorias extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categorias: [] };
    this.capitalize = this.capitalize.bind(this);
  }

  componentDidMount() {
    getCategories().then((resolve) => this.setState({ categorias: resolve }));
  }

  capitalize(value = this.state.value) {
    return value ? value.charAt(0).toUpperCase() + value.slice(1) : null;
  }

  render() {
    const { categorias } = this.state;
    const { onClick, reset, value } = this.props;
    return (
      <form className="categories">
        <div className="category-showvalue">{this.capitalize(value)}</div>
        <div className="categories-title">Categorias</div>
        <label className="category" htmlFor="todas">Todas</label>
        <input
          className="radio"
          type="radio"
          name="categories"
          id="todas"
          onClick={() => reset()}
        />
        {categorias.map((categoria) => (
          <div key={categoria.id}>
            <label data-testid="category" className="category" htmlFor={categoria.id}>
              <input
                className="radio"
                id={categoria.id}
                name="categories"
                type="radio"
                onClick={() => onClick(categoria.id)}
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
