import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '../src/components/Home.jsx'
import Hero from '../src/components/Hero.jsx'
import SignUp from '../src/components/SignUp.jsx'
import Login from '../src/components/Login.jsx'
import Navigation from './components/Navigation.jsx'
import Houses from '../src/components/Houses.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Houses/>
    </>
  )
}

export default App
