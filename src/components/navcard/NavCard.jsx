import React from 'react'

const NavCard = ({ image, lable }) => {
  return (
    <div className="casino_sub">
      <div className="casino_sub_left">
        <img src={image} alt="" />
        <p>{lable}</p>
      </div>
    </div>
  )
}

export default NavCard
