import React from "react";
import "./Bonus.css";
import TotalPoint from "../../sections/bonusPage/totalpoint/TotalPoint";
import RankSection from "../../sections/bonusPage/rank/RankSection";
const Bonus = () => {
  return (
    <div className="bonus_main">
      <h1>Bonus</h1>
      <TotalPoint />
      <RankSection/>
    </div>
  );
};

export default Bonus;
