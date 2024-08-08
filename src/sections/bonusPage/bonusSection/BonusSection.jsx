import React from "react";
import "./BonusSection.css";
import BonusCard2 from "../../../components/bonusPageComponent/bonusCard2/BonusCard2";
import { bonusCard1, bonusCard2 } from "../../../../public/assets/images/bonus/dummydata";
const BonusSection = () => {
  return (
    <section className="bonus_section">
      <h2>BONUS</h2>
      <div className="bonus_cardsection1">
        {bonusCard1?.map((value, index) => {
          return <BonusCard2  value={value} key={index}/>;
        })}
      </div>
      <div className="bonus_cardsection2">
      {bonusCard2?.map((value, index) => {
          return <BonusCard2  value={value} key={index}/>;
        })}
      </div>
    </section>
  );
};

export default BonusSection;
