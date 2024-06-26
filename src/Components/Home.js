import React from 'react'

import '../Styles/Home.css'
import Assets from './Assets'
import Charts from './Charts'
import CoinCard from './CoinCard'


function Home() {
  
  return (
    <div className='home-page'>
      <div className='contents'>
          <Assets/>
          <Charts/>
          <CoinCard/>
          

      </div>
    </div>
  )
}

export default Home