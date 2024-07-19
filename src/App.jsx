import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import { UpdateFollower } from 'react-mouse-follower'
import Hero from './components/Hero/Hero'

const App = () => {
  return (

    <main>
      <UpdateFollower
        mouseOptions={
          {
            backgroundColor: 'white',
            zIndex: '999',
            followSpeed: 1.5,
          }
        }
      >
        
        <Navbar />
        <Hero />
      </UpdateFollower>

      <UpdateFollower
        mouseOptions={
          {
            backgroundColor: 'black',
            zIndex: '999',
            followSpeed: 1.5,
          }
        }
      >
        <Services />
      </UpdateFollower>
      
      
    </main>

  )
}

export default App
