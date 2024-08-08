import React, { useState } from 'react'
import "./HomeTableSheet.css"

function HomeTableSheet() {

    const [casino, setCasino] = useState(true)
    const [sports, setSports] = useState(false)

    const HandleCasino = () => {
        setCasino(true)
        setSports(false)
    }

    const HandleSport = () => {
        setCasino(false)
        setSports(true)
    }


    return (
        <>
            <div className='HomeTableSheet_maindiv'>
                <div className='HomeTableSheet_div'>
                    <div className='HomeTableSheet_btn_div'>
                        <button onClick={HandleCasino} style={{ background: casino ? "#0099F4" : "#072537" }} className='btn'><img src='\assets\images\home\casino-table.svg' alt='' />Casino</button>
                        <button onClick={HandleSport} style={{ background: sports ? "#0099F4" : "#072537" }} className='btn'><img src='\assets\images\home\sports-table.svg' alt='' />Sports</button>
                    </div>
                </div>
            </div>
            {
                casino ? <table className='bet_table_div home_table_div'>
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
                </table> : ""
            }
            {
                sports ? <div className='No_transtion_Card'>no transactions</div> : ""
            }
        </>
    )
}

export default HomeTableSheet