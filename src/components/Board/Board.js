import React, { Component } from 'react';

import Cards from '../Cards/Cards';
import TimerContainer from '../Timer/Timer'
import styles from './Board.scss';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      playableDeck: [],
      matchedSymbols: new Set(),
      guessesMade: 0
    }

    this.handleGuess = this.handleGuess.bind(this);
    this.resetGuesses = this.resetGuesses.bind(this);
    this.isAMatch = this.isAMatch.bind(this);
  }

  componentDidMount() {
    const cards = this.props.cards
    const difficulty = this.props.difficulty
    for (let i = 0; i < cards.length; i++) {
      const currentDeck = cards[i]
      if (currentDeck.difficulty === difficulty) {
        this.setState({ playableDeck: currentDeck.cards })
        break;
      }
    }
  }

  isAMatch() {
    const guessArr = this.state.guesses;
    const guessOne = guessArr[0];
    const guessTwo = guessArr[1];
    const itsAPerfectMatch = (guessOne.idx !== guessTwo.idx) && (guessOne.sym === guessTwo.sym)

    // can put this before the logic, because of setStates asynchronous nature to not update immediately
    this.resetGuesses()
    if (itsAPerfectMatch) {
      setTimeout(function() {
        this.setState({ matchedSymbols: this.state.matchedSymbols.add(guessOne.sym) })
      }.bind(this), 1200)
      return true
    } else {
      return false
    }
  }

  handleGuess(guess) {
    this.setState({ guesses: [...this.state.guesses, guess], guessesMade: this.state.guessesMade + 1 }) 
  }

  resetGuesses() {
    this.setState({ guesses: [] })
  }

  render() {
    return (
      <div>
        {
          this.state.guessesMade > 0 ? 
          <TimerContainer playableDeck={this.state.playableDeck.length} matchedSymbols={this.state.matchedSymbols.size} /> 
          : 
          null
        }
        <div className={styles.gap}>
          {
            this.state.playableDeck && this.state.playableDeck.map((symbol, i) => {
              return (
                this.state.matchedSymbols.has(symbol) ?
                  <div className={styles.board} key={i}>
                    <h1 className={styles.match}>IT'S A MATCH!</h1>
                  </div>
                  :
                  <div className={styles.board} key={i}>
                    <Cards
                      cardKey={i}
                      symbol={symbol}
                      handleGuess={this.handleGuess}
                      showCard={this.state.matchedSymbols.has(symbol)}
                      isAMatch={this.isAMatch}
                      guesses={this.state.guesses}
                      guessesMade={this.state.guessesMade}
                    />
                  </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
