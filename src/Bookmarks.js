import React, { Component } from 'react'
import Lspi from 'lspi'

class Bookmarks extends Component {
  constructor() {
    super()

    this.lspi = new Lspi()

    this.state = {
      bookmarks: {}
    }
  }

  componentWillMount() {
    this.setState({ bookmarks: this.lspi.getObjectRecord("bookmarks") })
  }

  bookmarkLoader() {
    return this.state.bookmarks.map((bookmark) => {
      return (
        <div key={bookmark.id}>
          <h3>{bookmark.title}</h3>
          <p>{bookmark.link}</p>
        </div>
      )
    })
  }
  
  render() {
    return(
      <div>
        {this.bookmarkLoader()}
      </div>
    )
  }
}

export default Bookmarks
