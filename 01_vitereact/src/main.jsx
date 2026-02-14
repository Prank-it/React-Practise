import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from "react"
function MyApp()
{
  const username = "prankit";
  return (
  <h1>chai AUR CODE {username}</h1>
  )
}
const anotherElement = (
  <a href="https://google.com" target= "_blank"> visit google </a>
)
const anotherUser = " rahul";
//how react parameters are
const reactElement  = React.createElement(
  "a",
  {href: "https.google.com", target: "_blank" },
  "click me to visigt google",
  anotherUser
)
createRoot(document.getElementById('root')).render(
 
   
   reactElement
   
)
