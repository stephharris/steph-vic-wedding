import { Component } from 'react'
import Head from 'next/head'
import 'isomorphic-fetch'

import '../styles/index.css';

class CrosswordInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      message: '',
      secretLink: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {

    event.preventDefault();

    // clearing state values if empty
    if(!this.state.value) {
      this.setState({ message: '' })
      this.setState({ secretLink: '' })
      return
    }

    fetch('/api/crossword', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: this.state.value })
    }).then((res) => {
      return res.json()
    }).then((data) => {
      this.setState({ message: data.message })

      if(data.link) {
        this.setState({ secretLink: data.link })
      }
    })
  }

  render() {

    console.log('LOL! NICE TRY DEV FRIENDS. THIS IS SERVER-SIDE RENDERED WITH PROTECTED ENV VARIABLES... NO CHEATING, BUT I LOVE YOU. <3')

    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} className="bg-red-200 h-10 w-20" type="text" value={this.state.value} />
          <input type="submit" value="Submit" />
        </form>
        { Boolean(this.state.message) &&
          <div>
            { this.state.message }
            { this.state.secretLink }
          </div>
        }
      </div>
    )
  }
}

export default CrosswordInput;
