import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import './ProvidersCard.css';

// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';

export default function ProvidersCard() {
    const [swiper, setSwiper] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const ogCards = [
        { ogImg: "/assets/images/CasinoLobby/provider1.svg" },
        { ogImg: "/assets/images/CasinoLobby/provider2.svg" },
        { ogImg: "/assets/images/CasinoLobby/provider1.svg" },
        { ogImg: "/assets/images/CasinoLobby/provider2.svg" },
        { ogImg: "/assets/images/CasinoLobby/provider1.svg" },
        { ogImg: "/assets/images/CasinoLobby/provider2.svg" },
        { ogImg: "/assets/images/CasinoLobby/provider1.svg" },
        { ogImg: "/assets/images/CasinoLobby/provider2.svg" },
        { ogImg: "/assets/images/CasinoLobby/provider1.svg" },
        { ogImg: "/assets/images/CasinoLobby/provider2.svg" },
        { ogImg: "/assets/images/CasinoLobby/provider1.svg" },
        { ogImg: "/assets/images/CasinoLobby/provider2.svg" },
    ];

    useEffect(() => {
        if (swiper) {
            swiper.on('reachBeginning', () => setIsBeginning(true));
            swiper.on('fromEdge', () => {
                setIsBeginning(false);
                setIsEnd(false);
            });
            swiper.on('reachEnd', () => setIsEnd(true));
        }
    }, [swiper]);

    return (
        <>
            <div className='ogcard_maindiv'>
                <div className='og_heading_div'>
                    <div className='sub-heading'><img className='sub-heading_img' src='\assets\images\CasinoLobby\providers.svg' />Providers</div>
                    <div className='og_arrow_div'>
                        <button
                            className={`swiper-button-prev3 ${isBeginning ? 'disabled' : ''}`}
                            onClick={() => swiper?.slidePrev()}
                            disabled={isBeginning}
                        >
                            <img src='public/assets/images/CasinoLobby/arrow.png' alt='prev' />
                        </button>
                        <button
                            className={`swiper-button-next3 ${isEnd ? 'disabled' : ''}`}
                            onClick={() => swiper?.slideNext()}
                            disabled={isEnd}
                        >
                            <img src='public/assets/images/CasinoLobby/arrow.png' alt='next' />
                        </button>
                    </div>
                </div>
                <div className='orginal_swiperCard_div'>
                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={10}
                        freeMode={true}
                        navigation={{ prevEl: '.swiper-button-prev3', nextEl: '.swiper-button-next3' }}
                        pagination={{ clickable: true }}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="mySwiper"
                        onSwiper={setSwiper}
                    >
                        {ogCards.map((data, index) => (
                            <SwiperSlide
                                key={index}
                                className="swiper-slide-custom-provider"
                            >
                                <div className="provider_card">
                                    <img className='provider_card_img' src={data.ogImg} alt='' />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}
