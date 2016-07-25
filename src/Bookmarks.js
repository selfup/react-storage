import React, { Component } from 'react'
import Lspi from 'lspi'

class Bookmarks extends Component {
  constructor() {
    super()

    this.lspi = new Lspi()

    this.state = {
      bookmarks: this.lspi.getObjectRecord("bookmarks")
    }
  }

  bookmarkLoader() {
    console.log(this.state.bookmarks)
    return this.state.bookmarks.map((bookmark) => {
      return (
        <div className="container" key={bookmark.id}>
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
