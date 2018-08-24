import React, { Component } from 'react';

import styles from './Cards.scss';

export default class Cards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCard: this.props.showCard,
      cardClass: styles.card
    }

    this.toggleClass = this.toggleClass.bind(this);
    this.selectACard = this.selectACard.bind(this);
    this.getClass = this.getClass.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.guesses.length === 1 && this.props.guesses.length == 2) {
      if (!this.props.isAMatch()) {
        setTimeout(function () {
          this.setState({ cardClass: styles.card, showCard: false })
        }.bind(this), 1000)
      }
    }
  }

  toggleClass() {
    const classArr = [];
    classArr.push(styles.card)
    if (!this.state.showCard) {
      classArr.push(styles.changed);
    }
    const resultClass = classArr.join(' ');
    this.setState({
      cardClass: resultClass,
      showCard: !this.state.showCard
    })
  };

  selectACard() {
    // if card is not showing - enable toggle 
    if (!this.state.showCard) {
      this.props.handleGuess({ sym: this.props.symbol, idx: this.props.cardKey })
      this.toggleClass()
    }
  }

  getClass () {
    const klass = this.state.showCard ? [styles.card, styles.changed].join(' ') : styles.card
    return klass
  }

  render() {
    const klass = this.getClass()
    return (
      <div className={klass} onClick={() => {
        this.selectACard()
      }}>
        <div className={`${styles.cardFace} ${styles.back}`}>
          <h1 className={styles.symbol}>{this.props.symbol}</h1>
        </div>
        <div className={`${styles.cardFace} ${styles.front}`}></div>
      </div>
    )
  }
}
