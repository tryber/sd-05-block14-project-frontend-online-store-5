import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import ShoppingCart from './Pages/ShoppingCart.jsx';
import ProductList from './pages/ProductList';

import './App.css';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/cart" component={ShoppingCart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
