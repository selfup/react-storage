import React, { Component } from 'react'
import './Quality.css'

class Quality extends Component {
  qualityLoader() {
    return (
      <div key={this.props.idea.id}>
        <span className="Quality-type">Quality: {this.props.idea.quality}</span>
        <span className="gl glyphicon glyphicon-plus" aria-hidden="true"></span>
        <span className="gl glyphicon glyphicon-minus" aria-hidden="true"></span>
        <br/><br/>
      </div>
    )
  }
  
  render() {
    return (
      <div>
        {this.qualityLoader()}
      </div>
    )
  } 
}

export default Quality
