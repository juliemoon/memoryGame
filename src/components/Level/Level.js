import React from 'react';
import styles from './Level.scss';

const Level = (props) => {
  return (
    <div className={styles.levelInfo}>
      <p className={styles.level}>Choose a difficulty level to start</p>
      <button value='hard' onClick={(e) => props.handleDifficulty(e)}>Hard</button>
      <button value ='easy' onClick={(e) => props.handleDifficulty(e)}>Easy</button>
    </div>
  )
}

export default Level;