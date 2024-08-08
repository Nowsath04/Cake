import React from "react";
import BonusCard from "../../../components/bonusPageComponent/BonusCard/BonusCard";
import "./TotalPoint.css"
const TotalPoint = () => {
    
  return <section className="bonus_totalpoint">
    <BonusCard content={"TOTAL BONUS RECEIVED"} value={"$1.47"}/>
    <BonusCard content={"TOTAL WAGERED IN DOLLAR"} value={"$0.00"}/>
  </section>;
};

export default TotalPoint;
