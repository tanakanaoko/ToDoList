import React, { Component } from 'react';
import './App.css';
import Todo from './containers/to_do_container';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Todo />
      </div>
  );
  }
}

export default App;