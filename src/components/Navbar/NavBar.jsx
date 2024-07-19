import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { IoMdArrowDropup } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { coinSelect, toggleNav } from "../../sclices/navSlice";
import { showChat } from "../../sclices/chatSlice";
import NavCoinSelect from "../navCoinSelect/NavCoinSelect";
const NavBar = () => {
  const [loged, setLogoed] = useState(false);
  const dispatch = useDispatch();
  const { isNavVisible, slectedCoin } = useSelector(
    (state) => state.navReducer
  );
  const { isChatVisible } = useSelector((state) => state.chatReducer);
  const value = {
    name: "BNB",
    price: "00.2",
    icon: "/assets/images/nav/icon/BNB.svg",
  };
  useEffect(() => {
    dispatch(coinSelect(value));
  }, []);
  return (
    <header className="navbar">
      <nav className="nav_container">
        <div className="nav_left">
          <img
            src="\assets\images\nav\icon\Group 13717.png"
            alt=""
            style={{ transform: `rotate(${isNavVisible ? "0deg" : "180deg"})` }}
            onClick={() => dispatch(toggleNav())}
          />
          <a href="#">
            <img src="\assets\images\nav\Frame 96.svg" alt="icon" />
          </a>
        </div>
        <div className="nav_center">
          <NavCoinSelect />
        </div>
        <div className="nav_right">
          {!loged && (
            <div className="nav_right_login">
              {isChatVisible ? (
                ""
              ) : (
                <img
                  src="\assets\images\nav\icon\Frame.png"
                  alt=""
                  onClick={() => dispatch(showChat())}
                />
              )}
              <button className="btn login_btn">LOGIN</button>
              <button className="btn register_btn">REGISTER</button>
            </div>
          )}
          <div className="nav_right_info">
            <div className="info_box">
              {loged && (
                <div className="nav_info_icon">
                  {isChatVisible ? (
                    ""
                  ) : (
                    <img
                      src="\assets\images\nav\icon\Frame.png"
                      alt=""
                      onClick={() => dispatch(showChat())}
                    />
                  )}
                  <img src="\assets\images\nav\icon\search.png" alt="" />
                  <img src="\assets\images\nav\icon\user.png" alt="" />
                </div>
              )}
              <div className="info_box_details">
                <img src="\assets\images\nav\Layer_1.png" alt="" />
                <div className="details">
                  <div className="coin_price">
                    <p>Cake coin</p>
                    <p>$0.183712</p>
                  </div>
                  <div className="coin_increase">
                    <p>Cake</p>
                    <p className="prec">
                      25.35% <IoMdArrowDropup />
                    </p>
                  </div>
                </div>
                <button className="btn">BUY</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
