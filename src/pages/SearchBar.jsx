import React, { Component } from 'react';
import searchIcon from '../images/search-icon.png';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Digite algum termo de pesquisa ou escolha uma categoria"
          className="search-input"
          data-testid="query-input"
          type="text"
        />
        <img
          className="search-icon"
          src={searchIcon}
          alt="search icon"
          data-testid="query-button"
        />
      </div>
    );
  }
}
