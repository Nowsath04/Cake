import React from "react";
import "./Bonus.css";
import TotalPoint from "../../sections/bonusPage/totalpoint/TotalPoint";
import RankSection from "../../sections/bonusPage/rank/RankSection";
import BonusSection from "../../sections/bonusPage/bonusSection/BonusSection";
import Footer from "../../components/Footer/Footer";
const Bonus = () => {
  return (
    <div className="bonus_main">
      <h1>Bonus</h1>
      <TotalPoint />
      <RankSection/>
      <BonusSection/>
      <Footer/>
    </div>
  );
};

export default Bonus;
