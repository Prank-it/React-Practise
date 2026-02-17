import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
  //let counter = 5 ;

  const addValue = () => {
    if(counter<=19)
    {
    counter++;
    }
    setCounter(counter);

  }
  const deleteValue =() =>
  {
    if(counter>=1)
    counter--;
    setCounter(counter);
  }


  return (
    <>
    <h1>Chai aur react</h1>
    <h2>counter value: {counter}</h2>
    <button 
    onClick = {addValue}>
      Add value
    </button>
    <br/>
    <button
    onClick={deleteValue}>
      decrease value
    </button>
    </>
  )
}

export default App
