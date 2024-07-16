import React from "react";
import "./NavToolTip.css";
const NavToolTip = ({ data, heading }) => {
  return (
    <div className="navtool_tip">
      <p>{heading}</p>
      <div className="navtool_tip_link">
        {data.map((value, index) => {
          return (
            <a href="#" key={index}>
              <img src={value.img} alt="" />
              <p>{value.lable}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default NavToolTip;
