import React, { Component } from 'react'
import Lspi from 'lspi'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.lspi = new Lspi()
    this.state   = {
      title: "",
      link: "",
      bookmarks: []
    }
  }

  handleChange(event) {
    this.setState({ title: event.target.value })
    this.lspi.setStringRecord("title", event.target.value)
  }

  componentWillMount() {
    this.fetchLocalAndSetState()
  }

  fetchLocalAndSetState(fn) {
    const local = this.lspi.getStringRecord("title")
    if (local !== null) this.setState({ title: local })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Storage!</h2>
        </div>
        <br/>
        <h3>Title</h3>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange.bind(this)}
        />
        <br/><br/>
        <h3>Link</h3>
        <input
          type="text"
          name="link"
          value={this.state.link}
          onChange={this.handleChange.bind(this)}
        />
        <br/><br/>
        <button id="submit-button">
          Submit
        </button>
      </div>
    )
  }
}

export default App
