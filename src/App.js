import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heroes from './components/Heroes';

class App extends Component {
  constructor() {
    super();
    this.state = { message: '' };
  }

  componentDidMount() {
    fetch('/api/message')
      .then(response => response.json())
      .then(json => this.setState({ message: json }));
  }

  render() {
    return (
      <div className="App">
        <Heroes/>
      </div>
    );
  }
}

export default App;
