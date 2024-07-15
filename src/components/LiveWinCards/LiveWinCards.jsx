import React from 'react'
import Slider from "react-slick";
import "./LiveWinCards.css"


function LiveWinCards() {

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 10,
        speed: 500,
        slidesToScroll: 5,
    };
    return (
        <div className='multi_Cards_div'>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                    <div>
                        <h3>9</h3>
                    </div>
                    <div>
                        <h3>10</h3>
                    </div>
                    <div>
                        <h3>11</h3>
                    </div>
                    <div>
                        <h3>12</h3>
                    </div>
                    <div>
                        <h3>13</h3>
                    </div>
                    <div>
                        <h3>14</h3>
                    </div>
                    <div>
                        <h3>15</h3>
                    </div>
                    <div>
                        <h3>16</h3>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default LiveWinCards;

