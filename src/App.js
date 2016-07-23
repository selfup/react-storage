import React, { Component } from 'react'
import Lspi from 'lspi'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.lspi  = new Lspi()
    this.state = {
      title: "",
      link: "",
      bookmark: {},
      bookmarks: this.lspi.getObjectRecord("bookmarks")
    }
    this.handleTitleChange         = this.handleTitleChange.bind(this)
    this.handleLinkChange          = this.handleLinkChange.bind(this)
    this.handleBookmarkChange.bind = this.handleBookmarkChange.bind(this)
  }

  componentWillMount() {
    this.fetchLocalAndSetState()
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }

  handleLinkChange(event) {
    this.setState({ link: event.target.value })
  }

  handleBookmarkChange(event) {
    this.setState({ bookmark:
      { title: this.state.title, link: this.state.link }
    }, () => {
      this.clearText()
      this.updateBookmarks()
    })
  }

  updateBookmarks() {
    let bookmarks = this.lspi.getObjectRecord("bookmarks")
    bookmarks.push(this.state.bookmark)
    this.lspi.setRecord("bookmarks", bookmarks)
  }

  clearText() {
    return this.setState({ title: "", link: "" })
  }

  fetchLocalAndSetState(fn) {
    const local = this.lspi.getObjectRecord("bookmarks")
      if (local === null) this.lspi.createEmptyRecordArray("bookmarks")
      if (local !== null) this.setState({ bookmarks: local })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Storage!</h2>
        </div>
        <br/>
        <h3>Title</h3>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <br/><br/>
        <h3>Link</h3>
        <input
          type="text"
          name="link"
          value={this.state.link}
          onChange={this.handleLinkChange}
        />
        <br/><br/>
        <button id="submit-button" onClick={this.handleBookmarkChange}>
          Submit
        </button>
      </div>
    )
  }
}

export default App
