import React, { useState } from "react";
import ActivableButton from "./activableButton.js";
import "../styles/gameOptions.css";
import Draggable from "react-draggable";

function GameOptions ( props ) {

  //props
  const {setIsStarted, setIsPlayed, setIsModeSelected, shuffleCard, setSelectedMode,setSelectedDifficulty, setSelectedSpeed} = props;
  
  
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
        return ("Error; Check Entries");
    }
  }
  
  
  // modes section info related codes:
  const [isInfoOpened, setIsInfoOpened] = useState(false);

  function handleModesInfoClick () {
    setIsInfoOpened(true);
  }

  //general button functions:
  function handlePlay () {
    setIsPlayed(true);
    shuffleCard();
  }

  function handleBack () {
    setIsStarted(false);
  }
      
  return (
    <React.StrictMode>
      <div className="options">

        <div className="mode">

          <div className="title modeTitle">
            <p>Select Mode <span onClick={handleModesInfoClick}><div className="infoIcon"></div></span></p>
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
              <p>Select Difficulty <span><div className="infoIcon" onClick={handleModesInfoClick}></div></span></p>
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
              <p>Select Speed <span><div className="infoIcon" onClick={handleModesInfoClick}></div></span></p>
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
          <button className="button buttonExtraPadding buttonCTA" onClick={handlePlay}>Play!</button>
        </div>


        {isInfoOpened &&
            <Draggable handle="topBar2" bounds="html">
              <div className="infoWindow">
                <div className="infoTitle">
                  <topBar2>
                    <h1>What the hell are these options?</h1>
                  </topBar2>
                </div>
                <div className="infoContent">
                  <p>ok! you are here because you are confused about the modes, they are unclear, and you want to know how they work. ;D</p>
                </div>
              </div>
            </Draggable>
          // </div>
        }

      </div>
    </React.StrictMode>
  );
}

export default GameOptions;