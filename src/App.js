import React from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    // BEM
    <Router>
    <div className="App">
      <Switch>
      <Route path="/checkout">
      <Header />
      <Checkout />
      </Route>
      <Route path="/">
      <Header />
      <Home />
      </Route>
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
