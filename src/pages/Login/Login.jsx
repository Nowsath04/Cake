import React, { useEffect, useRef, useState } from 'react'
import "./Login.css"
import { IoIosClose } from "react-icons/io";
import Register from '../Register/Register';
import ForgotPass from './ForgotPass';


function Login({ setLogin }) {

    const menuRef = useRef()
    const [register, setRegister] = useState(false)
    const [forgot, setForgot] = useState(false)
    const [pass, setPass] = useState(false)


    useEffect(() => {
        let handleLogin = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setLogin(false);
                console.log(menuRef.current);
            }
        };
        document.addEventListener("mousedown", handleLogin)
    });

    const handleClose = () => {
        setLogin(false);
    }
    const handleRegister = () => {
        setRegister(true);
    }
    const handleForgotPass = () => {
        setForgot(true);
    }

    return (
        <div className='Login_maindiv'>
            {
                register ? (<Register setRegister={setRegister} register={register} setLogin={setLogin} />) : forgot ? <ForgotPass setRegister={setRegister} setForgot={setForgot} /> :
                    <div ref={menuRef} className='Login_div'>
                        <div className='Login_in_div'>
                            <div className='login_logo_div'>
                                <img src="\assets\images\nav\Frame 96.svg" alt='' />
                                <div onClick={handleClose}><IoIosClose className='close_icon' /></div>
                            </div>
                            <div className='Login_heading'>LOGIN</div>
                            <div className='Login_input_div'>
                                <div>Email<span>*</span></div>
                                <input />
                            </div>
                            <div className='Login_input_div'>
                                <div>Password<span>*</span></div>
                                <div className='Login_input_div_password'>
                                    <input type={pass ? "text" : "password"} />
                                    {
                                        pass ? <img className='eye_img' onClick={() => setPass(false)} src='\assets\images\Login\eyeCrossed.svg' alt='' />
                                            : <img className='eye_img' onClick={() => setPass(true)} src='\assets\images\Login\eye.svg' alt='' />

                                    }
                                </div>
                            </div>
                            <div className='login_googleAuth'>
                                <div className='login_continue'>Or continue with</div>
                                <div style={{ background: "#FFFFFF" }} className='login_google_img_div'>
                                    <img src='\assets\images\Login\google2.svg' />
                                </div>
                                <div className='login_button'>
                                    <button className='btn cancel_btn'>CANCEL</button>
                                    <button className='btn login_btn'>LOGIN</button>
                                </div>
                                <div className='login_register_div'>
                                    <div>Do not have an account? <a onClick={handleRegister}>Register</a></div>
                                    <div>Forgot your password? <a onClick={handleForgotPass}>Recover access</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Login
