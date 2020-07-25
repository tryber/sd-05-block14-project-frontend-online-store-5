import React, { Component } from 'react';
import searchIcon from '../images/search-icon.png';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.checkEnterKey = this.checkEnterKey.bind(this);
  }

  checkEnterKey({ key }) {
    const { search } = this.state;
    const { onClick } = this.props;
    if (key === 'Enter') onClick(search);
  }

  render() {
    const { onClick } = this.props;
    const { search } = this.state;
    return (
      <div className="search-bar">
        <input
          onKeyPress={this.checkEnterKey}
          onChange={(event) => this.setState({ search: event.target.value })}
          placeholder="Digite algum termo de pesquisa ou escolha uma categoria"
          className="search-input"
          data-testid="query-input"
          type="text"
        />
        <input
          src={searchIcon}
          type="image"
          onClick={() => onClick(search)}
          className="search-icon"
          alt="search icon"
          data-testid="query-button"
        />
      </div>
    );
  }
}
