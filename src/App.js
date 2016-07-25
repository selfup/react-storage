import React, { Component } from 'react'
import { Button, FormControl } from 'react-bootstrap';
import Lspi from 'lspi'
import Ideas from './Ideas.js'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.lspi  = new Lspi()
    this.state = {
      id: "",
      title: "",
      body: "",
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
    const local = this.lspi.getObjectRecord("ideas")
      if (local === null) { return [] } else return local
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }

  handleBodyChange(event) {
    this.setState({ body: event.target.value })
  }

  handleIdeaChange() {
    this.setState({ idea:
      { title: this.state.title, body: this.state.body, id: new Date() }
    }, () => {
      this.clearText()
      this.updateIdeas()
    })
  }

  updateIdeas() {
    const ideas = [
      Object.assign({}, this.state.idea, { /* no changes here */ }),
      ...this.state.ideas 
    ] /* unshifts <Object.assign> into Ideas Array clone */
    this.lspi.setRecord("ideas", ideas)
    this.fetchLocalAndSetState()
  }

  clearText() {
    this.setState({ title: "", body: "" })
  }

  fetchLocalAndSetState() {
    const local = this.lspi.getObjectRecord("ideas")
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
          <FormControl
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <h3>Body</h3>
          <FormControl
            type="text"
            value={this.state.body}
            onChange={this.handleBodyChange}
          /><br/>
          <Button bsStyle="success" bsSize="small" onClick={this.handleIdeaChange}>
            Submit
          </Button><br/><br/>
          <Button bsStyle="danger" bsSize="small" onClick={this.handleClearIdeas}>
            Clear All Ideas
          </Button>
        </div>
        <div><Ideas ideas={this.state.ideas}/></div>
      </div>
    )
  }
}

export default App
