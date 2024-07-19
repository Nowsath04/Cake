import React, { useState } from 'react'
import "./Home.css"
import HomeScreen from '../../components/HomeScreen/HomeScreen'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import GoToCard from '../../components/GoToCard/GoToCard'
import HomePayBanner from '../../components/HomePayBanner/HomePayBanner'
import HomeTableSheet from '../../components/HomeTableSheet/HomeTableSheet'
import HomeParagraph from '../../components/HomeParagraph/HomeParagraph'
import Footer from './../../components/Footer/Footer';


function Home() {

  return (
    <>
      <div className='casino_maindiv'>
        <div className='casino_div'>
          <HomeScreen />
          <HomeBanner />
          <GoToCard />
          <HomePayBanner />
          <HomeTableSheet />
          <HomeParagraph />
          <Footer />
        </div>
      </div></>
  )
}

export default Home
