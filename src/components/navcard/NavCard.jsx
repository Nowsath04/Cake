import React from "react";
import { NavLink } from "react-router-dom";

const NavCard = ({ image, lable,to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `casino_sub ${isActive ? "nav__active" : ""}`
      }
    >
      <div className="casino_sub_left">
        <img src={image} alt="" />
        <p>{lable}</p>
      </div>
    </NavLink>
  );
};

export default NavCard;
