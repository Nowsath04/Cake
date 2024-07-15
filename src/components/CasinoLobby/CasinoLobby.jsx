import React, { useState } from 'react'
import "./CasinoLobby.css"

function CasinoLobby() {

    const [lobby, setLobby] = useState(true)
    const [originals, setOriginals] = useState(false)
    const [live, setLive] = useState(false)
    const [gameShows, setGameShows] = useState(false)
    const [favourites, setFavourites] = useState(false)
    const [recents, setRecents] = useState(false)


    const handleLobby = () => {
        setLobby(true)
        setOriginals(false)
        setLive(false)
        setGameShows(false)
        setFavourites(false)
        setRecents(false)
    }

    const handleOriginal = () => {
        setLobby(false)
        setOriginals(true)
        setLive(false)
        setGameShows(false)
        setFavourites(false)
        setRecents(false)
    }

    const handleLive = () => {
        setLobby(false)
        setOriginals(false)
        setLive(true)
        setGameShows(false)
        setFavourites(false)
        setRecents(false)
    }

    const handleGameShows = () => {
        setLobby(false)
        setOriginals(false)
        setLive(false)
        setGameShows(true)
        setFavourites(false)
        setRecents(false)
    }

    const handleFavourites = () => {
        setLobby(false)
        setOriginals(false)
        setLive(false)
        setGameShows(false)
        setFavourites(true)
        setRecents(false)
    }

    const handleRecents = () => {
        setLobby(false)
        setOriginals(false)
        setLive(false)
        setGameShows(false)
        setFavourites(false)
        setRecents(true)
    }
    return (
        <div className='casinolobby_maindiv'>
            <div className='casinolobby_div'>
                <div className='casinolobby_category_div'>
                    <button onClick={handleLobby} style={{ background: lobby ? "#00A0FF" : "" }} className='casinolobby_categery_button'>
                        <img src='\assets\images\CasinoLobby\lobby.png' />
                        <div>Lobby</div>
                    </button>
                    <button onClick={handleOriginal} style={{ background: originals ? "#00A0FF" : "" }} className='casinolobby_categery_button'>
                        <img src='\assets\images\CasinoLobby\lobby.png' />
                        <div>Originals</div>
                    </button>
                    <button onClick={handleLive} style={{ background: live ? "#00A0FF" : "" }} className='casinolobby_categery_button'>
                        <img src='\assets\images\CasinoLobby\lobby.png' />
                        <div>Live</div>
                    </button>
                    <button onClick={handleGameShows} style={{ background: gameShows ? "#00A0FF" : "" }} className='casinolobby_categery_button'>
                        <img src='\assets\images\CasinoLobby\lobby.png' />
                        <div>Game Shows</div>
                    </button>
                    <button onClick={handleFavourites} style={{ background: favourites ? "#00A0FF" : "" }} className='casinolobby_categery_button'>
                        <img src='\assets\images\CasinoLobby\lobby.png' />
                        <div>Favourites</div>
                    </button>
                    <button onClick={handleRecents} style={{ background: recents ? "#00A0FF" : "" }} className='casinolobby_categery_button'>
                        <img src='\assets\images\CasinoLobby\lobby.png' />
                        <div>Recents</div>
                    </button>
                </div>
                <div className='casinolobby_search_div'>
                    <div>
                        <img src="\assets\images\CasinoLobby\search.png" alt='' />
                    </div>
                    <input placeholder='Search your game' />
                </div>
            </div>
        </div>
    )
}

export default CasinoLobby
