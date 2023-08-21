import { useState } from "react";
import './App.css';
import { Players } from './components/Players/Players'
import img1 from '../src/assets/Alea_1.png'
import img2 from '../src/assets/Alea_2.png'
import img3 from '../src/assets/Alea_3.png'
import img4 from '../src/assets/Alea_4.png'
import img5 from '../src/assets/Alea_5.png'
import img6 from '../src/assets/Alea_6.png'

function App() {
  const Images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6

  ];

  const [currentFace, setCurrentFace] = useState(Images[0]);

  const rollDice = () => {
    const randomIndex = Math.floor(Math.random() * Images.length);
    setCurrentFace(Images[randomIndex]);
  };

  return (
    <>
      <div className='appContainer'>
        <Players />
        <div className="dice">
          <img src={currentFace}></img>
          <button onClick={rollDice}>Slå</button>
        </div>
        <Players />
      </div>
    </>
  );
}

export default App;
