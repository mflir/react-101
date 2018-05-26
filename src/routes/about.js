import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <div className="About">
        <header className="App-header">
          <h1 className="App-titulo">About me</h1>
        </header>
        <p className="p-about"> I am a student of the Degree in Multimedia Arts of UNA </p>
        <p>(National University of the Arts) </p>
        <p>and Front-end developer in training, </p>
        <p>skilled in HTML, CSS, Js, jQuery, git</p> 
        <p>and currently learning React.js.</p>
      </div>
    );
  }
}

export default About;