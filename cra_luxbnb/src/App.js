import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Wih from './components/Wih'
import Signup from './components/Signup'
import Login from './components/Login'
import Cabin from './components/Cabin'
import Mansion from './components/Mansion'
import Penthouse from './components/Penthouse'
import Unique from './components/Unique'
import Products from './components/Products'
import Footer from './components/Footer'
import ProductSingle from './components/ProductSingle'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Wih" component={Wih} />
            <Route path="/Signup" component={Signup} />
            <Route path="/Login" component={Login} />
            <Route path="/Cabin" component={Cabin} />
            <Route path="/Mansion" component={Mansion} />
            <Route path="/Penthouse" component={Penthouse} />
            <Route path="/Unique" component={Unique} />
            <Route path="/products/:id" component={ProductSingle} />
            <Route path="/products" component={Products} />
          </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
