import React, { useState } from 'react';

// import required modules
export default function RoulettePage() {

    const [visible, setVisible] = useState(10)

    const showMore = () => [
        setVisible((prevValue) => prevValue + 5)
    ]

    const ogCards = [
        { ogImg: "/assets/images/CasinoLobby/MegaRoulette.png" },
        { ogImg: "/assets/images/CasinoLobby/Roulette10Ruby.png" },
        { ogImg: "/assets/images/CasinoLobby/AutoRoulette.png" },
        { ogImg: "/assets/images/CasinoLobby/RouletteCrystal.png" },
        { ogImg: "/assets/images/CasinoLobby/SpeedRoulette.png" },
        { ogImg: "/assets/images/CasinoLobby/RouletteCrystal.png" },
        { ogImg: "/assets/images/CasinoLobby/SpeedRoulette.png" },
        { ogImg: "/assets/images/CasinoLobby/MegaRoulette.png" },
        { ogImg: "/assets/images/CasinoLobby/Roulette10Ruby.png" },
        { ogImg: "/assets/images/CasinoLobby/SpeedRoulette.png" },
        { ogImg: "/assets/images/CasinoLobby/RouletteCrystal.png" },
        { ogImg: "/assets/images/CasinoLobby/AutoRoulette.png" },
        { ogImg: "/assets/images/CasinoLobby/RouletteCrystal.png" },
        { ogImg: "/assets/images/CasinoLobby/SpeedRoulette.png" },
        { ogImg: "/assets/images/CasinoLobby/SpeedRoulette.png" },
        { ogImg: "/assets/images/CasinoLobby/MegaRoulette.png" },
        { ogImg: "/assets/images/CasinoLobby/Roulette10Ruby.png" },
        { ogImg: "/assets/images/CasinoLobby/RouletteCrystal.png" },
        { ogImg: "/assets/images/CasinoLobby/SpeedRoulette.png" },
        { ogImg: "/assets/images/CasinoLobby/MegaRoulette.png" },
        { ogImg: "/assets/images/CasinoLobby/Roulette10Ruby.png" },
        { ogImg: "/assets/images/CasinoLobby/MegaRoulette.png" },
        { ogImg: "/assets/images/CasinoLobby/Roulette10Ruby.png" },
        { ogImg: "/assets/images/CasinoLobby/RouletteCrystal.png" }
    ];

    return (
        <>
            <div className='ogcard_maindiv'>
                <div className='og_heading_div'>
                    <div className='sub-heading'><img className='sub-heading_img' src='\assets\images\CasinoLobby\c24x24.svg' />
                        Roulette</div>
                </div>
                <div className='orginal_CakeCard_div'>
                    {ogCards.slice(0, visible).map((data, index) => (
                        <div className="og_card">
                            <img className='img' src={data.ogImg} alt='' />
                            <div className="textBox">
                                <div className='textbox_heading'>Slot</div>
                                <img src='/assets/images/CasinoLobby/play.png' alt='' />
                                <div className='textbox_name'>Pragmaticexternal</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='Loading_div'>
                <div>Displaying {Math.min(visible, ogCards.length)} of {ogCards.length} games</div>
                <button className='btn' onClick={showMore}>Load more</button>
            </div>
        </>
    );
}
