import React, { Component } from 'react'

import styles from './Game.scss'
import Level from '../Level/Level';
import Board from '../Board/Board';

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      difficulty: null,
      cards: []
    }

    this.handleDifficulty = this.handleDifficulty.bind(this)
  }

  componentDidMount() {
    fetch('https://web-code-test-dot-nyt-games-prd.appspot.com/cards.json')
      .then(resp => resp.json())
      .then(data => {
        this.setState({ cards: data.levels })
      })
  }

  handleDifficulty(e) {
    this.setState({
      difficulty: e.target.value
    })
  }

  render() {
    return (
      <div className={styles.intro}>
        <h1 className={styles.header}>NYT Games Code Test</h1>
        <div className={styles.btnContainer}>
          {
            !this.state.difficulty ?
              <Level
                handleDifficulty={this.handleDifficulty}
              />
              :
              <Board
                cards={this.state.cards}
                difficulty={this.state.difficulty}
              />
          }
        </div>
      </div>
    )
  }
}
