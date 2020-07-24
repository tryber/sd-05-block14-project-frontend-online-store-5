import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ProductList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
