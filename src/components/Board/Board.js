import React, { Component } from 'react';
import Cards from '../Cards/Cards';
import styles from './Board.scss';

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guesses: [],
      playableDeck: [],
      matchedSymbols: new Set()
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
      if (currentDeck.difficulty === this.props.difficulty) {
        this.setState({ playableDeck: currentDeck.cards })
        break;
      }
    }
  }


  componentDidUpdate() {
    if (this.state.guesses.length === 2) {
      this.isAMatch()
    }
  }

  isAMatch() {
    console.log('inside is a match function')
    const guessArr = this.state.guesses;
    const guessOne = guessArr[0];
    const guessTwo = guessArr[1];
    const itsAPerfectMatch = (guessOne.idx !== guessTwo.idx) && (guessOne.sym === guessTwo.sym)

    if (itsAPerfectMatch) {
      this.setState({ matchedSymbols: this.state.matchedSymbols.add(guessOne.sym) })
    } else {
      // turn over all the cards and reset the guesses
      //pass to Card matched or not matched prop = t/f 
    }
    this.resetGuesses()
  }

  handleGuess(guess) {
    this.setState({ guesses: [...this.state.guesses, guess] }) //after user clicks guess becomes 1
  }

  resetGuesses() {
    this.setState({ guesses: [] })
  }

  render() {
    return (
      this.state.playableDeck && this.state.playableDeck.map((symbol, i) => {
        return (
          this.state.matchedSymbols.has(symbol) ?
            <div className={styles.board} key={i}>
              <h1>IT'S A MATCH!</h1>
            </div>
            :
            <div className={styles.board} key={i}>
              <Cards
                cardKey={i}
                symbol={symbol}
                handleGuess={this.handleGuess}
                showCard={this.state.matchedSymbols.has(symbol)}
              />
            </div>
        )
      })
    )
  }
}
