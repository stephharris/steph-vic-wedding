import classNames from 'classnames';
import { Component } from 'react';
import Head from 'next/head';
import 'isomorphic-fetch';

import styles from './index.module.css';

class CrosswordSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      secretLink: '',
      successMessage: '',
      secret: '',
      isCorrect: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getInput = this.getInput.bind(this)
    this.renderSuccessMessage = this.renderSuccessMessage.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  getInput() {
    const answer = this.state.value

    return answer.split(' ').join('').toLowerCase()
  }

  renderSuccessMessage() {
    return (
      <div className={styles.submitSuccess}>
        <h3 className={styles.submitSuccessMessage}>Congrats - you did it! {this.state.successMessage} <span className={styles.secret}>{ this.state.secret }</span>.</h3>
        <a className={styles.successBtn} target="_blank" href={this.state.secretLink}>click here</a>
      </div>
    )
  }

  handleSubmit(event) {

    event.preventDefault();

    // clearing state values if empty
    if(!this.state.value) {
      this.setState({ secretLink: '' })
      this.setState({ isCorrect: null })
      return
    }

    fetch('/api/crossword', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: this.getInput() })
    }).then((res) => {
      return res.json()
    }).then((data) => {
      this.setState({ isCorrect: data.isCorrect })

      if(data.link && data.successMessage && data.secret) {
        const successMessage = data.successMessage.split("_").join(" ")
        console.log('data', data)
        this.setState({ secret: data.secret })
        this.setState({ successMessage: successMessage })
        this.setState({ secretLink: data.link })
      }
    })
  }

  render() {

    console.log('LOL! NICE TRY DEV FRIENDS. THIS IS SERVER-SIDE RENDERED WITH PROTECTED ENV VARIABLES... NO CHEATING, BUT I LOVE YOU. <3')

    return (
      <div
        className={classNames(
          'section',
          styles.crosswordSection
        )}>
        <div className="content-wrapper">
          <h2 id="crossword" className={styles.crosswordTitle}>Crossword</h2>
          <p className={styles.crosswordText}>If you think you have successfully solved our crossword and unlocked the secret password, please enter below.</p>
          <p className={styles.crosswordText}><span>Hint:</span> There are two ways of solving this.</p>
          { (this.state.isCorrect === false) &&
            <div>
              <p className={styles.errorMessage}>Not quite! Try again.</p>
            </div>
          }
          <form
            className={classNames(
              styles.crosswordForm,
              Boolean(this.state.isCorrect) && styles.crosswordFormDisplayNone
            )}
            onSubmit={this.handleSubmit}
          >
            <input className={styles.password} onChange={this.handleChange} type="text" value={this.state.value} />
            <input className={styles.submit} type="submit" value="submit" role="button" />
          </form>
          { this.state.isCorrect && this.renderSuccessMessage() }
        </div>
      </div>
    )
  }
}



export default CrosswordSection;
