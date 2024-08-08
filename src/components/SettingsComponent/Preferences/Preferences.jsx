import React, { useState } from 'react'
import "./Preferences.css"

function Preferences() {

    const [toggle, setToggle] = useState(false)


    return (
        <div className='General_div'>
            <div className='General_heading'>Privacy</div>
            <p style={{ margin: "15px 0" }}>User privacy is one of the most important issues of Rake.com! These settings will protect you from negative external influences.</p>
            <div className='toogle_div'>
                <button onClick={() => setToggle(!toggle)} className={toggle ? "toggle_button_true" : "toggle_button"} type="button">
                    <div className={toggle ? "toggle_round_true" : "toggle_round"}></div>
                </button>
                <div className="toggle_content">Hide all your statistics
                    <span >Other users won't be able to view your wins, loses and wagered statistics</span>
                </div>
            </div>
            <button disabled={!toggle} className='btn toggle_btn'>
                SAVE
            </button>
        </div>
    )
}

export default Preferences
