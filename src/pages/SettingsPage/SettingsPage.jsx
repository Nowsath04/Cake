import React from 'react'
import "./SettingsPage.css"
import Footer from './../../components/Footer/Footer';
import { NavLink, Outlet } from 'react-router-dom';

function SettingsPage() {
    return (
        <>
            <div className='settings_maindiv'>
                <div className='settings_div'>
                    <div className='settings_Heading'>Settings</div>
                    <div className='settings_content_div'>
                        <div className='settings_left_div'>
                            <NavLink
                                to={"/settings/general"}
                                className={({ isActive }) => ` ${isActive ? "setings_Nav_active" : ""}`
                                }
                            ><img src='\assets\images\settings\settings.svg' alt='' />General</NavLink>
                            <NavLink
                                to={"/settings/security"}
                                className={({ isActive }) => ` ${isActive ? "setings_Nav_active" : ""}`
                                }
                            ><img src='\assets\images\settings\security.svg' alt='' />Security</NavLink>
                            <NavLink
                                to={"/settings/preferences"}
                                className={({ isActive }) => ` ${isActive ? "setings_Nav_active" : ""}`
                                }
                            ><img src='\assets\images\settings\preference.svg' alt='' />Preferences</NavLink>
                            <NavLink
                                to={"/settings/black-list"}
                                className={({ isActive }) => ` ${isActive ? "setings_Nav_active" : ""}`
                                }
                            ><img src='\assets\images\settings\error.svg' alt='' />Black List</NavLink>
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

export default SettingsPage
