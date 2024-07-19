import React, { useState } from 'react';
import "./HomeParagraph.css";
import { DiVim } from 'react-icons/di';

function HomeParagraph() {
    const [isExpanded, setIsExpanded] = useState(true);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='HomeParagraph_div' style={{ height: isExpanded ? "600px" : "auto" }}>
            <div className='HomeParagraph_btn'>
                <button className='btn' onClick={handleToggle}>{isExpanded ? 'show more' : 'show  less'}</button>
            </div>
            {
                isExpanded ?
                    <div className='HomeParagraph_boxshadow'></div>
                    : ""
            }
            <div className='HomeParagraph_content'>
                <div>Cake.com: A Wide Variety of Games</div>
                <p>Cake.com offers a wide variety of games for our players to enjoy, including our own original games, Such as Cake Originals. In addition to these games, we also offer soccer, basketball, cricket, esports, MMA like ufc, Voleybal, baseball, handball, tabletennis, efighting, rugby, and american football. We also have poker live games and a sportsbook with over 80 sports to bet on.</p>
            </div>

            <div className='HomeParagraph_content'>
                <div>Convenient Payment Options</div>
                <p>At Cake.com, we make it easy for our players to deposit and play with a wide range of cryptocurrencies, including Bitcoin, litecoin, BNB, Ethereum, USDT, USDC, and Doge coin. We also accept popular payment methods such as Mastercard, Visa, Google Pay, Apple Pay, and Samsung Pay.</p>
            </div>
            <div className='HomeParagraph_content'>
                <div>
                    Gaming_Selection
                </div>
                <p>
                    Cake.com offers a wide variety of games for our players to enjoy, including our own original games, Such as Cake Originals. In addition to these games, we also offer soccer, basketball, cricket, esports, MMA like ufc, Voleybal, baseball, handball, tabletennis, efighting, rugby, and american football. We also have poker live games and a sportsbook with over 80 sports to bet on.
                </p>
            </div>
            <div className='HomeParagraph_content'>
                <div>
                    Fully Licensed and Responsible Gaming
                </div>
                <p>
                    Cake.com is owned and operated by Elixir Tech N.V. registered address: ZuikertuintjewegZ/N (Zuikertuin Tower) Curaçao. Cake is authorized and regulated by the Government of Curacao. license number 8048/JAZ2022-091We have strict policies in place to prevent money laundering and ensure the security of our players' information. Our casino also has strong security measures in place to protect our players and their funds.
                </p>
            </div>
            <div className='HomeParagraph_content HomeParagraph_content_last'>
                <div>
                    Bonuses and VIP Program
                </div>
                <p>
                    In addition to offering a wide variety of games and convenient payment options, Cake.com also provides bonuses and a VIP program for our loyal players. We also have a referral program where you can earn rewards by inviting your friends to join our platform. Overall, Cake.com is a Cryptocurrency casino and sports betting platform that offers a fun and exciting gaming experience, with a wide range of games, convenient payment options, and a safe and secure environment.
                </p>
            </div>
        </div >
    );
}

export default HomeParagraph;
