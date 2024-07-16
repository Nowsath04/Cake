import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "./LiveWinCard.css"

// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';

function LiveWinCard() {

    const [swiper, setSwiper] = useState(null);


    const cardImages = [
        {
            mainImage: '/assets/images/LiveWinCards/main_img.png',
            subImage: '/assets/images/LiveWinCards/rank_bronze 3.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },
        {
            mainImage: '/assets/images/LiveWinCards/Rectangle 444 (1).png',
            subImage: '/assets/images/LiveWinCards/rank_diamond 2.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },
        {
            mainImage: '/assets/images/LiveWinCards/Rectangle 444 (2).png',
            subImage: '/assets/images/LiveWinCards/rank_royalty 2.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },
        {
            mainImage: '/assets/images/LiveWinCards/Rectangle 444 (3).png',
            subImage: '/assets/images/LiveWinCards/rank_silver 2.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },
        {
            mainImage: '/assets/images/LiveWinCards/Rectangle 444 (4).png',
            subImage: '/assets/images/LiveWinCards/rank_bronze 3.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },
        {
            mainImage: '/assets/images/LiveWinCards/Rectangle 444 (5).png',
            subImage: '/assets/images/LiveWinCards/rank_diamond 2.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },
        {
            mainImage: '/assets/images/LiveWinCards/Rectangle 444 (6).png',
            subImage: '/assets/images/LiveWinCards/rank_royalty 2.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },
        {
            mainImage: '/assets/images/LiveWinCards/Rectangle 444 (7).png',
            subImage: '/assets/images/LiveWinCards/rank_silver 2.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },
        {
            mainImage: '/assets/images/LiveWinCards/Rectangle 444 (8).png',
            subImage: '/assets/images/LiveWinCards/rank_bronze 3.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },
        {
            mainImage: '/assets/images/LiveWinCards/Rectangle 444 (1).png',
            subImage: '/assets/images/LiveWinCards/rank_diamond 2.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },
        {
            mainImage: '/assets/images/LiveWinCards/Rectangle 444 (2).png',
            subImage: '/assets/images/LiveWinCards/rank_royalty 2.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },
        {
            mainImage: '/assets/images/LiveWinCards/Rectangle 444 (3).png',
            subImage: '/assets/images/LiveWinCards/rank_silver 2.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },
        {
            mainImage: '/assets/images/LiveWinCards/Rectangle 444 (4).png',
            subImage: '/assets/images/LiveWinCards/rank_bronze 3.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },
        {
            mainImage: '/assets/images/LiveWinCards/Rectangle 444 (5).png',
            subImage: '/assets/images/LiveWinCards/rank_diamond 2.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },
        {
            mainImage: '/assets/images/LiveWinCards/Rectangle 444 (6).png',
            subImage: '/assets/images/LiveWinCards/rank_royalty 2.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },
        {
            mainImage: '/assets/images/LiveWinCards/Rectangle 444 (7).png',
            subImage: '/assets/images/LiveWinCards/rank_silver 2.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },
        {
            mainImage: '/assets/images/LiveWinCards/Rectangle 444 (8).png',
            subImage: '/assets/images/LiveWinCards/rank_bronze 3.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },
        {
            mainImage: '/assets/images/LiveWinCards/Rectangle 444 (1).png',
            subImage: '/assets/images/LiveWinCards/rank_diamond 2.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },
        {
            mainImage: '/assets/images/LiveWinCards/Rectangle 444 (2).png',
            subImage: '/assets/images/LiveWinCards/rank_royalty 2.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },
        {
            mainImage: '/assets/images/LiveWinCards/Rectangle 444 (3).png',
            subImage: '/assets/images/LiveWinCards/rank_silver 2.png',
            level: "Bugteeth...",
            price: "0.0025 BTC"
        },


    ];

    return (
        <div className="slider-container">
            <div className='LiveWinCards_content'>
                <img src='/assets/images/LiveWinCards/red_dot.png' alt='red dot' />
                <div>LIVE WINS</div>
            </div>
            <Swiper
                slidesPerView="auto"
                spaceBetween={10}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                onSwiper={setSwiper}
            >
                {
                    cardImages.map((data, index) => {
                        return (
                            <SwiperSlide key={index} className="swiper-slide-custom-livewins">
                                <div className="LiveWinCard">
                                    <img className='LiveWinCard_img' src={data.mainImage} alt='LiveWinCard' />
                                    <div className='LiveWinCard_level'>
                                        <img src={data.subImage} alt='level' />
                                        <div>{data.level}</div>
                                    </div>
                                    <div className='LiveWinCard_price'>{data.price}</div>
                                </div>
                            </SwiperSlide>

                        )
                    })
                }

            </Swiper>
        </div>
    )
}

export default LiveWinCard