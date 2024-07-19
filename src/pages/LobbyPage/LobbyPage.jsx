import React from 'react'
import OriginalCard from '../../components/OriginalCard/OriginalCard'
import SlotCard from '../../components/SlotCard/SlotCard'
import ProvidersCard from '../../components/ProvidersCard/ProvidersCard'
import LiveCasino from '../../components/LiveCasino/LiveCasino'
import NewReleaseCard from '../../components/NewReleaseCard/NewReleaseCard'
import GameShowCard from '../../components/GameShowCard/GameShowCard'
import BetList from '../../components/BetList/BetList'

function LobbyPage() {
    return (
        <>
            {/* <originalCard/> */}
            <OriginalCard />
            {/* <SlotCard/> */}
            <SlotCard />
            {/* <Providers/> */}
            <ProvidersCard />
            {/* <Live Casino/> */}
            <LiveCasino />
            {/* <New release/> */}
            <NewReleaseCard />
            {/* <Game Shows/> */}
            <GameShowCard />
            {/* < My Bets /> */}
            <BetList />
            {/* <Cake original Card/> */}
        </>
    )
}

export default LobbyPage
