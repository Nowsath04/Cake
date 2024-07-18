import React from 'react'
import "./NavCoinSelect.css"
const NavCoinSelect = () => {
  return (
    <div className='navcoinselect'>
    <div className="nav_select">
        <div className="nav_select_left">
            <p>0.0000</p>
            <img src="\assets\images\nav\icon\BNB.svg" alt="" />
            <img src="\assets\images\nav\icon\down_arrow.svg" alt="" />
        </div>
        <button className='btn'>WALLET</button>
    </div>
    <div className="allnav_coin">
         
    </div>
    </div>
  )
}

export default NavCoinSelect
