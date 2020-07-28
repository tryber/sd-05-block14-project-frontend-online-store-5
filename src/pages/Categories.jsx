import React, { Component } from 'react';
import * as Api from '../services/api';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: false };
  }

  componentDidMount() {
    Api.getCategories().then((result) => this.setState({ categories: result }));
  }

  render() {
    const { categories } = this.state;
    return categories ? (
      <div className="categories">
        {categories.map((category) => (
          <p key={category.id} data-testid="category">
            {category.name}
          </p>
        ))}
      </div>
    ) : (
      <div>Carregando...</div>
    );
  }
}
