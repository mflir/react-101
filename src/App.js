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
        <div class="foto">
        <img class="app-avatar" src={avatar} alt="avatar" />
        </div>
        <div class="app-titulo">
        <h1>florencia scavone</h1>
        <h4>web developer</h4>
        </div>
        <footer>
        <Link class="link" to="/"> go to home</Link>
        <Link class="link" to="/about">go to about</Link>
        </footer>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        </Fragment>
        </Router>
    );
  }
}

export default App;
