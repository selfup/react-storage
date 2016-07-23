import React, { Component } from 'react';
import Storage from './storage.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.storage = new Storage()
    this.state   = {
      hello: "Hellooo"
    }
  }

  handleChange(event) {
    this.setState({ hello: event.target.value })
    this.storage.setLocal(event.target.value)
  }

  componentWillMount() {
    this.fetchLocalAndSetState()
  }

  fetchLocalAndSetState(fn) {
    const local = this.storage.getLocal()
    if (local !== null) this.setState({ hello: local })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <br/>
        <input
          type="text"
          value={this.state.hello}
          onChange={this.handleChange.bind(this)}
        />
        <p className="App-intro">
          Change the value and refresh :)
        </p>
      </div>
    )
  }
}

export default App
