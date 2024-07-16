import React from "react";
import NavBar from "../Navbar/NavBar";
import SideBar from "../Sidebar/SideBar";
import Chat from "../Chat/Chat";
import "./LayOut.css";
const LayOut = ({ children }) => {
  return (
    <div className="layer_1">
      <NavBar />
      <div className="layer_2">
        <SideBar className="sidebar"/>
        <div className="content">{children}</div>
        <Chat />
      </div>
    </div>
  );
};

export default LayOut;
