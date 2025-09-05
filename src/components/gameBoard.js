import React, { useEffect, useState, useCallback } from "react";
import Card from "./card";
import "../styles/gameBoard.css";


function GameBoard ( props ) {

  const {cards, setCards, setTurns, selectedSpeed, setScore} = props;

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChoice = useCallback((card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }, [choiceOne])

    const resetTurn = useCallback(() => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurn => prevTurn + 1);
    setIsDisabled(false);
  }, [setTurns])
  
  useEffect(() => {
    
    if (choiceOne && choiceTwo && choiceOne !== choiceTwo) {
      setScore(prevScore => prevScore + 10);
      
      setIsDisabled(true);
      if (choiceOne.id === choiceTwo.id && (choiceOne.key !== choiceTwo.key)) {
        setCards (prevCards => {
          return (prevCards.map(card => {
            if (card.id === choiceOne.id) {
              return {...card, id: card.id, matched: true};
            } else {
              return card;
            }
          }))
        })
        resetTurn();
      } else {
        setTimeout(() => {resetTurn()}, selectedSpeed);
      }

    }
  }, [choiceOne, choiceTwo, setCards, setScore, selectedSpeed, resetTurn]);
  
  return (
    <React.StrictMode>
      <div className="cardBoard">
        {cards.map(card => (
          <div className="card" key={card.key}>
            <div>
              <Card
                card={card}
                content={card.content}
                handleChoice={handleChoice}
                flipped={card === choiceOne || card === choiceTwo || card.matched}
                isDisabled={isDisabled}
              />
            </div>
          </div>
        ))
        }
      </div>
    </React.StrictMode>
  )
}

export default GameBoard;