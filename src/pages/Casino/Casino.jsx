import React, { useState } from 'react'
import "./Casino.css"
import LiveWinCard from '../../components/LiveWinCard/LiveWinCard';
import Footer from '../../components/Footer/Footer';
import { NavLink, Outlet } from 'react-router-dom';


function Casino() {

  return (
    <div className='casino_maindiv'>
      <div className='casino_div'>
        <div className='casino_heading'>CASINO</div>
        {/* <CasinoLobby /> */}
        <LiveWinCard />
        <div className='casinolobby_maindiv'>
          <div className='casinolobby_div'>
            <div className='casinolobby_category_div'>
              <NavLink to="/casino/lobby" style={({ isActive }) => ({ background: isActive ? "#00A0FF" : "" })} className='casinolobby_categery_button'>
                <img src='/assets/images/CasinoLobby/lobby16x16.svg' />
                <div>Lobby</div>
              </NavLink>
              <NavLink to="/casino/cake-original" style={({ isActive }) => ({ background: isActive ? "#00A0FF" : "" })} className='casinolobby_categery_button'>
                <img src='/assets/images/CasinoLobby/c16x16.svg' />
                <div>CAKE Originals</div>
              </NavLink>
              <NavLink to="/casino/live-casino" style={({ isActive }) => ({ background: isActive ? "#00A0FF" : "" })} className='casinolobby_categery_button'>
                <img src='/assets/images/CasinoLobby/live.svg' />
                <div>Live</div>
              </NavLink>
              <NavLink to="/casino/game-shows" style={({ isActive }) => ({ background: isActive ? "#00A0FF" : "" })} className='casinolobby_categery_button'>
                <img src='/assets/images/CasinoLobby/tv.svg' />
                <div>Game Shows</div>
              </NavLink>
              <NavLink to="/casino/favourite" style={({ isActive }) => ({ background: isActive ? "#00A0FF" : "" })} className='casinolobby_categery_button'>
                <img src='/assets/images/CasinoLobby/star.svg' />
                <div>Favourites</div>
              </NavLink>
              <NavLink to="/casino/recents" style={({ isActive }) => ({ background: isActive ? "#00A0FF" : "" })} className='casinolobby_categery_button'>
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
