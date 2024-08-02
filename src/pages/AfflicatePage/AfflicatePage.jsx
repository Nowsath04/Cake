import React from 'react'
import Footer from './../../components/Footer/Footer';
import { NavLink, Outlet } from 'react-router-dom';
import "./AfflicatePage.css"

function AfflicatePage() {
    return (
        <>
            <div className='settings_maindiv'>
                <div className='settings_div'>
                    <div className='settings_Heading'>Referral system</div>
                    <div className='settings_content_div'>
                        <div className='settings_left_div'>
                            <NavLink
                                to={"/referral/overview"}
                                className={({ isActive }) => ` ${isActive ? "setings_Nav_active" : ""}`
                                }
                            ><img src='\assets\images\settings\overview.svg' alt='' />Overview</NavLink>
                            <NavLink
                                to={"/referral/comission"}
                                className={({ isActive }) => ` ${isActive ? "setings_Nav_active" : ""}`
                                }
                            ><img src='\assets\images\settings\ref-user.svg' alt='' />Referred users</NavLink>
                            <NavLink
                                to={"/referral/referred-users"}
                                className={({ isActive }) => ` ${isActive ? "setings_Nav_active" : ""}`
                                }
                            ><img src='\assets\images\settings\ref-link.svg' alt='' />Referred links</NavLink>
                        </div>
                        <div className='settings_right_div'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AfflicatePage
