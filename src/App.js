import React, { Component } from 'react'
import { Button, FormControl } from 'react-bootstrap';
import Lspi from 'lspi'
import Bookmarks from './Bookmarks.js'
import './App.css'

class App extends Component {
  constructor() {
    super()
    
    this.lspi  = new Lspi()

    this.state = {
      id: "",
      title: "",
      link: "",
      bookmark: {},
      bookmarks: this.lspi.getObjectRecord("bookmarks")
    }
    
    this.handleTitleChange    = this.handleTitleChange.bind(this)
    this.handleLinkChange     = this.handleLinkChange.bind(this)
    this.handleBookmarkChange = this.handleBookmarkChange.bind(this)
    this.handleClearBookmarks = this.handleClearBookmarks.bind(this)
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

  handleBookmarkChange() {
    this.setState({ bookmark:
      { title: this.state.title, link: this.state.link, id: new Date() }
    }, () => {
      this.clearText()
      this.updateBookmarks()
    })
  }

  updateBookmarks() {
    const bookmarks = [
      ...this.lspi.getObjectRecord("bookmarks"), 
      Object.assign(
        {}, this.state.bookmark, { /* no changes here */ }
      )
    ]
    this.lspi.setRecord("bookmarks", bookmarks)
  }

  clearText() {
    this.setState({ title: "", link: "" })
  }

  fetchLocalAndSetState() {
    const local = this.lspi.getObjectRecord("bookmarks")
      if (local === null) this.lspi.createEmptyRecordArray("bookmarks")
      if (local !== null) this.setState({ bookmarks: local })
  }

  handleClearBookmarks() {
    this.lspi.deleteRecord("bookmarks")
    this.fetchLocalAndSetState()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Welcome to React Storage!</h3>
        </div>
        <br/>
        <div className="container">
          <h3>Title</h3>
          <FormControl
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <h3>Link</h3>
          <FormControl
            type="text"
            name="title"
            value={this.state.link}
            onChange={this.handleLinkChange}
          /><br/>
          <Button bsStyle="success" bsSize="small" onClick={this.handleBookmarkChange}>
            Submit
          </Button>
          <br/><br/>
          <Button bsStyle="danger" bsSize="small" onClick={this.handleClearBookmarks}>
            Clear All Bookmarks
          </Button>
        </div>
        <div className="Bookmarks"><Bookmarks /></div>
      </div>
    )
  }
}

export default App
