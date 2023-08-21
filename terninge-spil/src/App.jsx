import { useState } from 'react'
import style from './App.scss'
import { Players } from './components/Players/Players'

function App() {



  return (
    <div className={style.appContainer}>
      <Players />
        <div>

        </div>
      <Players />
    </div>
  )
}

export default App
