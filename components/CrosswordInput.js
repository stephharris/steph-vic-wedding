import { Component } from 'react'
import Head from 'next/head'
import 'isomorphic-fetch'

import '../styles/index.css';

class CrosswordInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      submitted: false,
      value: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {

    event.preventDefault();

    console.log('this.state.value', this.state.value)

    fetch('/api/crossword', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: this.state.value })
    }).then((res) => {
      res.status === 200 ? this.setState({ submitted: true }) : ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} className="bg-red-200 h-10 w-20" type="text" value={this.state.value} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default CrosswordInput;
