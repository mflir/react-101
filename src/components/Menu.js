import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../routes/home';
import About from '../routes/about';
import Contact from '../routes/contact';

class Menu extends Component {
  render() {
    return (
      
      <Router>
        <Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        <div class="menu">
        <Link class="link" to="/">home</Link>
        <Link class="link" to="/about">about me</Link>
        <Link class="link" to="/contact">contact</Link>
        </div>
        
        </Fragment>
        </Router>
    );
  }
}

export default Menu;