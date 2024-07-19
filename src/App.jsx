import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { UpdateFollower } from 'react-mouse-follower'

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
      </UpdateFollower>
    </main>

  )
}

export default App
