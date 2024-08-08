import React from 'react'
import "./Overview.css"
import ReactPlayer from 'react-player'

function Overview() {

    return (
        <div className='overview_div'>
            <div className='overview_heading'>We are excited that you are
                interested in becoming a Rake.com partner. Welcome to our referral system.
            </div>
            <div className='overview_video_div'>
                <ReactPlayer className="overview_video" controls={true} url='https://www.youtube.com/watch?v=Cl0eO0sAa74&ab_channel=RaidenStudios' />
            </div>
            <div className='overview_revenue_div'>
                <div className='overview_revenue_heading'>REVENUE MODEL</div>
                <p>All of our games have a different house edge.<br />
                    The commission is derived by the following formula:
                </p>
                <div class="overview_revenue_box">Casino
                    <span>EDGE AS DECIMAL * WAGERED * COMMISSION RATE / 2</span>
                </div>
                <p>All of our games have a different house edge.<br />
                    The commission is derived by the following formula:
                </p>
                <div style={{ marginBottom: "0px" }} class="overview_revenue_box">Sportsbook
                    <span>(0.03 * Wagered / 2) * Commission rate</span>
                </div>
            </div>
        </div>
    )
}

export default Overview
