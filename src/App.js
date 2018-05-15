import React, { Component, Fragment } from 'react';
import avatar from './i2.jpg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './routers/home';
import About from './routers/about';
import './App.css';

class App extends Component {
  render() {
    return (
      
      <Router>
        <Fragment>
        <Link to="/"> go to home</Link>
        <br/>
        <img class="app-avatar" src={avatar} alt="avatar" />
        <Link to="/about">go to about</Link>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        </Fragment>
        </Router>
    );
  }
}

export default App;
