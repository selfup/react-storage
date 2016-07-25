import React, { Component } from 'react'

class Ideas extends Component {
  ideaLoader() {
    return this.props.ideas.map((idea) => {
      return (
        <div className="container" key={idea.id}>
          <h3>{idea.title}</h3>
          <p>{idea.body}</p>
        </div>
      )
    })
  }
  
  render() {
    return(
      <div>
        {this.ideaLoader()}
      </div>
    )
  }
}

export default Ideas
