import React, { Component } from 'react'

class Bookmarks extends Component {
  bookmarkLoader() {
    return this.props.bookmarks.reverse().map((bookmark) => {
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
