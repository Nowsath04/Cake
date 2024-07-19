import React, { useState } from 'react'
import "./Casino.css"
import LiveWinCard from '../../components/LiveWinCard/LiveWinCard';
import OriginalCard from './../../components/OriginalCard/OriginalCard';
import SlotCard from '../../components/SlotCard/SlotCard';
import ProvidersCard from '../../components/ProvidersCard/ProvidersCard';
import LiveCasino from '../../components/LiveCasino/LiveCasino';
import NewReleaseCard from '../../components/NewReleaseCard/NewReleaseCard';
import GameShowCard from '../../components/GameShowCard/GameShowCard';
import BetList from '../../components/BetList/BetList';
import CakeOriginalCard from '../../components/cake-original-loading-card/CakeOriginalCard';
import Footer from '../../components/Footer/Footer';
import { NavLink, Outlet } from 'react-router-dom';


function Casino() {


  const [lobby, setLobby] = useState(false)
  const [originals, setOriginals] = useState(false)
  const [live, setLive] = useState(false)
  const [gameShows, setGameShows] = useState(false)
  const [favourites, setFavourites] = useState(false)
  const [recents, setRecents] = useState(false)


  const handleLobby = () => {
    setLobby(true)
    setOriginals(false)
    setLive(false)
    setGameShows(false)
    setFavourites(false)
    setRecents(false)
  }

  const handleOriginal = () => {
    setLobby(false)
    setOriginals(true)
    setLive(false)
    setGameShows(false)
    setFavourites(false)
    setRecents(false)
  }

  const handleLive = () => {
    setLobby(false)
    setOriginals(false)
    setLive(true)
    setGameShows(false)
    setFavourites(false)
    setRecents(false)
  }

  const handleGameShows = () => {
    setLobby(false)
    setOriginals(false)
    setLive(false)
    setGameShows(true)
    setFavourites(false)
    setRecents(false)
  }

  const handleFavourites = () => {
    setLobby(false)
    setOriginals(false)
    setLive(false)
    setGameShows(false)
    setFavourites(true)
    setRecents(false)
  }

  const handleRecents = () => {
    setLobby(false)
    setOriginals(false)
    setLive(false)
    setGameShows(false)
    setFavourites(false)
    setRecents(true)
  }

  return (
    <div className='casino_maindiv'>
      <div className='casino_div'>
        <div className='casino_heading'>CASINO</div>
        {/* <CasinoLobby /> */}
        <LiveWinCard />
        <div className='casinolobby_maindiv'>
          <div className='casinolobby_div'>
            <div className='casinolobby_category_div'>
              <NavLink to="/casino/lobby" onClick={handleLobby} style={{ background: lobby ? "#00A0FF" : "" }} className='casinolobby_categery_button'>
                <img src='/assets/images/CasinoLobby/lobby16x16.svg' />
                <div>Lobby</div>
              </NavLink>
              <NavLink to="/casino/cake-original" onClick={handleOriginal} style={{ background: originals ? "#00A0FF" : "" }} className='casinolobby_categery_button'>
                <img src='/assets/images/CasinoLobby/c16x16.svg' />
                <div>CAKE Originals</div>
              </NavLink>
              <NavLink to="/casino/live-casino" onClick={handleLive} style={{ background: live ? "#00A0FF" : "" }} className='casinolobby_categery_button'>
                <img src='/assets/images/CasinoLobby/live.svg' />
                <div>Live</div>
              </NavLink>
              <NavLink to="/casino/game-shows" onClick={handleGameShows} style={{ background: gameShows ? "#00A0FF" : "" }} className='casinolobby_categery_button'>
                <img src='/assets/images/CasinoLobby/tv.svg' />
                <div>Game Shows</div>
              </NavLink>
              <NavLink to="/casino/favourite" onClick={handleFavourites} style={{ background: favourites ? "#00A0FF" : "" }} className='casinolobby_categery_button'>
                <img src='/assets/images/CasinoLobby/star.svg' />
                <div>Favourites</div>
              </NavLink>
              <NavLink to="/casino/recents" onClick={handleRecents} style={{ background: recents ? "#00A0FF" : "" }} className='casinolobby_categery_button'>
                <img src='/assets/images/CasinoLobby/recent.svg' />
                <div>Recents</div>
              </NavLink>
            </div>
            <div className='casinolobby_search_div'>
              <div>
                <img src="/assets/images/CasinoLobby/search.png" alt='' />
              </div>
              <input placeholder='Search your game' />
            </div>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Casino
