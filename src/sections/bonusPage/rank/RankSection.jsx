import React, { useState } from "react";
import "./RankSection.css";
import {
  bonusDummy,
} from "../../../../public/assets/images/bonus/dummydata";
const RankSection = () => {
  const [unLoked, setUnLoked] = useState(true);
  return (
    <section className="rank_section">
      <div className="rank_heading">
        <h2>RANK</h2>
        <button>PERKS OVERVIEW</button>
      </div>
      <div className="rank_details">
        <div className="rank_level">
          <p>Your Rank:</p>
          <img src="\assets\images\chat\image\rank_royalty 2.svg" alt="" />
          <p> Rake Royalty</p>
        </div>
        <div className="rank_level">
          <p>Your Level:</p>
          <p>Lvl. 30</p>
        </div>
        <div className="rank_level">
          <p>XP :</p>
          <p>60,000,000 XP</p>
        </div>
      </div>
      <div className="rank_status_bar">
        <div className="rank_line_bar">
          <div className="rank_line_container">
            {bonusDummy.map((data, index) => {
              return (
                <div
                  className={`dot ${data.active && "rank_active"}`}
                  key={index}
                >
                  {!data.active && (
                    <img src="\assets\images\bonus\icons\lock.svg" alt="" />
                  )}
                  <div className="hexagon">
                    <img
                      src={data.shadow_img}
                      alt=""
                      className="shadow_img"
                    />
                    <img src={data.image2} alt="" className="rank_image"/>
                    <p>{data.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default RankSection;
