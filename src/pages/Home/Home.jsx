import React, { useState } from 'react'
import "./Home.css"
import HomeScreen from '../../components/HomeScreen/HomeScreen'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import GoToCard from '../../components/GoToCard/GoToCard'


function Home() {

  return (
    <>
      <div className='casino_maindiv'>
        <div className='casino_div'>
          <HomeScreen />
          <HomeBanner />
          <GoToCard />
        </div>
      </div></>
  )
}

export default Home
