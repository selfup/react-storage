import React, { Component } from 'react'
import Lspi from 'lspi'
import './Quality.css'

class Quality extends Component {
  constructor() {
    super()
    this.lspi = new Lspi()
    this.qualityUp = {
      Swill: "Plausible",
      Plausible: "Genius",
      Genius: "Genius"
    }
    this.qualityDown = {
      Swill: "Swill",
      Plausible: "Swill",
      Genius: "Plausible"
    }
  }

  handleQualityUpChange() {
    let ideas = this.lspi.getRecord("ideas")
    let current = ideas.find(idea => { return idea.id === this.props.idea.id })
    current.quality = this.qualityUp[current.quality]
    ideas.forEach(idea => { if (idea.id === current.id) idea = current })
    this.lspi.setRecord("ideas", ideas)
    this.props.parentState()
  }

  handleQualityDownChange(upOrDown) {
    let ideas = this.lspi.getRecord("ideas")
    let current = ideas.find(idea => { return idea.id === this.props.idea.id })
    current.quality = this.qualityDown[current.quality]
    ideas.forEach(idea => { if (idea.id === current.id) idea = current })
    this.lspi.setRecord("ideas", ideas)
    this.props.parentState()
  }

  qualityLoader() {
    return (
      <div key={this.props.idea.id}>
        <span className="Quality-type">Quality: {this.props.idea.quality}</span>
        <span 
          className="gl glyphicon glyphicon-plus" 
          aria-hidden="true"
          onClick={this.handleQualityUpChange.bind(this)}
        >
        </span>
        <span 
          className="gl glyphicon glyphicon-minus" 
          aria-hidden="true"
          onClick={this.handleQualityDownChange.bind(this)}
        >
        </span>
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
