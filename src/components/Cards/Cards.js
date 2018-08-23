import React, { Component } from 'react';
import styles from './Cards.scss';
import { debug } from 'util';


export default class Cards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCard: this.props.showCard,
      cardClass: styles.card
    }
    this.toggleClass = this.toggleClass.bind(this);
  }

  componentDidUpdate(prevProps) {
    debugger;
    if (prevProps.guesses.length === 1 && this.props.guesses.length == 2) {
      if (!this.props.isAMatch()) {
        setTimeout(function () {
          this.setState({ cardClass: styles.card, showCard: false })
        }.bind(this), 1000)
      }
    }
  }

  toggleClass() {
    debugger;
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


  render() {
    const klass = this.state.showCard ? [styles.card, styles.changed].join(' ') : styles.card
    return (
        <div className={klass} onClick={() => {
          this.props.handleGuess({ sym: this.props.symbol, idx: this.props.cardKey })
          this.toggleClass()
        }}>
          <div className={`${styles.cardFace} ${styles.back}`}>
            {this.props.symbol}
          </div>
          <div className={`${styles.cardFace} ${styles.front}`}>front</div>
        </div>
    )
  }
}
