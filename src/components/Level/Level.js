import React from 'react';

const Level = (props) => {
  return (
    <div>
      <p>Choose a difficulty level to start</p>
      <button value='hard' onClick={(e) => props.handleDifficulty(e)}>Hard</button>
      <button value ='easy' onClick={(e) => props.handleDifficulty(e)}>Easy</button>
    </div>
  )
}

export default Level;