import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import './LiveCasino.css';

// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';

export default function LiveCasino() {
    const [swiper, setSwiper] = useState(null);

    const ogCards = [
        { ogImg: "/assets/images/CasinoLobby/dice.png" },
        { ogImg: "/assets/images/CasinoLobby/Rectangle2.png" },
        { ogImg: "/assets/images/CasinoLobby/Rectangle3.png" },
        { ogImg: "/assets/images/CasinoLobby/dice.png" },
        { ogImg: "/assets/images/CasinoLobby/Rectangle2.png" },
        { ogImg: "/assets/images/CasinoLobby/Rectangle3.png" },
        { ogImg: "/assets/images/CasinoLobby/dice.png" },
        { ogImg: "/assets/images/CasinoLobby/Rectangle2.png" },
        { ogImg: "/assets/images/CasinoLobby/Rectangle3.png" },
        { ogImg: "/assets/images/CasinoLobby/dice.png" },
        { ogImg: "/assets/images/CasinoLobby/Rectangle2.png" },
        { ogImg: "/assets/images/CasinoLobby/Rectangle3.png" }
    ];

    return (
        <>
            <div className='ogcard_maindiv'>
                <div className='og_heading_div'>
                    <div className='sub-heading'><img className='sub-heading_img' src='\assets\images\CasinoLobby\live24.svg' />
                        Live Casino </div>
                    <div className='og_arrow_div'>
                        <button className="swiper-button-prev4" onClick={() => swiper?.slidePrev()}>
                            <img src='public/assets/images/CasinoLobby/arrow.png' alt='prev' />
                        </button>
                        <button className="swiper-button-next4" onClick={() => swiper?.slideNext()}>
                            <img src='public/assets/images/CasinoLobby/arrow.png' alt='next' />
                        </button>
                    </div>
                </div>
                <div className='orginal_swiperCard_div'>
                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={10}
                        freeMode={true}
                        navigation={{ prevEl: '.swiper-button-prev4', nextEl: '.swiper-button-next4' }}
                        pagination={{ clickable: true }}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="mySwiper"
                        onSwiper={setSwiper}
                    >
                        {ogCards.map((data, index) => (
                            <SwiperSlide
                                key={index}
                                className="swiper-slide-custom-livecasino"
                            >
                                <div className="og_card">
                                    <img className='img' src={data.ogImg} alt='' />
                                    <div className="textBox">
                                        <img src='/assets/images/CasinoLobby/play.png' alt='' />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}
