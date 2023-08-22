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
  const dice = [
    { image: img1, number: 1 },
    { image: img2, number: 2 },
    { image: img3, number: 3 },
    { image: img4, number: 4 },
    { image: img5, number: 5 },
    { image: img6, number: 6 }
  ]
  let diceRoll = dice[0].number
  
  const [currentGame, setCurrentGame] = useState({ playerOneRoll: 0, playerTwoRoll: 0 })
  
  const [playerTurn, setPlayerTurn] = useState(1)
  

  useEffect(() => {
    console.log(currentGame, playerTurn);
  }, [playerTurn])


  function rollDice() {

    const randomIndex = Math.floor(Math.random() * dice.length);

    diceRoll = dice[randomIndex]

    if (playerTurn === 1) {
      setCurrentGame({playerOneRoll: diceRoll.number, playerTwoRoll: currentGame.playerTwoRoll})
      setPlayerTurn(2)
    } else {
      setCurrentGame({playerOneRoll: currentGame.playerOneRoll, playerTwoRoll: diceRoll.number})
      setPlayerTurn(1)
    }


  }


  return (
    <>
      <div className='appContainer'>
        <Players />
        <div className="dice">
          <img></img>
          <button onClick={rollDice}>Slå</button>
          <button>Genstart</button>
        </div>
        <Players />
      </div>
    </>
  );
}

export default App;
