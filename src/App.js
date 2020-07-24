import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import ShoppingCart from './Pages/shoppingCart.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/shoppingCart" component={ShoppingCart} />
      </BrowserRouter>
    </div>
  );
}

export default App;
