import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HomeBanner.css';


// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function HomeBanner() {

    const [swiper, setSwiper] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <>
            <div className='homebanner_div'>
                <Swiper
                    navigation={{ prevEl: '.swiper-button-prev-banner', nextEl: '.swiper-button-next-banner' }}
                    spaceBetween={30}
                    effect={'fade'}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper" >
                    <SwiperSlide>
                        <div className='Homebanner_card'>
                            <div className='swiper-button-prev-banner_div'>
                                <button className='swiper-button-prev-banner'><img src='\assets\images\CasinoLobby\arrow-banner.svg' alt='' /></button>
                                <button className='swiper-button-next-banner'><img src='\assets\images\CasinoLobby\arrow-banner.svg' alt='' /></button>
                            </div>
                            <div className='Homebanner_card_img_wrapper'>
                                <img className='Homebanner_card_img' src='\assets\images\CasinoLobby\banner-1.png' alt='' />
                            </div>
                            <div className='Homebanner_card_content'>
                                <div className='Homebanner_card_heading'>Sports book & Casino slots. Just Play & Earn!</div>
                                <div className='Homebanner_card_url'>(<a>Sign in an account</a> first)</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='Homebanner_card'>
                            <div className='swiper-button-prev-banner_div'>
                                <button className='swiper-button-prev-banner'><img src='\assets\images\CasinoLobby\arrow-banner.svg' alt='' /></button>
                                <button className='swiper-button-next-banner'><img src='\assets\images\CasinoLobby\arrow-banner.svg' alt='' /></button>
                            </div>
                            <div className='Homebanner_card_img_wrapper'>
                                <img className='Homebanner_card_img' src='\assets\images\CasinoLobby\banner-1.png' alt='' />
                            </div>
                            <div className='Homebanner_card_content'>
                                <div className='Homebanner_card_heading'>Casino book & Casino slots. Just Play & Earn!</div>
                                <div className='Homebanner_card_url'>(<a>Sign in an account</a> first)</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='Homebanner_card'>
                            <div className='swiper-button-prev-banner_div'>
                                <button className='swiper-button-prev-banner'><img src='\assets\images\CasinoLobby\arrow-banner.svg' alt='' /></button>
                                <button className='swiper-button-next-banner'><img src='\assets\images\CasinoLobby\arrow-banner.svg' alt='' /></button>
                            </div>
                            <div className='Homebanner_card_img_wrapper'>
                                <img className='Homebanner_card_img' src='\assets\images\CasinoLobby\banner-1.png' alt='' />
                            </div>
                            <div className='Homebanner_card_content'>
                                <div className='Homebanner_card_heading'>Sports book & Casino slots. Just Play & Earn!</div>
                                <div className='Homebanner_card_url'>(<a>Sign in an account</a> first)</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='Homebanner_card'>
                            <div className='swiper-button-prev-banner_div'>
                                <button className='swiper-button-prev-banner'><img src='\assets\images\CasinoLobby\arrow-banner.svg' alt='' /></button>
                                <button className='swiper-button-next-banner'><img src='\assets\images\CasinoLobby\arrow-banner.svg' alt='' /></button>
                            </div>
                            <div className='Homebanner_card_img_wrapper'>
                                <img className='Homebanner_card_img' src='\assets\images\CasinoLobby\banner-1.png' alt='' />
                            </div>
                            <div className='Homebanner_card_content'>
                                <div className='Homebanner_card_heading'>Casino book & Casino slots. Just Play & Earn!</div>
                                <div className='Homebanner_card_url'>(<a>Sign in an account</a> first)</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='Homebanner_card'>
                            <div className='swiper-button-prev-banner_div'>
                                <button className='swiper-button-prev-banner'><img src='\assets\images\CasinoLobby\arrow-banner.svg' alt='' /></button>
                                <button className='swiper-button-next-banner'><img src='\assets\images\CasinoLobby\arrow-banner.svg' alt='' /></button>
                            </div>
                            <div className='Homebanner_card_img_wrapper'>
                                <img className='Homebanner_card_img' src='\assets\images\CasinoLobby\banner-1.png' alt='' />
                            </div>
                            <div className='Homebanner_card_content'>
                                <div className='Homebanner_card_heading'>Sports book & Casino slots. Just Play & Earn!</div>
                                <div className='Homebanner_card_url'>(<a>Sign in an account</a> first)</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='Homebanner_card'>
                            <div className='swiper-button-prev-banner_div'>
                                <button className='swiper-button-prev-banner'><img src='\assets\images\CasinoLobby\arrow-banner.svg' alt='' /></button>
                                <button className='swiper-button-next-banner'><img src='\assets\images\CasinoLobby\arrow-banner.svg' alt='' /></button>
                            </div>
                            <div className='Homebanner_card_img_wrapper'>
                                <img className='Homebanner_card_img' src='\assets\images\CasinoLobby\banner-1.png' alt='' />
                            </div>
                            <div className='Homebanner_card_content'>
                                <div className='Homebanner_card_heading'>Casino book & Casino slots. Just Play & Earn!</div>
                                <div className='Homebanner_card_url'>(<a>Sign in an account</a> first)</div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
