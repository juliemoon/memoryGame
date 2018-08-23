// import React from 'react';
// import styles from './Cards.scss';
// const Cards = (props) => {
//   // console.log('inside cards:...',props)
//   let test = styles.card
//   return (
//     <div className={test} onClick = {() => test+}>
//       <div className={`${styles.cardFace} ${styles.back}`} onClick={() => props.handleGuess({sym:props.symbol,idx:props.cardKey})}>
//         {props.symbol}
//       </div>
//       <div className={`${styles.cardFace} ${styles.front}`}>front</div>
//     </div>

//   )
// }

// export default Cards;



// import React, {Component} from 'react';
// import styles from './Cards.scss';

// export default class Cards extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       showCard: false
//       // cardClass: []
//     }
//     this.getCardContainerClass = this.getCardContainerClass.bind(this);
//     this.changeCardContainerShow = this.changeCardContainerShow.bind(this);
//   }


//   getCardContainerClass() {
//     const cardStyles = styles.card;
//     const showCardClass = this.state.showCard ? 'changed' : null;
//     return `${cardStyles} ${showCardClass}`
//   }

//   changeCardContainerShow () {
//     this.setState({ showCard: !this.state.showCard })
//   }

//   render() {
//     const cardContainerClass = this.getCardContainerClass();
//     return (
//       <div className={cardContainerClass} onClick={() => this.changeCardContainerShow()}>
//       <div className={`${styles.cardFace} ${styles.back}`} onClick={() => this.props.handleGuess({sym:this.props.symbol,idx:this.props.cardKey})}>
//         {this.props.symbol}
//       </div>
//       <div className={`${styles.cardFace} ${styles.front}`}>front</div>
//     </div>
//     )
//   }
// } 


import React, { Component } from 'react';
import styles from './Cards.scss';


export default class Cards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCard: this.props.showCard,
      cardClass: styles.card
      // whatToShow: null
    }
    this.toggleClass = this.toggleClass.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (this.props.turnOver) {
      this.setState({ card })
    }
  }

  toggleClass() {
    // debugger;
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
    // if(this.props.showBack){
    //   const cardBack = styles.card;
    // }
    console.log('this.props.showCard: ')
    return (
      <div className={this.state.cardClass} onClick={() => {
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


// export default class Cards extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       showCard: false
//     }
//     this.toggleClass = this.toggleClass.bind(this);
//   }

//   toggleClass() {
//     const currentState = this.state.showCard;
//     this.setState({ showCard: !currentState });
//   };


//   render() {
//     console.log('this.state....',this.state.showCard)
//     return (
//       <div className={this.state.showCard ? styles.card.changed : styles.card} onClick={this.toggleClass} >
//         <div className={`${styles.cardFace} ${styles.back}`} onClick={() => this.props.handleGuess({ sym: this.props.symbol, idx: this.props.cardKey })}>
//           {this.props.symbol}
//         </div>
//         <div className={`${styles.cardFace} ${styles.front}`}>front</div>
//       </div>
//     )
//   }
// } 
