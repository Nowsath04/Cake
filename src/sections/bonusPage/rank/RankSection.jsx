import React from "react";
import "./RankSection.css";
const RankSection = () => {
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
      <ul className="rank_line_bar">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      </div>
    </section>
  );
};

export default RankSection;
