import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import ProductList from './pages/ProductList';
import SearchBar from './pages/SearchBar';
import Categoria from './pages/Categorias';
import ShoppingCart from './pages/ShoppingCart';

import cartImage from './pages/shopping-cart.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main">
          <div className="search-box">
            <Link className="cart-link" data-testid="shopping-cart-button" to="/cart">
              <img src={cartImage} alt="shopping cart" />
            </Link>
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
