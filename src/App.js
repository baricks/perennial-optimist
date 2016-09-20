import React, { Component } from 'react';
import './App.css';
import Formy from './form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-logo">😍 😱 🤑</div>
          <h2>The Perennial Optimist</h2>
          <h3>Programming A to Z, Week 2</h3>
        </div>
        <div className="App-intro">
          <div>How are you feeling? Write your thoughts below.</div><br/><br/>
          <Formy/>
        </div>
      </div>
    );
  }
}

export default App;
