import { useState } from 'react'


function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
    <div className = "w-full h-screen duration-200"
    style = {{backgroundColor: color}}></div>
    <div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> </div>
    <div className = "flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2">
      <button 
      onClick = {() => setColor("red")}
      className= "outline px-4"
      style = {{backgroundColor : "red"}}>red</button>
      <button
       onClick = {() => setColor("green")}
       className= "outline px-4"
      style = {{backgroundColor : "green"}}>green</button>
      <button 
      onClick = {() => setColor("blue")}className= "outline px-4"
      style = {{backgroundColor : "blue"}}>blue</button>
      <button 
      onClick = {() => setColor("yellow")}className= "outline px-4"
      style = {{backgroundColor : "yellow"}}>yellow</button>
    </div>
 
    </>
  )
}

export default App
