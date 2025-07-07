import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

const App = () => {
  return (
    <div className='relative w-screen h-screen overflow-x-auto'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
