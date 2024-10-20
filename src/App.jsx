import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Hero from './HeroSection/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header></Header>    
        <Hero></Hero> 
    </>
  )
}

export default App
