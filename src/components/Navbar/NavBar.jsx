import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowDropup } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { coinSelect, toggleNav } from "../../sclices/navSlice";
import { showChat } from "../../sclices/chatSlice";
import NavCoinSelect from "../navCoinSelect/NavCoinSelect";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Otp from "../../pages/Register/Otp";
import Web3 from "web3";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../../../constants/Url";


const NavBar = () => {
  const [loged, setLogoed] = useState(false);
  const [login, setLogin] = useState(false);
  const [otp, setOtp] = useState(false);
  const [register, setRegister] = useState(false)
  const [userDropdown, setUserDropdown] = useState(false);
  const dispatch = useDispatch();

  const [userActive, setuserActive] = useState(false);
  const [balances, setBalance] = useState("");



  const web3 = new Web3(window.ethereum)

  const { isNavVisible, slectedCoin } = useSelector(
    (state) => state.navReducer
  );

  // connect wallet Function - metamask

  const connectWallet = async () => {

    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {

      try {

        const networkId = await web3.eth.net.getId()
        console.log(networkId);

        if (networkId != "0x13882") {
          try {
            await web3.currentProvider.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x13882" }] // Amoy Testnet chain ID
            });
          } catch (error) {
            toast.error("Please Add Amoy Testnet to your metamask.")
            return console.error("Error switching to Amoy network:", error);
          }
        }
        const account = await window.ethereum.request({
          method: "eth_requestAccounts"
        })

        const address1 = account[0]
        const address = web3.toChecksumAddress(address1)

        try {
          const { data } = await axios.post(
            `${API_URL}/user/generate-nonce`,
            { userid: address },
            { withCredentials: true }
          )
          console.log(data);
          const nonce = data.user.nonce

          // create sign and send sign nonce and userid to BE

          const msg = `Welcome to Cake\n\nThis request will not trigger a blockchain\ntransaction or cost any gas fees.\n\nYour authentication status will reset after 24 hours.\n\nWallet address:${address}\nNonce:${nonce}`;
          const signature = await web3.eth.personal.sign(msg, address, nonce)
          setuserActive(true);
        } catch (error) {

        }



      } catch (error) {

      }

    }

  }



  const { isChatVisible } = useSelector((state) => state.chatReducer);
  const value = {
    name: "BNB",
    price: "00.2",
    icon: "/assets/images/nav/icon/BNB.svg",
  };

  const HandleProfileDropdown = () => {
    setUserDropdown(!userDropdown);
  }

  useEffect(() => {
    dispatch(coinSelect(value));
  }, []);
  return (
    <header className="navbar">
      <nav className="nav_container">
        <div className="nav_left">
          <img
            src="\assets\images\nav\icon\side-mob.svg"
            alt=""
            style={{ transform: `rotate(${isNavVisible ? "0deg" : "180deg"})` }}
            onClick={() => dispatch(toggleNav())}
          />
          <Link to="/">
            <img src="\assets\images\nav\Frame 96.svg" alt="icon" />
          </Link>
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
              <Link onClick={() => { setLogin(!login) }} className="btn login_btn">LOGIN</Link>
              {
                login ? <Login setLogin={setLogin} /> : ""
              }
              <Link onClick={() => { setRegister(!register) }} className="btn register_btn">REGISTER</Link>
              {
                register ? <Register setLogin={setLogin} setRegister={setRegister} /> : ""
              }
              <Link onClick={connectWallet} className="btn register_btn">Otp</Link>
              {/* {
                  otp ? <Otp setOtp={setOtp} setRegister={setRegister} /> : ""
                } */}
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
                      src="\assets\images\nav\icon\chat.svg"

                      alt=""
                      onClick={() => dispatch(showChat())}
                    />
                  )}
                  <div className="user_images_div">
                    <img src="\assets\images\nav\icon\search.svg" alt="" />
                    <img className="user_image" src="\assets\images\nav\icon\profile.svg" alt="" onClick={HandleProfileDropdown} />
                    {
                      <div className="user_dropdown_maindiv" style={{ height: userDropdown ? "458px" : "0px" }}>
                        <div className="user_dropdown_top_div">
                          <div className="user_dropdown_top_name">Nowsath A</div>
                          <div className="user_dropdown_top_img"><img src="\assets\images\nav\icon\rank_bronze 3.svg" alt="" />Bronze</div>
                          <div className="user_dropdown_top_progressBar"><span></span></div>
                        </div>
                        <div className="user_dropdown_list_div">
                          <NavLink to={"/settings/general"} className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\profile.svg" alt="" /> Profile</NavLink>
                          <button className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\wallet.svg" alt="" /> Wallet</button>
                          <button className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\deposit.svg" alt="" /> Deposit</button>
                          <button className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\withdraw.svg" alt="" /> Withdraw</button>
                          <button className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\transactions.svg" alt="" /> Transactions</button>
                          <button className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\affiliate.svg" alt="" /> Affiliate</button>
                          <button className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\rank.svg" alt="" /> Rank</button>
                          <button className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\liveSupport.svg" alt="" /> Live Support</button>
                          <NavLink className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\settings.svg" alt="" /> Settings</NavLink>
                          <button className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\signOut.svg" alt="" /> Sign Out</button>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              )}
              <div className="info_box_details">
                <img src="\assets\images\nav\cake.com.svg" alt="" />
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
    </header >
  );
};

export default NavBar;
