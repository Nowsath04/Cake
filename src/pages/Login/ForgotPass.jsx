import React, { useEffect, useRef, useState } from 'react'
import "./Login.css"
import { IoIosClose } from "react-icons/io";
import Register from '../Register/Register';


function ForgotPass({ setForgot, setRegister, register }) {

    const menuRef = useRef()


    useEffect(() => {
        let handleLogin = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setForgot(false);
                console.log(menuRef.current);
            }
        };
        document.addEventListener("mousedown", handleLogin)
    });

    const handleClose = () => {
        setForgot(false)
    }
    const handleRegister = () => {
        setRegister(true);
    }

    return (
        <div className='Login_maindiv'>
            {
                register ? <Register setRegister={setRegister} setLogin={setLogin} /> :
                    <div ref={menuRef} className='forgot_div'>
                        <div className='Login_in_div'>
                            <div className='login_logo_div'>
                                <img src="\assets\images\nav\Frame 96.svg" alt='' />
                                <div onClick={handleClose}><IoIosClose className='close_icon' /></div>
                            </div>
                            <div className='Login_heading'>RESTORING ACCESS</div>
                            <div className='Login_input_div'>
                                <div>Enter Your Email</div>
                                <input />
                            </div>
                            <div className='login_googleAuth'>
                                <div className='login_button'>
                                    <button onClick={handleClose} className='btn cancel_btn'>CANCEL</button>
                                    <button className='btn login_btn'>CONTINUE</button>
                                </div>
                                <div className='login_register_div'>
                                    <div>Do not have an account? <a onClick={handleRegister}>Register</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default ForgotPass
