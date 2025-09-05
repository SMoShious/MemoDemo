import React, { useState } from "react";
import { createPortal } from "react-dom";
import ActivableButton from "./activableButton.js";
import "../styles/gameOptions.css";
import Draggable from "react-draggable";

function GameOptions ( props ) {

  //props
  const {setIsStarted, setIsPlayed, isModeSelected, setIsModeSelected, shuffleCard, setSelectedMode,setSelectedDifficulty, setSelectedSpeed, bringToFront, infoZIndex} = props;
  
  
  // difficulty section related codes:
  const [difficulty, setDifficulty] = useState("1");
  
  function difficultyHandler (difficulty) {
    switch (difficulty) {
      case "1" :
        setSelectedDifficulty(1);
        return ("Easy")
      case "2" :
        setSelectedDifficulty(2);
        return ("Medium")
      case "3" : 
        setSelectedDifficulty(3);
        return ("Hard")
      default :
        return ("Error; Check Entries");
    }
  }

  //speed section related codes:
  const [speed, setSpeed] = useState("2");    
  function speedHandler (speed) {
    switch (speed) {
      case "1" :
        setSelectedSpeed(1700);
        return ("Slow")
      case "2" :
        setSelectedSpeed(1300);
        return ("Normal")
      case "3" : 
        setSelectedSpeed(900);
        return ("Fast")
      case "4" : 
        setSelectedSpeed(750);
        return ("Insane")
      default :
        return ("Error; Check Entries");
    }
  }
      
  //modes section related codes:
  const [activeId, setActiveId] = useState(null);
  
  function hanldeButtonClick (id) {
    setActiveId(id);
  }
  
  function handleModeSelection (id) {
    hanldeButtonClick(id);
    setIsModeSelected(true);

    switch (id) {
      case 1 :
        setSelectedMode(1);
        break;
      case 2 :
        setSelectedMode(2);
        break;
      case 3 :
        setSelectedMode(3);
        break;
      case 4 :
        setSelectedMode(4);
        break;
      default :
        return ("Error! Check Entries");
    }
  }
  
  // modes section info related codes:
  const [isInfoOpened, setIsInfoOpened] = useState(false);

  function handleInfoClick () {
    setIsInfoOpened(true);
  }
    function handleInfoClose () {
    setIsInfoOpened(false);
  }

  //general button functions:
  function handlePlay () {
    setIsPlayed(true);
    shuffleCard();
  }

  function handleBack () {
    setIsStarted(false);
    setIsModeSelected(false);
  }
      
  return (
    <React.StrictMode>
      <div className="options">

        <div className="mode">

          <div className="title modeTitle">
            <p>Select Mode <span onClick={handleInfoClick}><div className="infoIcon"></div></span></p>
          </div>

          <div className="modesBtns">

            <ActivableButton
              label="Anagram Hunt"  
              id={1}
              isActive={activeId===1}
              onClick={handleModeSelection}
              isDecorated={false}
            />

            <ActivableButton
              label="Math Match"
              id={2}
              isActive={activeId===2}
              onClick={handleModeSelection}
              isDecorated={true}
              />

            <ActivableButton
              label="Polyglot Pro"
              id={3}
              isActive={activeId===3}
              onClick={handleModeSelection}
              isDecorated={true}
            />

            <ActivableButton 
              label="Lingo-Logic"
              id={4}
              isActive={activeId===4}
              onClick={handleModeSelection}
              isDecorated={true}
              />
          </div>
        </div>
        
        <div className="sliders">

          <div className="difficulty">
            <div className="title difficultyTitle">
              <p>Select Difficulty</p>
            </div>

            <input
              className="slider"
              type="range"
              min="1" max="3"
              value={difficulty} 
              onChange={e => setDifficulty(e.target.value)}/>

            <p className="indicator">{difficultyHandler(difficulty)}</p>
          </div>

          <div className="speed">
            <div className="title speedTitle">
              <p>Select Speed</p>
            </div>

            <input
              className="slider"
              type="range"
              min="1" max="4"
              value={speed} 
              onChange={e => setSpeed(e.target.value)}/>

            <p className="indicator">{speedHandler(speed)}</p>
          </div>
          
        </div>

        <div className="gameOptionsBtns">
          <button className="button buttonExtraPadding" onClick={handleBack}>Back</button>
          <ActivableButton
            label="Play!"
            onClick={handlePlay}
            isActive={isModeSelected}
            isDisabled={!isModeSelected}
            customClassName="buttonExtraPadding buttonCTA"
          />
        </div>


        {isInfoOpened && createPortal (
            <Draggable
              handle="topBar2"
              bounds="html"
              onStart={bringToFront}
            >
              <div
                className="infoWindow"
                style={{zIndex: infoZIndex}}
              >
                <div className="infoTitle">
                  <topBar2 className="infoBar">
                    <h1>What are these modes?</h1> 
                    <button className="button closeButton" id="closeBtn" onClick={handleInfoClose}>X</button>
                  </topBar2>
                </div>
                <div className="infoContent">
                  <p>
                    <p><h6>1. Anagram Hunt:</h6></p>
                      <p>Think you have a way with words? In this mode, you're not matching identical cards. Instead, you need to find the anagrams! Match words that are made of the same letters, like 'TEAM' and 'MEAT'. It's a test of both your memory and your familiarity with words in general.</p>
                    <p><h6>2. Math Match:</h6></p>
                      <p>Time to put your brain's CPU to the test! ;) Forget matching pictures; here you need to solve the equation on one card and find its correct answer on another. Can you match '6*9' to '54' before you forget where they are? Sharpen your mind as well as your memory in this mode!</p>
                    <p><h6>3. Polyglot Pro:</h6></p>
                      <p>Ready to go global? Polyglot Pro challenges you to match letters, words, or concepts across different languages and writing systems. You'll need to recognize patterns and make connections beyond your native tongue, like matching the Hebrew letter 'א' to its sound-alike 'A'.</p>
                    <p><h6>4. Lingo-Logic:</h6></p>
                      <p>For the true language lovers! This mode asks you to match words that share the same ancient root. Can you connect 'Grammar' with 'Diagram'? It's a journey into the history of words that tests not just your memory, but your understanding of where language comes from. A true test for any logophile!</p>
                  </p>
                </div>
              </div>
            </Draggable>,
            document.body
        )
        }

      </div>
    </React.StrictMode>
  );
}

export default GameOptions;