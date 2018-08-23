import React, { Component } from 'react'

import Timer from '../Timer/Timer'
import styles from './Game.scss'
import Level from '../Level/Level';
import Board from '../Board/Board';

export default class Game extends Component {

  constructor(props) {
    super(props)
    this.state = {
      difficulty: null,
      // guesses: [],
      cards: []
    }
    this.handleDifficulty = this.handleDifficulty.bind(this)
    // this.handleGuess = this.handleGuess.bind(this)
    // this.resetGuesses = this.resetGuesses.bind(this)
  }

  componentDidMount() {
    fetch('https://web-code-test-dot-nyt-games-prd.appspot.com/cards.json')
      .then(resp => resp.json())
      .then(data => {
        this.setState({ cards: data.levels })
      })
  }

  handleDifficulty(e) {
    // update state's value
    this.setState({
      difficulty: e.target.value
    })
  }

  // handleGuess(guess) {
  //   console.log('INSIDE handleGuess...')
  //   this.setState({ guesses: [...this.state.guesses, guess] })
  // }

  // resetGuesses () {
  //   this.setState({ guesses: [] })
  // }

  render() {
    // console.log('state:....',this.state)
    return (
      <div>
        <h1 className={styles.header}>NYT Games Code Test</h1>
        <Timer />
        <div className={styles.placeholder}>
          {
            !this.state.difficulty ?
              <Level
                handleDifficulty={this.handleDifficulty}
              />
              :
              <Board
                cards={this.state.cards}
                difficulty={this.state.difficulty}
                // guesses={this.state.guesses}
                // handleGuess={this.handleGuess}
                // resetGuesses={this.resetGuesses}
              />
          }
        </div>
      </div>
    )
  }

}


