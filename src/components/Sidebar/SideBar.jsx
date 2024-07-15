import React from "react";
import "./SideBar.css";
import { topNavDetails } from "../../../public/assets/images/sidebar/details";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="side_top">
        <div className="categart_section">
          <div className="categort">Casino</div>
          <div className="categort">Sports</div>
        </div>
        {topNavDetails.map((value,index) => {
          return (
            <div className="bonus" key={index}>
              <div className="bonus_left">
                <img src={value.img} alt="" />
                <p>{value.lable}</p>
              </div>
              <p className="bonus_right">{value.count}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
