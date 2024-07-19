import React from 'react'
import "./HomeTableSheet.css"

function HomeTableSheet() {
    return (
        <div className='HomeTableSheet_maindiv'>
            <div className='HomeTableSheet_div'>
                <div className='HomeTableSheet_btn_div'>
                    <button className='btn'><img src='/assets/images/CasinoLobby/casino-home.svg' alt='' />Casino</button>
                    <button className='btn'><img src='/assets/images/CasinoLobby/sports-home.svg' alt='' />Sports</button>
                </div>
            </div>
        </div>
    )
}

export default HomeTableSheet