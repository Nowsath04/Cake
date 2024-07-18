import React, { useState } from "react";
import "./Chat.css";
import ChatMessage from "../chatMessage/ChatMessage";
import { dummy } from "../../../public/assets/images/chat/dummy";
import { useDispatch, useSelector } from "react-redux";
import { hideChat } from "../../sclices/chatSlice";
const Chat = () => {
  const [minimize, setMinimize] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="chat" style={{ width: minimize ? "232px" : "368px" }}>
      <div className="chat_nav" style={{ width: minimize ? "232px" : "368px" }}>
        <img src="\assets\images\chat\image\info.svg" alt="" />
        <img
          src="\assets\images\chat\image\minimize.svg"
          alt=""
          onClick={() => setMinimize(!minimize)}
          style={{ transform: `rotate(${minimize ? "0deg" : "180deg"})` }}
        />
        <img
          src="\assets\images\chat\image\close.svg"
          alt=""
          onClick={() => dispatch(hideChat())}
        />
      </div>
      <div className="chat_message">
        {dummy.map((value, index) => {
          return <ChatMessage value={value} key={index} />;
        })}
      </div>
      <div className="message_input_section">
        <input type="text" name="" id="" placeholder="your message"></input>
        <div className="message_send">
          <div className="gif_image">
            <img src="\assets\images\chat\image\GifIcon.svg" alt="" />
            <img src="\assets\images\chat\image\SmileFace.svg" alt="" />
          </div>
          <div className="detail">
            {!minimize ? (
              <p>
                <span></span> Online: 1
              </p>
            ) : (
              ""
            )}

            <p>160</p>
            <button className="btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
