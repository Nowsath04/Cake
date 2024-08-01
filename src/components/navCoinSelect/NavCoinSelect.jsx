import React, { useState } from "react";
import "./NavCoinSelect.css";
import NavBarCoin from "../navcoins/NavBarCoin";
import { Dummy_coin } from "../../../public/assets/images/nav";
import { useSelector } from "react-redux";
const NavCoinSelect = ({ balances }) => {
  const [slectedOpen, setSlectedOpen] = useState(false)
  const { slectedCoin } = useSelector((state) => state.navReducer);

  console.log(balances);

  return (
    <div className="navcoinselect">
      <div className="nav_select">
        <div className="nav_select_left">
          <p>{balances}</p>
          <p style={{ fontWeight: "900px", fontSize: "18px" }}>MATIC</p>
          {/* <img src="\assets\images\nav\icon\down_arrow.svg" alt="" onClick={() => setSlectedOpen(!slectedOpen)} /> */}
        </div>
        {/* <button className="btn">WALLET</button> */}
      </div>
      {
        slectedOpen && <div className="allnav_coin">
          <div className="top_section">
            {Dummy_coin.map((value, index) => {
              return <NavBarCoin value={value} key={index} slectedCoin={slectedCoin?.name} setSlectedOpen={setSlectedOpen} />;
            })}
          </div>
          <div className="bottom_section">
            <img src="\assets\images\nav\icon\walletIcon.svg" alt="" />
            <p>
              Wallet Settings
            </p>
          </div>
        </div>
      }
    </div>
  );
};

export default NavCoinSelect;
