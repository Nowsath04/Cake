import React, { useState } from 'react'
import "./RefLink.css"

function RefLink() {

    const [dropdown, setDropdown] = useState(false)


    return (
        <>
            <div className='RefLink_div'>
                <div className='RefLink_box_div'>
                    <div className='RefLink_box'>
                        <div>Campaign Hits</div>
                        <div className='RefLink_value'>0</div>
                    </div>
                    <div className='RefLink_box'>
                        <div>Total Deposits</div>
                        <div className='RefLink_value'>0</div>
                    </div>
                </div>
                <div style={{ marginTop: "15px" }} className='RefLink_box'>
                    <div>Total Deposits</div>
                    <div className='RefLink_value'>0</div>
                </div>
            </div>
            <div className='RefLink_heading'>CAMPAIGNS</div>
            <div className='RefLink_CAMPAIGNS_div'>
                <div className='RefLink_CAMPAIGNS_name'>
                    Nowsath
                </div>
                <div className='RefLink_CAMPAIGNS_Commission'>
                    <div> Commission: <span>0.00 MATIC</span></div>
                    <img className={dropdown ? "ref_dropdown_arrow_true" : "ref_dropdown_arrow_false"} onClick={() => setDropdown(!dropdown)} src="\assets\images\sidebar\icons\arrow.svg" alt="" />
                </div>
            </div>
            {
                dropdown && <div className='RefLink_dropdown_div'>
                    <div className='RefLink_dropdown_box_div'>
                        <div className='RefLink_dropdown_box'>
                            <div>CAMPAIGN HITS</div>
                            <p>0</p>
                        </div>
                        <div className='RefLink_dropdown_box'>
                            <div>referrals</div>
                            <p>438</p>
                        </div>
                        <div className='RefLink_dropdown_box'>
                            <div>total deposits</div>
                            <p>0</p>
                        </div>
                        <div className='RefLink_dropdown_box'>
                            <div>AVAILABLE COMMISSION</div>
                            <p>0</p>
                        </div>
                        <div className='RefLink_dropdown_box'>
                            <div>Total COMMISSION</div>
                            <p>0</p>
                        </div>
                        <div className='RefLink_dropdown_box'>
                            <div>unique COMMISSION</div>
                            <p>0</p>
                        </div>
                        <div className='RefLink_dropdown_box'>
                            <div>COMMISSION rate</div>
                            <p>0</p>
                        </div>
                    </div>
                    <div className='REFERRAL_link'>
                        <p>REFERRAL LINK</p>
                        <div>https://rake.com/nowsath
                            <img src="/assets/images/settings/copy.svg" alt="" />
                        </div>
                    </div>
                </div>
            }
            <button className='btn ref_link_create_btn'>
                CREATE NEW CAMPAIGN
            </button>
        </>

    )
}

export default RefLink
