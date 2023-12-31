import { useEffect, useState } from "react";
import './App.scss';
import { Players } from './components/Players/Players'
import img1 from '../src/assets/Alea_1.png'
import img2 from '../src/assets/Alea_2.png'
import img3 from '../src/assets/Alea_3.png'
import img4 from '../src/assets/Alea_4.png'
import img5 from '../src/assets/Alea_5.png'
import img6 from '../src/assets/Alea_6.png'

// Array med billedet og nummeret der bliver slået
function App() {
  const Images = [
    { image: img1, number: 1 },
    { image: img2, number: 2 },
    { image: img3, number: 3 },
    { image: img4, number: 4 },
    { image: img5, number: 5 },
    { image: img6, number: 6 }
  ];

  const [playerOneRoll, setPlayerOneRoll] = useState(1)
  const [playerTwoRoll, setPlayerTwoRoll] = useState(2)

  const [playerOnePoints, setPlayerOnePoints] = useState(0)
  const [playerTwoPoints, setPlayerTwoPoints] = useState(0)

  const [tiedGame, setTiedGame] = useState(false)

  const [winner, setWinner] = useState('');

  const [gameWon, setGameWon] = useState(false)

  useEffect(() => {
    console.log(playerOneRoll, playerTwoRoll);
  }, [playerOneRoll, playerTwoRoll])

  const getPlayerOneRoll = () => {
    const randomIndex = Math.floor(Math.random() * Images.length);
    const randomNumber = Images[randomIndex].number
    setPlayerOneRoll(randomNumber)
  }

  const getPlayerTwoRoll = () => {
    const randomIndex = Math.floor(Math.random() * Images.length);
    const randomNumber = Images[randomIndex].number
    setPlayerTwoRoll(randomNumber)
  }

  // Funktionen der ruller terningen
  const rollDice = () => {
    getPlayerOneRoll()
    getPlayerTwoRoll()
  };

  useEffect(() => {
    if (playerOnePoints === 5) {
      setWinner('Spiller 1 vinder!')
      setGameWon(true)
    }
    if (playerTwoPoints === 5) {
      setWinner('Spiller 2 vinder!')
      setGameWon(true)
    }
  }, [playerOnePoints, playerTwoPoints])

  useEffect(() => {
    // if (playerOneRoll != 1 && playerTwoRoll != 1) {
    calculateWin()
    // }
  }, [playerOneRoll, playerTwoRoll])

  function calculateWin() {
    if (playerOneRoll > playerTwoRoll) {
      setPlayerOnePoints(playerOnePoints + 1)
      setTiedGame(false)
    } else if (playerOneRoll < playerTwoRoll) {
      setPlayerTwoPoints(playerTwoPoints + 1)
      setTiedGame(false)
    } else if (playerOneRoll === playerTwoRoll) {
      setTiedGame(true)
    }
  }


  const reset = () => {
    setPlayerOnePoints(0);
    setPlayerTwoPoints(0);
    setPlayerOneRoll(1);
    setPlayerTwoRoll(2);
    setWinner('');
    setGameWon(false)
  };

  return (
    <>
      <div className='appContainer'>
        <Players playerPoints={playerOnePoints} playerRoll={playerOneRoll} player={1} />
        <div className="dice">
          <p className="tieText" style={{display: tiedGame ? 'block' : 'none'}}>Tie Game</p>
          <div className="imageContainer">
            <img className="diceImage" src={Images[Number(playerOneRoll - 1)].image} alt="Dice 1" />
            <img className="diceImage" src={Images[Number(playerTwoRoll - 1)].image} alt="Dice 2" />
          </div>
          <button onClick={rollDice} style={{display: gameWon ? "none" : "inline-block"}}>Slå</button>
          <button onClick={reset}>Genstart</button>
          <p className="winnerText">{winner}</p>
        </div>
        <Players playerPoints={playerTwoPoints} playerRoll={playerTwoRoll} player={2} />
      </div>
    </>
  );
}

export default App;
