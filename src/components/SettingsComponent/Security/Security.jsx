import React from 'react'
import "./Security.css"


function Security() {
    return (
        <div className='General_div'>
            <div className='General_heading'>Two Factor</div>
            <p>For deactivation of the two-factor authentication, kindly input your existing 2FA code in the provided field and press 'Disable'. Caution: Disabling 2FA may reduce the security level of your account.</p>
            <h4 class="">Open the authenticator, tap on the "+" icon and copy this code to your authenticator app</h4>
            <div className='security_Copy_div'>
                KA6QIFQHFNZHGNR5
                <div className='copy_icon_div'>
                    <img src="/assets/images/settings/copy.svg" alt="" />
                </div>
            </div>
            <div class="security_warning_div">
                <img loading="lazy" src="\assets\images\settings\warning.svg" alt="warning" />
                Don't let anyone see this! Keep the secret code.
                <br />
                You may need it if you change or lost your phone.
            </div>
            <div class="QR_div">
                <h4 class="styles_h4__1s4IT styles_qr_code_text__jAXe7">Or scan the QR code using your phone or tablet</h4>
                <img src='\assets\images\settings\qrcode.png' alt='QR-code' />
            </div>
        </div>
    )
}

export default Security

{/* <button className='btn toggle_btn'>
SAVE
</button> */}