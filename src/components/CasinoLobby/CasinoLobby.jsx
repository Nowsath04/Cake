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
        <div></div>
    )
}

export default CasinoLobby
