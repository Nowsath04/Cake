import React from 'react'
import "./ChatMessage.css"
const ChatMessage = ({value}) => {
  return (
    <div className='ChatMessage'>
    <img src={value.image} alt="" />
     <p> {value.name}: <span>{value.message}</span></p>
     
    </div>
  )
}

export default ChatMessage
