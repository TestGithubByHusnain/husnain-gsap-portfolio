import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import ServiceSummary from './sections/ServiceSummary'
import Services from './sections/Services'

const App = () => {
  return (
    <div className='relative w-screen h-screen overflow-x-auto'>
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
    </div>
  )
}

export default App
