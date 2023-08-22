import { useState } from "react";
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

  // Holder styr på hvad der er blevet rullet, både billede og nummer
  const [currentFace, setCurrentFace] = useState(Images[0].image);
  const [currentRoll, setCurrentRoll] = useState()

  // State der bestemmer hvilken spillers tur det er, som skifter mellem 1 og 2
  const [playerTurn, setPlayerTurn] = useState(1)

  // Holder styr på hvad de to spillere sidst har rullet
  const [playerOneRoll, setPlayerOneRoll] = useState()
  const [playerTwoRoll, setPlayerTwoRoll] = useState()

  // Holder styr på de to spilleres point
  const [playerOnePoints, setPlayerOnePoints] = useState(0)
  const [playerTwoPoints, setPlayerTwoPoints] = useState(0)

  // Funktionen der ruller terningen
  const rollDice = () => {
    // Vælger et random object fra Images arrayet der vælger hvad der er blevet rullet
    const randomIndex = Math.floor(Math.random() * Images.length);
    // Ændrer currentFace og currentRoll til det der senest er blevet rullet
    setCurrentFace(Images[randomIndex].image);
    setCurrentRoll(Images[randomIndex].number)

    // Hvis det er spiller 1 tur...
    if (playerTurn === 1) {
      // ...Så ændrer den playerOneRoll til hvad der er blevet rullet...
      setPlayerOneRoll(currentRoll)
      // ...Og turen skifter til spiller 2
      setPlayerTurn(2)
      console.log(playerOneRoll);

      // Hvis det er spiller 2 tur...
    } else if (playerTurn === 2) {
      // ...Så ændrer den playerTwoRoll til hvad der er blevet rullet...
      setPlayerTwoRoll(currentRoll)
      // Beregner om de to tal der er blevet slået er lige store
      if (playerOneRoll === playerTwoRoll) {
        // Hvis de er lige store, så kører tieGame
        tieGame()
      } else {
        // Hvis de ikke er lige store, så kører calculateWin
        calculateWin()
      }
      // ...Og turen skifter til spiller 2
      setPlayerTurn(1)
      console.log(playerTwoRoll);
    }
  };

  // Fortæller hvis terningerne slår det samme, så ingen af spillerne får point
  function tieGame() {
    alert('Tie Game!')
  }

  // Udregner hvem der har vundet spillet, og giver 1 point til den spiller der har
  function calculateWin() {
    if (playerOneRoll > playerTwoRoll) {
      setPlayerOnePoints(playerOnePoints + 1)
    } else {
      setPlayerTwoPoints(playerTwoPoints + 1)
    }
  }


  const reset = () => {
    setCurrentFace(Images[0].image);
    setCurrentRoll();
    setPlayerTurn(1);
    setPlayerOnePoints(0);
    setPlayerTwoPoints(0);
    setPlayerOneRoll();
    setPlayerTwoRoll();

  };

  return (
    <>
      <div className='appContainer'> 
        <Players playerPoints={playerOnePoints} playerRoll={playerOneRoll} player={1} />
        <div className="dice">
          <img src={currentFace}></img>
          <button onClick={rollDice}>Slå</button>
          <button onClick={reset}>Genstart</button>
        </div>
        <Players playerPoints={playerTwoPoints} playerRoll={playerTwoRoll} player={2} />
      </div>
    </>
  );
}

export default App;
