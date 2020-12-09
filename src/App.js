import React, { Component } from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {ProductConsumer, ProductProvider} from './component/context/ProductProvider'
import Products from './component/Products'
import Cart from './component/Cart'
import Detail from './component/Detail'
import Navbars from './component/Navbar'
import ProductList from './component/Product.list'

class App extends Component {
  render() {
    return (
      <div>
        <ProductProvider>
        <Router>
        <Navbars/>
          <Switch>
            <Route exact path="/">
              <ProductList/>
            </Route>
            <Route exact path="/cart">
              <Cart/>
            </Route>
            <Route exact path="/cart">
              <Cart/>
            </Route>
            <Route exact path="/detail">
              <Detail/>
            </Route>
          </Switch>
        </Router>
        </ProductProvider>
      </div>
    );
  }
}

export default App;
