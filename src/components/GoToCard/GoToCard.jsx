import React from 'react'
import "./GoToCard.css"
import { Link } from 'react-router-dom'

function GoToCard() {
    return (
        <div className='gotoCard_maindiv'>
            <div className='gotoCard_div'>
                <div className='gotoCard_main_heading'><img src='\assets\images\CasinoLobby\casino-home.svg' />Casino</div>
                <div className='gotoCard'>
                    <div className='gotoCard_img_div'>
                        <img src='\assets\images\CasinoLobby\casino-banner.jpg' alt='' />
                    </div>
                    <div className='gotoCard_content'>
                        <div className='gotoCard_heading'>Forefront Crypto Casino</div>
                        <p>
                            Rake.com offers a mind-boggling variety of casino games playable in every major currency. Court Lady Luck with thousands of classic and one-of-a-kind games, including Live Casino, Blackjack, Poker, Slots and numerous in-house Rake Originals you’ll find nowhere else.
                        </p>
                        <Link className='btn'>go to casino</Link>
                    </div>
                </div>
            </div>
            <div className='gotoCard_div'>
                <div className='gotoCard_main_heading'><img src='\assets\images\CasinoLobby\sports-home.svg' />Sports</div>
                <div className='gotoCard'>
                    <div className='gotoCard_img_div'>
                        <img src='\assets\images\CasinoLobby\casino-banner.jpg' alt='' />
                    </div>
                    <div className='gotoCard_content'>
                        <div className='gotoCard_heading'>Top-tier Crypto Sports Betting</div>
                        <p>
                            Get your game on at Rake.com, home to the widest variety of sports betting matches in the industry, including all UFC matches, Soccer, Basketball, E-sports, Cricket, Tennis and Virtual AI games.
                        </p>
                        <Link className='btn'>go to sportsbook</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoToCard