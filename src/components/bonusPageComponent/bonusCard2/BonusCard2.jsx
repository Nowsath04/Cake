import React from "react";
import "./BonusCard2.css";
const BonusCard2 = ({ value }) => {
  return (
    <div className="bonuscard2">
      <img src={value?.image} alt="" />
      <h3>{value?.name}</h3>
      {value?.content_Available && (
        <p>
          {value?.content_Available} :
          <span>{value?.content_Availablecount}</span>
        </p>
      )}
      <p>
        Available Spin: <span>1 CAKE</span>
      </p>
      <div className="bonus_btn">
      {
        value?.type ==="spine"?  <button>SPIN NOW</button>:""
      }
        <button>CLAIM</button>
      </div>
    </div>
  );
};

export default BonusCard2;
