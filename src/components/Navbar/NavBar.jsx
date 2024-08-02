import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdArrowDropup } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { coinSelect, toggleNav } from "../../sclices/navSlice";
import { showChat } from "../../sclices/chatSlice";
import NavCoinSelect from "../navCoinSelect/NavCoinSelect";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Web3 from "web3";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../../../constants/Url";
import { loginError, loginRequest, loginSuccess } from "../../sclices/userSlice";
import { LogOutUser, loginUser } from "../../Actions/UserAction";



const NavBar = () => {
  const [loged, setLogoed] = useState(false);
  const [login, setLogin] = useState(false);
  const [otp, setOtp] = useState(false);
  const [register, setRegister] = useState(false)
  const [userDropdown, setUserDropdown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuRef = useRef()


  const [userActive, setuserActive] = useState(false);
  const [balances, setBalance] = useState("");



  const web3 = new Web3(window.ethereum)


  const { isNavVisible, slectedCoin } = useSelector(
    (state) => state.navReducer
  );


  const { user, isAuthentication } = useSelector((selector) => selector.auth);


  // connect wallet Function - metamask

  const connectWallets = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const networkId = await web3.eth.net.getId();
        if (networkId != "0x13882") {
          try {
            await web3.currentProvider.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x13882" }], // Amoy Testnet chain ID
            });
          } catch (error) {
            toast.error("Please Add Amoy Testnet to your metamask.")
            return console.error("Error switching to Amoy network:", error);
          }
        }
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const address1 = account[0];
        const address = web3.utils.toChecksumAddress(address1);
        // console.log(checksumAddress);
        // setcurrectAcc(checksumAddress);
        try {
          const { data } = await axios.post(
            `${API_URL}/user/generate-nonce`,
            { userid: address },
            { withCredentials: true }
          );
          const nonce = data.user.nonce;
          // create sign  and  send  sign nonce and userid to BE
          const msg = `Welcome to Cake\n\nThis request will not trigger a blockchain\ntransaction or cost any gas fees.\n\nYour authentication status will reset after 24 hours.\n\nWallet address:${address}\nNonce:${nonce}`;
          const signature = await web3.eth.personal.sign(msg, address, nonce);
          dispatch(loginUser(address, nonce, signature));
          getUserBalance(address);
          setuserActive(true);
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("plsease");
      window.location.href = "https://metamask.io/";
    }
  };

  useEffect(() => async () => {
    if (!user.email) {
      setRegister(true);
    } else {
      setRegister(false);
    }
  });


  useEffect(() => async () => {
    if (isAuthentication) {
      getUserBalance(user?.userid)
      setuserActive(true);
    } else {
      setuserActive(false);
    }
  });


  // const loginUser = (address, nonce, signature) => async (dispatch) => {
  //   try {
  //     dispatch(loginRequest());
  //     const { data } = await axios.post(
  //       `${API_URL}/user/verify-login`,
  //       { userid: address, nonce: nonce, signature: signature },
  //       { withCredentials: true }
  //     );
  //     dispatch(loginSuccess(data.user));
  //     navigate("/")
  //   } catch (error) {
  //     dispatch(loginError(error));
  //   }
  // };


  const getUserBalance = async (userAddress) => {
    try {
      // Get the balance in Wei
      const balanceWei = await web3.eth.getBalance(userAddress);

      // Convert the balance from Wei to Matic token units (Wei to Matic)
      const balanceMatic = web3.utils.fromWei(balanceWei, 'ether'); // 'ether' here represents Matic token units

      // If you want to round the balance to a certain number of decimal places, you can use parseFloat and toFixed
      const roundedBalanceMatic = parseFloat(balanceMatic).toFixed(3); // Adjust the number of decimal places as needed

      console.log("Balance in Matic:", roundedBalanceMatic);
      setBalance(roundedBalanceMatic);
    } catch (error) {
      console.log(error);
    }
  };


  const LogOut = () => {
    setuserActive(false);
    dispatch(LogOutUser)
    setUserDropdown(false);
    navigate("/")
  }

  const { isChatVisible } = useSelector((state) => state.chatReducer);
  const value = {
    name: "BNB",
    price: "00.2",
    icon: "/assets/images/nav/icon/BNB.svg",
  };


  useEffect(() => {
    let handleLogin = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setUserDropdown(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handleLogin);

    return () => {
      document.removeEventListener("mousedown", handleLogin);
    };
  }, []);

  const HandleProfileDropdown = () => {
    setUserDropdown(!userDropdown);
  }

  const handleNavLinkClick = () => {
    setUserDropdown(false);
  };

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
        <div className="nav_right">
          {!loged && (
            <>
              {
                balances ? <div className="nav_center">
                  <NavCoinSelect balances={balances} />
                </div> : ""
              }
              <div className="nav_right_login">
                {isChatVisible ? (
                  ""
                ) : (
                  // <img
                  //   src="\assets\images\nav\icon\Frame.png"
                  //   alt=""
                  //   onClick={() => dispatch(showChat())}
                  // /> 
                  ""
                )}
                {
                  register ? <Register setLogin={setLogin} setRegister={setRegister} /> : ""
                }
                {
                  userActive ? "" :
                    <Link onClick={connectWallets} className="btn register_btn">Connect Wallet</Link>
                }
              </div>
            </>
          )}
          <div className="nav_right_info">
            <div className="info_box">
              {userActive && (
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
                    <img style={{ pointerEvents: userDropdown ? "none" : "" }} className="user_image" src="\assets\images\nav\icon\profile.svg" alt="" onClick={HandleProfileDropdown} />
                    {
                      userDropdown &&
                      <div className="user_dropdown_maindiv" ref={menuRef} >
                        <div className="user_dropdown_top_div" >
                          <div className="user_dropdown_top_name">{(user.userid).substring(0, 15)}...</div>
                          <div className="user_dropdown_top_img"><img src="\assets\images\nav\icon\rank_bronze 3.svg" alt="" />Bronze</div>
                          <div className="user_dropdown_top_progressBar"><span></span></div>
                        </div>
                        <div className="user_dropdown_list_div">
                          <NavLink onClick={handleNavLinkClick} to={"/settings/general"} className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\profile.svg" alt="" /> Profile</NavLink>
                          <button onClick={handleNavLinkClick} className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\wallet.svg" alt="" /> Wallet</button>
                          <button onClick={handleNavLinkClick} className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\deposit.svg" alt="" /> Deposit</button>
                          <button onClick={handleNavLinkClick} className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\withdraw.svg" alt="" /> Withdraw</button>
                          <button onClick={handleNavLinkClick} className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\transactions.svg" alt="" /> Transactions</button>
                          <NavLink to={"/referral/overview"} onClick={handleNavLinkClick} className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\affiliate.svg" alt="" /> Affiliate</NavLink>
                          <Link onClick={handleNavLinkClick} to={"/bonus"} className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\rank.svg" alt="" /> Rank</Link>
                          <button onClick={handleNavLinkClick} className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\liveSupport.svg" alt="" /> Live Support</button>
                          <NavLink onClick={handleNavLinkClick} className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\settings.svg" alt="" /> Settings</NavLink>
                          <button onClick={LogOut} className="user_dropdown_list_button"><img src="\assets\images\nav\user-list\signOut.svg" alt="" /> Sign Out</button>
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
