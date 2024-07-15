import React from 'react'
import LiveWinCards from '../../components/LiveWinCards/LiveWinCards'
import "./Casino.css"
import CasinoLobby from '../../components/CasinoLobby/CasinoLobby'


function Casino() {
  return (
    <div className='casino_maindiv'>
      <div className='casino_div'>
        <div className='casino_heading'>CASINO</div>
        <LiveWinCards />
        <CasinoLobby />
      </div>
    </div>
  )
}

export default Casino
