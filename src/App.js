import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import ShoppingCart from './Pages/ShoppingCart.jsx';
import './App.css';

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
