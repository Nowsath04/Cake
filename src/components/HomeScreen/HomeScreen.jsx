import React from 'react'
import "./HomeScreen.css"
import { Link } from 'react-router-dom'

function HomeScreen({ user }) {


    const bonusDummy1 = [
        {
            name: "Bronze",
            unlocked: true,
            image: "/assets/images/bonus/icons/bronze.svg",
            shadow_img: "/assets/images/bonus/icons/shade-bronze.svg",
            image2: "/assets/images/bonus/icons/rank_bronze 3.svg",
            active: true,
        },
        {
            name: "Platinum",
            unlocked: false,
            image: "/assets/images/bonus/icons/platinum.svg",
            active: false,
            shadow_img: "/assets/images/bonus/icons/shade-platinum.svg",
            image2: "/assets/images/bonus/icons/rank_platinum 2.svg",
        }
    ];



    return (
        <div className='homescreen_maindiv'>
            <div className='homescreen_div'>
                {
                    !user ? <div className='mainHeading'>Welcome to Cake - <span>Online sports betting & Casino!</span></div>
                        : <div className='mainHeading'>Welcome to Cake - <span>Online sports betting & Casino!</span></div>
                }
                {
                    !user ? <div className='homescreen_btn_div'>
                        <Link className="btn register_home_btn">Connect Wallet</Link>
                        <div className='continueOr'>Or continue with</div>
                        <div className='social_icon_maindiv'>
                            <div className='Social_icon_div'><img src='\assets\images\CasinoLobby\social-1.svg' alt='' /></div>
                            <div className='Social_icon_div'><img src='\assets\images\CasinoLobby\social-2.svg' alt='' /></div>
                            <div className='Social_icon_div'><img src='\assets\images\CasinoLobby\social-3.svg' alt='' /></div>
                            <div className='Social_icon_div'><img src='\assets\images\CasinoLobby\social-4.svg' alt='' /></div>
                        </div>
                    </div>
                        :
                        <div className='home_rankbar'>
                            <div className="rank_status_bar" style={{ position: "relative" }}>
                                <div className='rank_status_bar_homebanner_content'>
                                    <div className='your_level'>Your Level: Lvl. 1</div>
                                    <div className='your_value'>0 / $2,000,00</div>
                                </div>
                                <div className='rank_status_bar_homebanner_content_bottom'>
                                    <div style={{ marginLeft: "13px" }}>Bronze</div>
                                    <div style={{ marginRight: "20px" }}>Silver</div>
                                </div>
                                <div className="rank_line_bar">
                                    <div className="rank_line_container">
                                        {bonusDummy1.map((data, index) => {
                                            return (
                                                <div
                                                    className={`dot ${data.active && "rank_active"}`}
                                                    key={index}
                                                >
                                                    {!data.active && (
                                                        <img src="\assets\images\bonus\icons\lock.svg" alt="" />
                                                    )}
                                                    <div style={{ width: "56px", height: "48px" }} className="hexagon">
                                                        <img style={{ width: "60px" }}
                                                            src={data.shadow_img}
                                                            alt=""
                                                            className="shadow_img"
                                                        />
                                                        <img src={data.image2} style={{ width: "38px" }} alt="" className="rank_image" />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                }
            </div>
        </div >
    )
}

export default HomeScreen