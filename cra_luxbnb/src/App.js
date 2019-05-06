import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import header from './components/header'
import home from './components/home'
import about from './components/about'
import wih from './components/wih'
import signup from './components/signup'
import login from './components/login'
import footer from './components/footer'

class App extends Component {
  render() {
    return (
      <Router>
        <header />
        <Switch>
          <Route exact={true} path="/" component={home} />
          <Route path="/about" component={about} />
          <Route path="/wih" component={wih} />
          <Route path="/signup" component={signup} />
          <Route path="/login" component={login} />
        </Switch>
        <footer />
      </Router>
    );
  }
}

export default App;
