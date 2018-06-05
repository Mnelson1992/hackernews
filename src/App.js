import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
      const helloWorld = 'Welcome to the only Road to learn React, but the question is why does it do this?';
      return(
        <div className="App">
          <h2>{helloWorld}</h2>
        </div>
      )
  }
}

export default App;
