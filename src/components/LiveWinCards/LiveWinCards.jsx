import React from 'react';
import Slider from "react-slick";
import "./LiveWinCards.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LiveWinCards() {

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


    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 9,
        speed: 500,
        swipeToSlide: true,
        arrows: false,
    };
    return (
        <div className="slider-container">
            <div className='LiveWinCards_content'>
                <img src='/assets/images/LiveWinCards/red_dot.png' alt='red dot' />
                <div>LIVE WINS</div>
            </div>
            <Slider {...settings}>
                {
                    cardImages.map((data, index) => {
                        return (
                            <div className="LiveWinCard">
                                <img className='LiveWinCard_img' src={data.mainImage} alt='LiveWinCard' />
                                <div className='LiveWinCard_level'>
                                    <img src={data.subImage} alt='level' />
                                    <div>{data.level}</div>
                                </div>
                                <div className='LiveWinCard_price'>{data.price}</div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}

export default LiveWinCards;
