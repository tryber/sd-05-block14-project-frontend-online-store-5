import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import ProductList from './pages/ProductList';
import SearchBar from './pages/SearchBar';
import Categoria from './pages/Categorias';
import ShoppingCart from './pages/ShoppingCart';

import cartImage from './images/shopping-cart.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main">
          <Link className="cart-link" data-testid="shopping-cart-button" to="/cart">
            <img className="cart-img" src={cartImage} alt="shopping cart" />
          </Link>
          <div className="search-box">
            <SearchBar />
          </div>
          <div className="products">
            <Categoria />
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/cart" component={ShoppingCart} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
