import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import './NewReleaseCard.css';

// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';

export default function NewReleaseCard() {
    const [swiper, setSwiper] = useState(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

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
                    <div className='sub-heading'><img className='sub-heading_img' src='\assets\images\CasinoLobby\recent24.svg' /> New Releases</div>
                    <div className='og_arrow_div'>
                        <button
                            className={`swiper-button-prev5 ${isBeginning ? 'disabled' : ''}`}
                            onClick={() => swiper?.slidePrev()}
                            disabled={isBeginning}
                        >
                            <img src='public/assets/images/CasinoLobby/arrow.png' alt='prev' />
                        </button>
                        <button
                            className={`swiper-button-next5 ${isEnd ? 'disabled' : ''}`}
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
                        navigation={{ prevEl: '.swiper-button-prev5', nextEl: '.swiper-button-next5' }}
                        pagination={{ clickable: true }}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="mySwiper"
                        onSwiper={setSwiper}
                    >
                        {ogCards.map((data, index) => (
                            <SwiperSlide
                                key={index}
                                className="swiper-slide-custom"
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
