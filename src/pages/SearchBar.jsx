import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <input className="search-input" data-testid="query-input" type="text" />
        <button data-testid="query-button" type="button">Pesquisar</button>
      </div>
    );
  }
}
