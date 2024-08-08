import React, { useEffect, useRef, useState } from 'react'
import { IoIosClose } from "react-icons/io";


function Otp({ length = 4 }) {

    const [otp, setOtp] = useState(new Array(length).fill(""))
    const inputRef = useRef([])

    useEffect(() => {

        if (inputRef.current[0]) {
            inputRef.current[0].focus();
        }

    }, [])

    const handleChage = (index, e) => {

        const value = e.target.value;
        if (isNaN(value)) return;

        const newOtp = [...otp];

        // allow only one input

        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // submit trigger
        const combainedOtp = newOtp.join("");
        if (combainedOtp.length === length) {
            onOtpSubmit(combainedOtp)
        }

        // move to next input if current field is filled

        if (value && index < length - 1 && inputRef.current[index + 1]) {
            inputRef.current[index + 1].focus();
        }

    };

    const handleClick = (index) => {
        inputRef.current[index].setSelectionRange(0, 1)
    }

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0 && inputRef.current[index - 1]) {

            // move to prev input 
            inputRef.current[index - 1].focus();
        }
    }


    const onOtpSubmit = (otp) => {
        console.log("login suuccessfully", otp);
    }


    return (
        <div className='Login_maindiv'>
            <div className='forgot_div'>
                <form>
                    <div className='Login_in_div'>
                        <div className='login_logo_div'>
                            <img src="\assets\images\nav\Frame 96.svg" alt='' />
                            <div ><IoIosClose className='close_icon' /></div>
                        </div>
                        <div className='Login_heading'>REGISTRATION</div>
                        <div className='otp_heading'>
                            A six-digit verification code was sent to <br />
                            nowsath9080001@gmail.com. Please, enter it below
                        </div>
                        <div className='otp_div'>
                            {
                                otp.map((value, index) => {
                                    return (
                                        <input
                                            key={index}
                                            ref={(input) => inputRef.current[index] = input}
                                            type="text"
                                            value={value}
                                            onChange={(e) => handleChage(index, e)}
                                            onClick={() => handleClick(index)}
                                            onKeyDown={(e) => handleKeyDown(index, e)}

                                        />

                                    )
                                })
                            }
                        </div>
                        <div>Didn't receive the code? <a>Resend</a></div>
                        <div className='login_googleAuth'>
                            <div className='login_button'>
                                <button className='btn cancel_btn'>CANCEL</button>
                                <button className='btn login_btn'>CONTINUE</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Otp



