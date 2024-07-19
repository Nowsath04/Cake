import React from 'react'
import "./BonusCard.css"
const BonusCard = ({content, value}) => {
  return (
    <div className='bonuscard'>
    <h2 className='heading'>{content}</h2>
    <h2 className='price'>{value}</h2>
    </div>
  )
}

export default BonusCard
