import React from 'react'
import "./NavBarCoin.css"
import { useDispatch } from 'react-redux'
import { coinSelect } from '../../sclices/navSlice'

const NavBarCoin = ({ value, slectedCoin, setSlectedOpen }) => {
  const dispatch = useDispatch()
  const handleClick = (value) => {
    dispatch(coinSelect(value))
    setSlectedOpen(false)
  }

  return (
    <div className={`navbarcoin ${slectedCoin == value.name ? "coin_active" : ""}`} onClick={() => handleClick(value)}>
      <p>${value.price}</p>
      <div className='coin_name'>
        <img src={value.icon} alt="" />
        <p>{value.name}</p>
      </div>
    </div>
  )
}

export default NavBarCoin
