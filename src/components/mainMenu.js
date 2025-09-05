import React from "react";
import "../styles/mainMenu.css";

function MainMenu ( props ) {

  const {setIsStarted} = props;

  function handleStart () {
      setIsStarted(true);
  }

  return (
    <React.StrictMode>
      <div className="mainMenu">

        {/* <div className="displays">
          <div className="scoreDiv">
            <span>Score</span>
            <input className="display score" type="text" readOnly value="0"></input>
          </div>
          <div className="messagesDiv">
            <input className="display messages" type="text" readOnly value="asdasd"></input>
          </div>
        </div> */}

        <div className="mainMenuBtns">
          <button
            className="button buttonCTA buttonExtraPadding"
            onClick={handleStart}
          >
          Start
          </button>

          <button
            className="button buttonCTA buttonExtraPadding deactivBtn"
          >
          Multiplayer
          </button>

          <button
            className="button buttonCTA buttonExtraPadding"
          >
          Leaderboard
          </button>

          <button
            className="button buttonCTA buttonExtraPadding"
          >
          Options
          </button>

          <button
            className="button buttonCTA buttonExtraPadding"
          >
          Credits
          </button>

          <button
            className="button buttonCTA buttonExtraPadding"
          >
          Exit
          </button>
        </div>

        

      </div>
    </React.StrictMode>
  )
}

export default MainMenu;