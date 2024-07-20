import React from 'react'
import "./HomePayBanner.css"
import { Link } from 'react-router-dom'

function HomePayBanner() {
    return (
        <div className='HomePayBanner_div'>
            <div>Purchase crypto from the following providers</div>
            <div className='HomePayBanner_img_div'>
                <img src='\assets\images\CasinoLobby\payment-1.svg' alt='' />
                <img src='\assets\images\CasinoLobby\payment-2.svg' alt='' />
                <img src='\assets\images\CasinoLobby\payment-3.svg' alt='' />
                <img src='\assets\images\CasinoLobby\payment-4.svg' alt='' />
                <img src='\assets\images\CasinoLobby\payment-5.svg' alt='' />
                <img src='\assets\images\CasinoLobby\payment-6.svg' alt='' />
            </div>
            <Link className='btn HomePayBanner_btn'>buy crypto</Link>
        </div>
    )
}

export default HomePayBanner