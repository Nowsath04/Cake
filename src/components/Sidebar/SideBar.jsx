import React, { useState } from "react";
import "./SideBar.css";
import {
  casinoGameDetails,
  topNavDetails,
} from "../../../public/assets/images/sidebar/details";
import NavCard from "../navcard/NavCard";
import { useSelector } from "react-redux";
import NavToolTip from "../NavToolTip/NavToolTip";
import { Link, NavLink } from "react-router-dom";
const SideBar = () => {
  const { isNavVisible } = useSelector((state) => state.navReducer);

  const [casinoActive, setCasinoActive] = useState(false);
  const [sportActive, setSportActive] = useState(false);
  const handelcasino = () => {
    setCasinoActive(!casinoActive);
    setSportActive(false);
  };
  const [casino, setCasino] = useState(true);
  const [sport, setSport] = useState(false);
  const handlesport = () => {
    setSportActive(!sportActive);
    setCasinoActive(false);
  };
  const handelcasinoActive = () => {
    setCasino(true);
    setSport(false);
  };
  const handelsportActive = () => {
    setSport(true);
    setCasino(false);
  };
  return (
    <div
      className="sidebar"
      style={{ width: `${!isNavVisible ? "60px" : "220px"}` }}
    >
      {isNavVisible ? (
        <div className="side_top">
          <div className="categart_section">
            <div
              className={`category ${casino ? "active" : ""}`}
              onClick={handelcasinoActive}
              style={{ background: casino ? "#0099F4" : "" }}
            >
              Casino
            </div>
            <div
              className={`category ${sport ? "active" : ""}`}
              onClick={handelsportActive}
              style={{ background: sport ? "#0099F4" : "" }}
            >
              Sports
            </div>
          </div>
          {topNavDetails.map((value, index) => {
            return (
              <Link to={value.to} className="bonus" key={index}>
                <div className="bonus_left">
                  <img src={value.img} alt="" />
                  <p>{value.lable}</p>
                </div>
                <p className="bonus_right">{value.count}</p>
              </Link>
            );
          })}
          {casino && (
            <div
              className="casino_section"
              style={{ height: casinoActive ? "476px" : "40px" }}
            >
              <div className="casino_main">
                <div className="casino_left">
                  <img src="\assets\images\sidebar\icons\casino.svg" alt="" />
                  <p>Casino</p>
                </div>
                <img
                  src="\assets\images\sidebar\icons\arrow.svg"
                  style={{
                    transform: `rotate(${!casinoActive ? "0deg" : "180deg"})`,
                  }}
                  alt=""
                  onClick={handelcasino}
                />
              </div>
              <div className="casino_subheading">
                <NavCard
                  image={"/assets/images/sidebar/icons/favor.svg"}
                  lable={"Favorites"}
                  to={"/casino/favourite"}
                />
                <NavCard
                  image={"/assets/images/sidebar/icons/recent.svg"}
                  lable={"Recent"}
                  to={"/casino/recents"}
                />
              </div>
              <div className="casino_subheadings">
                {casinoGameDetails.map((value, index) => {
                  return (
                    <NavCard
                      image={value.img}
                      lable={value.lable}
                      key={index}
                      to={value.to}
                    />
                  );
                })}
              </div>
            </div>
          )}
          {sport && (
            <div
              className="casino_section"
              style={{ height: casinoActive ? "427px" : "40px" }}
            >
              <div className="casino_main">
                <div className="casino_left">
                  <img src="\assets\images\sidebar\icons\casino.png" alt="" />
                  <p>Sports</p>
                </div>
                <img
                  src="\assets\images\sidebar\icons\arrow.png"
                  style={{
                    transform: `rotate(${!casinoActive ? "0deg" : "180deg"})`,
                  }}
                  alt=""
                  onClick={handelcasino}
                />
              </div>
              <div className="casino_subheading">
                <NavCard
                  image={"/assets/images/sidebar/icons/favour.png"}
                  lable={"Favorites"}
                />
                <NavCard
                  image={"/assets/images/sidebar/icons/recent.png"}
                  lable={"Recent"}
                />
              </div>
              <div className="casino_subheadings">
                {casinoGameDetails.map((value, index) => {
                  return (
                    <NavCard
                      image={value.img}
                      lable={value.lable}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          )}
          <NavCard
            image={"/assets/images/sidebar/icons/blog.svg"}
            lable={"Blog"}
            to={"/casino/blog"}
          />
          <NavCard
            image={"/assets/images/sidebar/icons/live.svg"}
            lable={"Live"}
            to={"/casino/live"}

          />
        </div>
      ) : (
        <div className="nav_small">
          <a href="#">
            <img src="/assets/images/sidebar/icons/bonus.svg" alt="" />
          </a>
          <a href="#">
            <img src="/assets/images/sidebar/icons/spin.svg" alt="" />
          </a>
          <a href="#" className="nav_small_icon nav_small_icon_active">
            <div className="large_tooltip">
              <NavToolTip data={casinoGameDetails} heading={"Casino"} />
            </div>
            <img src="/assets/images/sidebar/icons/casino.svg" alt="" />
          </a>
          <a href="#" className="nav_small_icon first">
            <div className="tooltip_live">
              <span className="tooltiptext_live">Blog</span>
            </div>
            <img src="/assets/images/sidebar/icons/blog.svg" alt="" />
          </a>
          <a href="#" className="nav_small_icon second">
            <div className="tooltip_live">
              <span className="tooltiptext_live">Live</span>
            </div>
            <img src="/assets/images/sidebar/icons/live.svg" alt="" />
          </a>
        </div>
      )}
    </div>
  );
};

export default SideBar;
