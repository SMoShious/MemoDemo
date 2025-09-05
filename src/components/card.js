import React from "react";
import '../styles/card.css';

function Card ( props ) {

  const {card, content, handleChoice, flipped, isDisabled} = props;

  function handleClick () {
    if (!isDisabled) {
      handleChoice(card)
    }
  }

  return (
    <div className="card">

      <div className={flipped ? "flipped" : ""}>
        <div 
          className="cardBack"
          onClick={handleClick}>
        </div>

        <div className="cardFront"><p>{content}</p></div>
      </div>

    </div>
  )
}

export default Card;