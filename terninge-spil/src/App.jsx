import { useState } from "react";
import './App.scss';
import { Players } from './components/Players/Players'
import img1 from '../src/assets/Alea_1.png'
import img2 from '../src/assets/Alea_2.png'
import img3 from '../src/assets/Alea_3.png'
import img4 from '../src/assets/Alea_4.png'
import img5 from '../src/assets/Alea_5.png'
import img6 from '../src/assets/Alea_6.png'

function App() {
  const Images = [
    { image: img1, number: 1 },
    { image: img2, number: 2 },
    { image: img3, number: 3 },
    { image: img4, number: 4 },
    { image: img5, number: 5 },
    { image: img6, number: 6 }
  ];

  const [currentFace, setCurrentFace] = useState(Images[0].image);
  const [currentRoll, setCurrentRoll] = useState()

  const [playerTurn, setPlayerTurn] = useState(1)

  const [playerOneRoll, setPlayerOneRoll] = useState()
  const [playerTwoRoll, setPlayerTwoRoll] = useState()

  const [playerOnePoints, setPlayerOnePoints] = useState(0)
  const [playerTwoPoints, setPlayerTwoPoints] = useState(0)

  const rollDice = () => {
    const randomIndex = Math.floor(Math.random() * Images.length);
    setCurrentFace(Images[randomIndex].image);
    setCurrentRoll(Images[randomIndex].number)

    if (playerTurn === 1) {
      setPlayerOneRoll(currentRoll)
      setPlayerTurn(2)
      console.log(playerOneRoll);
    } else if (playerTurn === 2) {
      setPlayerTwoRoll(currentRoll)
      if (playerOneRoll === playerTwoRoll) {
        tieGame()
      } else {
        calculateWin()
      }
      setPlayerTurn(1)
      console.log(playerTwoRoll);
    }
  };

  function tieGame() {
    alert('Tie Game!')
  }

  function calculateWin() {
    if (playerOneRoll > playerTwoRoll) {
      setPlayerOnePoints(playerOnePoints + 1)
    } else {
      setPlayerTwoPoints(playerTwoPoints + 1)
    }
  }

  return (
    <>
      <div className='appContainer'>
        <Players playerPoints={playerOnePoints} playerRoll={playerOneRoll} player={1}/>
        <div className="dice">
          <img src={currentFace}></img>
          <button onClick={rollDice}>Slå</button>
        </div>
        <Players playerPoints={playerTwoPoints} playerRoll={playerTwoRoll} player={2}/>
      </div>
    </>
  );
}

export default App;
