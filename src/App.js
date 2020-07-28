import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from './services/api';
import List from './pages/ProductList';
import SearchBar from './pages/SearchBar';
import Categoria from './pages/Categorias';
import Cart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

import cartImage from './images/shopping-cart.png';
import './App.css';
import Checkout from './pages/FinalizarCompra';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: null, category: null, value: null, cart: [] };
    this.getCategory = this.getCategory.bind(this);
    this.getValue = this.getValue.bind(this);
    this.resetCategory = this.resetCategory.bind(this);
    this.makeSearch = this.makeSearch.bind(this);
    this.addCart = this.addCart.bind(this);
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
    this.setState({ search: returnValue });
  }

  addCart(product) {
    const { cart } = this.state;
    this.setState({ cart: [...cart, product] });
  }

  render() {
    const { search, value, cart } = this.state;
    return (
      <BrowserRouter>
        <div className="main">
          <Link className="cart-link" data-testid="shopping-cart-button" to="/cart">
            <img className="cart-img" src={cartImage} alt="shopping cart" />
          </Link>
          <div className="search-box"><SearchBar onClick={this.getValue} /></div>
          <div className="products">
            <Categoria onClick={this.getCategory} reset={this.resetCategory} value={value} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <List {...props} value={search} addCart={this.addCart} />}
              />
              <Route path="/cart" render={(props) => <Cart {...props} carrinho={cart} />} />
              <Route
                path="/details/:id"
                render={(props) => <ProductDetails {...props} addCart={this.addCart} />}
              />
              <Route path="/cart" component={Cart} />
              <Route path="/details/:id" component={ProductDetails} />
              <Route path="/checkout" render={(props) => <Checkout {...props} cart={cart} />} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
