import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import cartImage from './pages/shopping-cart.jpg';
import SearchBar from './pages/SearchBar';
import Categories from './pages/Categories';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main">
          <div className="search-box">
            <Link data-testid="shopping-cart-button" to="/cart">
              <img src={cartImage} alt="shopping cart" />
            </Link>
            <SearchBar />
          </div>
          <div className="products">
            <Categories />
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
