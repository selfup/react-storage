import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      hello: "Hellooo"
    }
  }

  handleChange(event) {
    this.setState({ hello: event.target.value })
    this.setLocal(event.target.value)
  }

  componentWillMount() {
    this.fetchLocal()
  }

  setLocal(string) {
    localStorage.setItem("hello", string)
  }

  getLocal() {
    return localStorage.getItem("hello")
  }

  fetchLocal() {
    const local = this.getLocal()
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
