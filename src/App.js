import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
      var helloWorld = 'Welcome to the Road to learn React';
      return(
        <div className="App">
          <h2>{helloWorld}</h2>
          <h3>My name is {this.props.first} {this.props.last}</h3>
        </div>
      )
  }
}

export default App;
