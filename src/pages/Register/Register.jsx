import React, { useEffect, useRef, useState } from 'react'
import "./Register.css"
import { IoIosClose } from "react-icons/io";


function Register({ setRegister, setLogin }) {

    const [pass, setPass] = useState(false)
    const menuRef = useRef()

    useEffect(() => {
        var handleLogin = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setRegister(false);
            }
        };
        document.addEventListener("mousedown", handleLogin)
    });

    const handleClose = () => {
        setRegister(false);
        setLogin(false)
    }

    const handleLogin = () => {
        setLogin(true)
        setRegister(false);
    }


    return (
        <>
            <div className='Login_maindiv'>
                <div ref={menuRef} className='Login_div'>
                    <div className='Login_in_div'>
                        <div className='login_logo_div'>
                            <img src="\assets\images\nav\Frame 96.svg" alt='' />
                            <div onClick={handleClose}><IoIosClose className='close_icon' /></div>
                        </div>
                        <div className='Login_heading'>REGISTRATION</div>
                        <div className='Login_input_div'>
                            <div>Username<span>*</span></div>
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
                        <div className='Login_input_div'>
                            <div>Date of birth<span>*</span></div>
                            <div className='date_of_birth_div'>
                                <input placeholder="DD" type="" />
                                <select name="month" placeholder="Month">
                                    <option value="1">Jan</option>
                                    <option value="2">Feb</option>
                                    <option value="3">Mar</option>
                                    <option value="4">Apr</option>
                                    <option value="5">May</option>
                                    <option value="6">Jun</option>
                                    <option value="7">Jul</option>
                                    <option value="8">Aug</option>
                                    <option value="9">Sept</option>
                                    <option value="10">Oct</option>
                                    <option value="11">Nov</option>
                                    <option value="12">Dec</option>
                                </select>
                                <input placeholder="YYYY" type="" />
                            </div>
                        </div>
                        <div className='Login_input_div'>
                            <div>Email<span>*</span></div>
                            <input type="password" />
                        </div>
                        <div className='Login_input_div'>
                            <div>Code (optional)</div>
                            <input type="password" />
                        </div>
                        <div className='reg_check_box_div'>
                            <div>
                                <input type="checkbox" id="customCheckbox" />
                                <label for="customCheckbox"></label>
                            </div>
                            <div>I read the <a>terms & conditions</a> and <a>privacy policy</a>, and I accept it*</div>
                        </div>
                        <button className='btn reg_continue_btn'>CONFIRM</button>
                        <div className='login_googleAuth'>
                            <div className='login_continue'>Or continue with</div>
                            <div className='login_google_img'>
                                <div className='login_google_img_div'>
                                    <img src='\assets\images\Login\google2.svg' />
                                </div>
                                <div className='login_google_img_div'>
                                    <img src='\assets\images\Login\Facebook.svg' />
                                </div>
                                <div className='login_google_img_div'>
                                    <img src='\assets\images\Login\Twitter.svg' />
                                </div>
                            </div>
                            <div className='login_register_div'>
                                <div>Do not have an account? <a onClick={handleLogin}>Login</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
