import React, { useState } from 'react'
import "./BetList.css"

function BetList() {


    const [myBet, setMyBet] = useState(true)
    const [allBet, setAllBet] = useState(false)
    const [highRoller, setHighRoller] = useState(false)


    const handleMybet = () => {
        setMyBet(true)
        setAllBet(false)
        setHighRoller(false)
    }

    const handleAllbet = () => {
        setMyBet(false)
        setAllBet(true)
        setHighRoller(false)
    }

    const handleHighRoller = () => {
        setMyBet(false)
        setAllBet(false)
        setHighRoller(true)
    }



    return (
        <>
            <div className='casinolobby_maindiv'>
                <div className='casinolobby_div'>
                    <div className='casinolobby_bet_div'>
                        <button onClick={handleMybet} style={{ background: myBet ? "#00A0FF" : "" }} className='casinolobby_bet_button'>
                            <div>My Bets</div>
                        </button>
                        <button onClick={handleAllbet} style={{ background: allBet ? "#00A0FF" : "" }} className='casinolobby_bet_button'>
                            <div>All Bets</div>
                        </button>
                        <button onClick={handleHighRoller} style={{ background: highRoller ? "#00A0FF" : "" }} className='casinolobby_bet_button'>
                            <div>High Rollers</div>
                        </button>
                    </div>
                </div>
            </div>
            <table className='bet_table_div'>
                <tr>
                    <th>game</th>
                    <th>user</th>
                    <th>time</th>
                    <th>bet amount</th>
                    <th>multiplier</th>
                    <th>payout</th>
                </tr>
                <tr>
                    <td className='game_name_img'><img src='\assets\images\CasinoLobby\bet.svg' alt='' />Cherry Pop</td>
                    <td className='blue_color'>Greeky77</td>
                    <td>1:15 PM</td>
                    <td className='bitcoin_img'>0.0052 BTC <img src='\assets\images\CasinoLobby\bitcoin.svg' alt='' /></td>
                    <td>10.00x </td>
                    <td className='bitcoin_img green_color'>0.0052 BTC <img src='\assets\images\CasinoLobby\bitcoin.svg' alt='' /></td>
                </tr>
                <tr>
                    <td className='game_name_img'><img src='\assets\images\CasinoLobby\bet.svg' alt='' />Cherry Pop</td>
                    <td className='blue_color'>Greeky77</td>
                    <td>1:15 PM</td>
                    <td className='bitcoin_img'>0.0052 BTC <img src='\assets\images\CasinoLobby\bitcoin.svg' alt='' /></td>
                    <td>10.00x </td>
                    <td className='bitcoin_img green_color'>0.0052 BTC <img src='\assets\images\CasinoLobby\bitcoin.svg' alt='' /></td>
                </tr>
                <tr>
                    <td className='game_name_img'><img src='\assets\images\CasinoLobby\bet.svg' alt='' />Cherry Pop</td>
                    <td className='blue_color'>Greeky77</td>
                    <td>1:15 PM</td>
                    <td className='bitcoin_img'>0.0052 BTC <img src='\assets\images\CasinoLobby\bitcoin.svg' alt='' /></td>
                    <td>10.00x </td>
                    <td className='bitcoin_img green_color'>0.0052 BTC <img src='\assets\images\CasinoLobby\bitcoin.svg' alt='' /></td>
                </tr>
                <tr>
                    <td className='game_name_img'><img src='\assets\images\CasinoLobby\bet.svg' alt='' />Cherry Pop</td>
                    <td className='blue_color'>Greeky77</td>
                    <td>1:15 PM</td>
                    <td className='bitcoin_img'>0.0052 BTC <img src='\assets\images\CasinoLobby\bitcoin.svg' alt='' /></td>
                    <td>10.00x </td>
                    <td className='bitcoin_img green_color'>0.0052 BTC <img src='\assets\images\CasinoLobby\bitcoin.svg' alt='' /></td>
                </tr>
                <tr>
                    <td className='game_name_img'><img src='\assets\images\CasinoLobby\bet.svg' alt='' />Cherry Pop</td>
                    <td className='blue_color'>Greeky77</td>
                    <td>1:15 PM</td>
                    <td className='bitcoin_img'>0.0052 BTC <img src='\assets\images\CasinoLobby\bitcoin.svg' alt='' /></td>
                    <td>10.00x </td>
                    <td className='bitcoin_img green_color'>0.0052 BTC <img src='\assets\images\CasinoLobby\bitcoin.svg' alt='' /></td>
                </tr>
                <tr>
                    <td className='game_name_img'><img src='\assets\images\CasinoLobby\bet.svg' alt='' />Cherry Pop</td>
                    <td className='blue_color'>Greeky77</td>
                    <td>1:15 PM</td>
                    <td className='bitcoin_img'>0.0052 BTC <img src='\assets\images\CasinoLobby\bitcoin.svg' alt='' /></td>
                    <td>10.00x </td>
                    <td className='bitcoin_img green_color'>0.0052 BTC <img src='\assets\images\CasinoLobby\bitcoin.svg' alt='' /></td>
                </tr>
                <tr>
                    <td className='game_name_img'><img src='\assets\images\CasinoLobby\bet.svg' alt='' />Cherry Pop</td>
                    <td className='blue_color'>Greeky77</td>
                    <td>1:15 PM</td>
                    <td className='bitcoin_img'>0.0052 BTC <img src='\assets\images\CasinoLobby\bitcoin.svg' alt='' /></td>
                    <td>10.00x </td>
                    <td className='bitcoin_img green_color'>0.0052 BTC <img src='\assets\images\CasinoLobby\bitcoin.svg' alt='' /></td>
                </tr>
                <tr>
                    <td className='game_name_img'><img src='\assets\images\CasinoLobby\bet.svg' alt='' />Cherry Pop</td>
                    <td className='blue_color'>Greeky77</td>
                    <td>1:15 PM</td>
                    <td className='bitcoin_img'>0.0052 BTC <img src='\assets\images\CasinoLobby\bitcoin.svg' alt='' /></td>
                    <td>10.00x </td>
                    <td className='bitcoin_img green_color'>0.0052 BTC <img src='\assets\images\CasinoLobby\bitcoin.svg' alt='' /></td>
                </tr>
                <tr>
                    <td className='game_name_img'><img src='\assets\images\CasinoLobby\bet.svg' alt='' />Cherry Pop</td>
                    <td className='blue_color'>Greeky77</td>
                    <td>1:15 PM</td>
                    <td className='bitcoin_img'>0.0052 BTC <img src='\assets\images\CasinoLobby\bitcoin.svg' alt='' /></td>
                    <td>10.00x </td>
                    <td className='bitcoin_img green_color'>0.0052 BTC <img src='\assets\images\CasinoLobby\bitcoin.svg' alt='' /></td>
                </tr>
            </table>
        </>
    )
}

export default BetList