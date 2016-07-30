import React, { Component } from 'react'
import Quality from './Quality.js'
import './Ideas.css'

class Ideas extends Component {
  ideaLoader() {
    return this.props.ideas.map((idea) => {
      return (
        <div className="container Ideas-container" key={idea.id}>
          <h3>Title: {idea.title}</h3><hr/>
          <p>Body: {idea.body}</p><hr/>
          <Quality idea={idea} parentState={this.props.parentState}/>
        </div>
      )
    })
  }
  
  render() {
    return (
      <div>
        {this.ideaLoader()}
      </div>
    )
  }
}

export default Ideas
