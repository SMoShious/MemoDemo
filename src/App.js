import React, { useState } from "react";
import GameOptions from './components/gameOptions';
import GameBoard from "./components/gameBoard";
import MainMenu from "./components/mainMenu";
import Draggable from "react-draggable";
import './App.css';

function App() {

  const [isStarted, setIsStarted] = useState(false);
  const [isPlayed, setIsPlayed] = useState(false);
  const [isModeSelected, setIsModeSelected] = useState(false);
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  // const [score, setScore] = useState(0);

  const [selectedDifficulty, setSelectedDifficulty] = useState(1);
  const [selectedMode, setSelectedMode] = useState(null);
  const [selectedSpeed, setSelectedSpeed] = useState(1300);

  const allCards = {
    anagramSet : {
      cardsEasy : 
        [
          [{content: "ape"}, {content: "pea"}],
          [{content: "act"}, {content: "cat"}],
          [{content: "eat"}, {content: "tea"}],
          [{content: "raw"}, {content: "war"}],
          [{content: "saw"}, {content: "was"}],
          [{content: "how"}, {content: "who"}],
          [{content: "pat"}, {content: "tap"}],
          [{content: "won"}, {content: "now"}],
          [{content: "use"}, {content: "sue"}],
          [{content: "ear"}, {content: "era"}],
          [{content: "ram"}, {content: "arm"}],
          [{content: "arc"}, {content: "car"}],
          [{content: "pan"}, {content: "nap"}],
          [{content: "tab"}, {content: "bat"}],
          [{content: "urn"}, {content: "run"}],
          [{content: "yap"}, {content: "pay"}],
          [{content: "last"}, {content: "salt"}],
          [{content: "keen"}, {content: "knee"}],
          [{content: "reef"}, {content: "free"}],
          [{content: "more"}, {content: "Rome"}],
          [{content: "solo"}, {content: "Oslo"}],
          [{content: "none"}, {content: "neon"}],
          [{content: "inch"}, {content: "chin"}],
          [{content: "coal"}, {content: "cola"}],
          [{content: "chum"}, {content: "much"}],
          [{content: "balm"}, {content: "lamb"}],
          [{content: "atom"}, {content: "bomb"}],
          [{content: "reap"}, {content: "pear"}],
          [{content: "ours"}, {content: "sour"}],
          [{content: "mars"}, {content: "rams"}],
          [{content: "flow"}, {content: "wolf"}],
          [{content: "beak"}, {content: "bake"}],
          [{content: "best"}, {content: "bets"}],
          [{content: "face"}, {content: "cafe"}],
          [{content: "team"}, {content: "meat"}],
          [{content: "lips"}, {content: "slip"}],
          [{content: "fast"}, {content: "fats"}],
          [{content: "grin"}, {content: "ring"}],
          [{content: "tone"}, {content: "note"}],
          [{content: "sink"}, {content: "skin"}],
          [{content: "race"}, {content: "care"}],
          [{content: "vase"}, {content: "save"}],
          [{content: "west"}, {content: "stew"}],
        ],

      cardsMedium :
        [
          [{content: "soils"}, {content: "oils"}],
          [{content: "pairs"}, {content: "Paris"}],
          [{content: "robed"}, {content: "bored"}],
          [{content: "saint"}, {content: "satin"}],
          [{content: "sales"}, {content: "seals"}],
          [{content: "salts"}, {content: "lasts"}],
          [{content: "sharp"}, {content: "harps"}],
          [{content: "siren"}, {content: "rinse"}],
          [{content: "skill"}, {content: "kills"}],
          [{content: "snail"}, {content: "nails"}],
          [{content: "sober"}, {content: "seals"}],
          [{content: "spray"}, {content: "prays"}],
          [{content: "stack"}, {content: "tacks"}],
          [{content: "stick"}, {content: "ticks"}],
          [{content: "waits"}, {content: "waist"}],
          [{content: "votes"}, {content: "stove"}],
          [{content: "ocean"}, {content: "canoe"}],
          [{content: "parks"}, {content: "spark"}],
          [{content: "ports"}, {content: "sport"}],
          [{content: "posts"}, {content: "stops"}],
          [{content: "march"}, {content: "charm"}],
          [{content: "meals"}, {content: "males"}],
          [{content: "melon"}, {content: "lemon"}],
          [{content: "needs"}, {content: "dense"}],
          [{content: "diary"}, {content: "dairy"}],
          [{content: "fried"}, {content: "fired"}],
          [{content: "thing"}, {content: "night"}],
          [{content: "dusty"}, {content: "study"}],
          [{content: "taste"}, {content: "state"}],
          [{content: "avenge"}, {content: "Geneva"}],
          [{content: "counts"}, {content: "Tucson"}],
          [{content: "looted"}, {content: "Toledo"}],
          [{content: "nerved"}, {content: "Denver"}],
          [{content: "panels"}, {content: "Naples"}],
          [{content: "fringe"}, {content: "finger"}],
          [{content: "expect"}, {content: "except"}],
          [{content: "silent"}, {content: "listen"}],
          [{content: "diagnose"}, {content: "San Diego"}],
          [{content: "salvages"}, {content: "Las Vegas"}],
        ],

      cardsHard :
        [
          [{content: "a decimal point"}, {content: "I’m a dot in place"}],
          [{content: "an aisle"}, {content: "is a lane"}],
          [{content: "dormitory"}, {content: "dirty room"}],
          [{content: "dynamite"}, {content: "may it end"}],
          [{content: "signature"}, {content: "a true sign"}],
          [{content: "Statue of Liberty"}, {content: "built to stay free"}],
          [{content: "restaurant"}, {content: "runs a treat"}],
          [{content: "old England"}, {content: "golden land"}],
          [{content: "the Morse Code"}, {content: "here come dots"}],
          [{content: "year two thousand"}, {content: "a year to shut down"}],
          [{content: "gold and silver"}, {content: "grand old evils"}],
        ],
    },

    cpuSet: {
      cardsEasy : 
        [
          [{content: "2/2"}, {content: "1"}],
          [{content: "4/2"}, {content: "2"}],
          [{content: "2+1"}, {content: "3"}],
          [{content: "8/2"}, {content: "4"}],
          [{content: "2*3"}, {content: "6"}],
          [{content: "4+3"}, {content: "7"}],
          [{content: "12-4"}, {content: "8"}],
          [{content: "10-1"}, {content: "9"}],
          [{content: "5*2"}, {content: "10"}],
          [{content: "11-0"}, {content: "11"}],
          [{content: "6*2"}, {content: "12"}],
          [{content: "6*4"}, {content: "24"}],
          [{content: "5*5"}, {content: "25"}],
          [{content: "3*11"}, {content: "33"}],
          [{content: "4*8"}, {content: "34"}],
          [{content: "6*6"}, {content: "36"}],
          [{content: "80/2"}, {content: "40"}],
          [{content: "90/2"}, {content: "45"}],
          [{content: "6*9"}, {content: "54"}],
          [{content: "7*8"}, {content: "56"}],
          [{content: "7*9"}, {content: "63"}],
          [{content: "70+2"}, {content: "72"}],
          [{content: "9*9"}, {content: "81"}],
          [{content: "9*11"}, {content: "99"}],
        ],
      cardsMedium : 
        [
          [{content: "2x+2=0"}, {content: "-1"}],
          [{content: "3x=0"}, {content: "0"}],
          [{content: "3x-3=0"}, {content: "1"}],
          [{content: "20x+7=47"}, {content: "2"}],
          [{content: "2x+4=10"}, {content: "3"}],
          [{content: "2x+3=11"}, {content: "4"}],
          [{content: "14x-3=67"}, {content: "5"}],
          [{content: "4x+11=35"}, {content: "6"}],
          [{content: "10x-3=67"}, {content: "7"}],
          [{content: "6+5x=46"}, {content: "8"}],
          [{content: "75=6x+21"}, {content: "9"}],
          [{content: "12=92-8x"}, {content: "10"}],
          [{content: "82-7x=5"}, {content: "11"}],
          [{content: "2x+8=32"}, {content: "12"}],
          [{content: "33-2x=7"}, {content: "13"}],
          [{content: "97-4x=41"}, {content: "14"}],
          [{content: "3=212-11x"}, {content: "19"}],
        ],
      cardsHard : 
        undefined,
    },

    polyglotSet: {
      cardsEasy : 
        [
          [{content: "A"}, {content: "א"}],
          [{content: "B"}, {content: "ב"}],
          [{content: "G"}, {content: "ג"}],
          [{content: "D"}, {content: "ד"}],
          [{content: "H"}, {content: "ה"}],
          [{content: "V"}, {content: "ו"}],
          [{content: "Z"}, {content: "ז"}],
          [{content: "Kh"}, {content: "ח"}],
          [{content: "T"}, {content: "ת"}],
          [{content: "i"}, {content: "י"}],
          [{content: "K"}, {content: "כ"}],
          [{content: "L"}, {content: "ל"}],
          [{content: "M"}, {content: "מ"}],
          [{content: "N"}, {content: "ן"}],
          [{content: "S"}, {content: "ס"}],
          [{content: "Sh"}, {content: "ש"}],
          [{content: "Ts"}, {content: "ץ"}],
        ],
      cardsMedium : 
        [
          [{content: "2x+2=0"}, {content: "-1"}],
          [{content: "3x=0"}, {content: "0"}],
          [{content: "3x-3=0"}, {content: "1"}],
          [{content: "20x+7=47"}, {content: "2"}],
          [{content: "2x+4=10"}, {content: "3"}],
          [{content: "2x+3=11"}, {content: "4"}],
          [{content: "14x-3=67"}, {content: "5"}],
          [{content: "4x+11=35"}, {content: "6"}],
          [{content: "10x-3=67"}, {content: "7"}],
          [{content: "6+5x=46"}, {content: "8"}],
          [{content: "75=6x+21"}, {content: "9"}],
          [{content: "12=92-8x"}, {content: "10"}],
          [{content: "82-7x=5"}, {content: "11"}],
          [{content: "2x+8=32"}, {content: "12"}],
          [{content: "33-2x=7"}, {content: "13"}],
          [{content: "97-4x=41"}, {content: "14"}],
          [{content: "3=212-11x"}, {content: "19"}],
        ],
      cardsHard : 
        [
          [{content: "2/2"}, {content: "1"}],
          [{content: "4/2"}, {content: "2"}],
          [{content: "2+2"}, {content: "3"}],
          [{content: "8/2"}, {content: "4"}],
          [{content: "2*3"}, {content: "6"}],
          [{content: "4+3"}, {content: "7"}],
          [{content: "12-4"}, {content: "8"}],
          [{content: "10-1"}, {content: "9"}],
          [{content: "5*2"}, {content: "10"}],
          [{content: "11-0"}, {content: "11"}],
          [{content: "6*2"}, {content: "12"}],
          [{content: "6*4"}, {content: "24"}],
          [{content: "5*5"}, {content: "25"}],
          [{content: "3*11"}, {content: "33"}],
          [{content: "4*8"}, {content: "34"}],
          [{content: "6*6"}, {content: "36"}],
          [{content: "80/2"}, {content: "40"}],
          [{content: "90/2"}, {content: "45"}],
          [{content: "6*9"}, {content: "54"}],
          [{content: "7*8"}, {content: "56"}],
          [{content: "7*9"}, {content: "63"}],
          [{content: "70+2"}, {content: "72"}],
          [{content: "9*9"}, {content: "81"}],
          [{content: "9*11"}, {content: "99"}],
        ],
    } 
  }
  
  function cardStandardizer (card, id) {
    let standardCard =
    card.map ((card) => ({...card, id: id, matched: false}));
    
    return standardCard;
  }

  function uniqueRandomIndexMaker (originLength, length) {

    if (originLength < length)
      return;
      
    let indexes = new Set()
    while (indexes.size !== length) {
      indexes.add(Math.floor (Math.random() * originLength));
    }
    return [...indexes];
  }
  
  function cardSetMaker (difficulty, gameMode, gameSize) {
    let standardCardSet = [];
    let cardSet = [];

    let modeAddress;
    switch(gameMode) {
      case 1 : 
        modeAddress = "anagramSet";
        break;
      case 2 :
        modeAddress = "cpuSet";
        break;
      case 3 :
        modeAddress = "polyglotSet";
        break;
      case 4 :
        modeAddress = "nchomskySet";
        break;
      default :
        return;
    }

    let difficultyAddress;
    switch (difficulty) {
      case 1 : 
        difficultyAddress = "cardsEasy";
        break;
      case 2 :
        difficultyAddress = "cardsMedium";
        break;
      case 3 :
        difficultyAddress = "cardsHard";
        break;
      default :
        return;
    }

    let randUniqueIndexes =
      uniqueRandomIndexMaker(allCards[modeAddress][difficultyAddress].length, gameSize);

    for (let i = 0; i < randUniqueIndexes.length; i++) {
      standardCardSet.push (
        cardStandardizer(
          allCards[modeAddress][difficultyAddress][randUniqueIndexes[i]]
          , i
        )
      );
    }
    for (let i = 0; i < standardCardSet.length; i++) {
      for(let j = 0; j < 2; j++) {
        cardSet.push(standardCardSet[i][j]);
      }
    }
    return cardSet;
  }

  
  const selectedCards = cardSetMaker(selectedDifficulty, selectedMode, 10);

  const shuffleCard = () => {
    const shuffledCards = [...selectedCards]
    .sort (() => Math.random() - 0.5)
    .map ((card) => ({...card, id: card.id, key: Math.random()}))
    
    setCards(shuffledCards);
    setTurns(0);
  }


  return (
    <Draggable bounds='body' handle="topBar">

      <div className="App">

        <topBar className="gameTitle">
          <div>
            <h1>Memo Demo</h1>
            <p>Not a regular Memory game!</p>
          </div>
        </topBar>

        <div className='right'>

          {!isStarted && !isPlayed &&
          <MainMenu
            setIsStarted={setIsStarted}
            isModeSelected={isModeSelected}
          />
          }

          {isStarted && !isPlayed &&
            <GameOptions
              setIsModeSelected={setIsModeSelected}
              setIsStarted={setIsStarted}
              setIsPlayed={setIsPlayed}
              shuffleCard={shuffleCard}

              setSelectedDifficulty={setSelectedDifficulty}
              setSelectedSpeed={setSelectedSpeed}
              setSelectedMode={setSelectedMode}
            />
          }

          {isPlayed && isStarted &&
            <GameBoard
              cards={cards}
              setCards={setCards}
              turns={turns}
              setTurns={setTurns}
              // setScore={setScore}

              selectedSpeed={selectedSpeed}
            />
          }
        </div>

      </div>

    </Draggable>
  );
}

export default App;