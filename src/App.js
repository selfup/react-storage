import React, { Component } from 'react'
import { Button, FormControl } from 'react-bootstrap';
import Lspi from 'lspi'
import Ideas from './Ideas.js'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.lspi  = new Lspi()
    this.qualityUp = {
      Swill: "Plausible",
      Plausible: "Genius"
    }
    this.qualityDown = {
      Plausible: "Swill",
      Genius: "Plausible"
    }
    this.state = {
      id: "",
      title: "",
      body: "",
      quality: "",
      idea: {},
      ideas: this.initialIdeas()
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleBodyChange  = this.handleBodyChange.bind(this)
    this.handleIdeaChange  = this.handleIdeaChange.bind(this)
    this.handleClearIdeas  = this.handleClearIdeas.bind(this)
  }

  componentWillMount() {
    this.fetchLocalAndSetState()
  }

  initialIdeas() {
    const local = this.lspi.getRecord("ideas")
      if (local === null) { return [] } else return local
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }

  handleBodyChange(event) {
    this.setState({ body: event.target.value })
  }

  handleQualityUpChange(props) {
    let ideas = this.state.ideas
    let currentIdea = ideas.find(idea => { return idea.id === props.id })
    ideas.forEach(idea => { if (idea.id === currentIdea.id) idea = currentIdea })
    this.setState({ideas: ideas})
  }

  handleIdeaChange() {
    this.setState({ 
      idea: { 
        title: this.state.title, 
        body: this.state.body, 
        quality: "Swill", 
        id: new Date() 
      }
    }, () => {
      this.clearText()
      this.updateIdeas()
    })
  }

  updateIdeas() {
    const ideas = [Object.assign({}, this.state.idea, {}), ...this.state.ideas]
    this.lspi.setRecord("ideas", ideas)
    this.fetchLocalAndSetState()
  }

  clearText() {
    this.setState({ title: "", body: "" })
  }

  fetchLocalAndSetState() {
    const local = this.lspi.getRecord("ideas")
      if (local === null) this.lspi.createEmptyRecordArray("ideas")
      if (local !== null) this.setState({ ideas: local })
  }

  handleClearIdeas() {
    this.lspi.deleteRecord("ideas")
    this.lspi.createEmptyRecordArray("ideas")
    this.fetchLocalAndSetState()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Welcome to React Storage!</h3>
        </div><br/>
        <div className="container">
          <h3>Title</h3>
          <FormControl className="App-idea-title"
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <h3>Body</h3>
          <FormControl className="App-idea-body"
            type="text"
            value={this.state.body}
            onChange={this.handleBodyChange}
          /><br/>
          <Button 
            bsStyle="success" 
            bsSize="small" 
            onClick={this.handleIdeaChange}
            className="App-idea-submit"
          >Submit</Button><br/><br/>
          <Button 
            bsStyle="danger" 
            bsSize="small" 
            onClick={this.handleClearIdeas}
            className="App-idea-clear"  
          >Clear All Ideas</Button><br/><br/>
        </div>
        <div><Ideas ideas={this.state.ideas}/></div><br/>
      </div>
    )
  }
}

export default App
