import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from './services/api';

import ProductList from './pages/ProductList';
import SearchBar from './pages/SearchBar';
import Categoria from './pages/Categorias';
import ShoppingCart from './pages/ShoppingCart';

import cartImage from './images/shopping-cart.png';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: null, category: null, value: null };
    this.getCategory = this.getCategory.bind(this);
    this.getValue = this.getValue.bind(this);
    this.resetCategory = this.resetCategory.bind(this);
    this.makeSearch = this.makeSearch.bind(this);
  }

  async getValue(selectedValue) {
    await this.setState({ value: selectedValue });
    this.makeSearch();
  }

  async getCategory(selectedcategory) {
    await this.setState({ category: selectedcategory });
    this.makeSearch();
  }

  async resetCategory() {
    await this.setState({ category: null });
    this.makeSearch();
  }

  async makeSearch() {
    const { category, value } = this.state;
    const returnValue = await getProductsFromCategoryAndQuery(category, value);
    console.log(returnValue);
    this.setState({ searchValue: returnValue });
  }

  render() {
    const { searchValue } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <div className="main">
            <Link className="cart-link" data-testid="shopping-cart-button" to="/cart">
              <img className="cart-img" src={cartImage} alt="shopping cart" />
            </Link>
            <div className="search-box">
              <SearchBar onClick={this.getValue} />
            </div>
            <div className="products">
              <Categoria onClick={this.getCategory} reset={this.resetCategory} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => <ProductList {...props} value={searchValue} />}
                />
                <Route path="/cart" component={ShoppingCart} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
