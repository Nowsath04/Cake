import React from 'react'
import "./HomeScreen.css"
import { Link } from 'react-router-dom'

function HomeScreen() {
    return (
        <div className='homescreen_maindiv'>
            <div className='homescreen_div'>
                <div className='mainHeading'>Welcome to Cake - <span>Online sports betting & Casino!</span></div>
                <div className='homescreen_btn_div'>
                    <Link className="btn register_home_btn">Register now</Link>
                    <div className='continueOr'>Or continue with</div>
                    <div className='social_icon_maindiv'>
                        <div className='Social_icon_div'><img src='\assets\images\CasinoLobby\social-1.svg' alt='' /></div>
                        <div className='Social_icon_div'><img src='\assets\images\CasinoLobby\social-2.svg' alt='' /></div>
                        <div className='Social_icon_div'><img src='\assets\images\CasinoLobby\social-3.svg' alt='' /></div>
                        <div className='Social_icon_div'><img src='\assets\images\CasinoLobby\social-4.svg' alt='' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen