import React, { Component, Fragment } from 'react';
import avatar from './i2.jpg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Menu from './components/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
        <Menu />
    );
  }
}

export default App;
