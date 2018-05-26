import React, { Component } from 'react';
import avatar from '../i2.jpg';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div class="foto">
        <img class="app-avatar" src={avatar} alt="avatar" />
        </div>
        <div class="app-titulo">
        <h1>Florencia Scavone</h1>
        <h4>descripcion</h4>
        </div>
      </div>
    );
  }
}

export default Home;