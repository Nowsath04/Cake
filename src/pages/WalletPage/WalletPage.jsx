import React from 'react'
import "./WalletPage.css"
import Footer from './../../components/Footer/Footer';
import { NavLink, Outlet } from 'react-router-dom';

function WalletPage() {
    return (
        <>
            <div className='settings_maindiv'>
                <div className='settings_div'>
                    <div className='settings_Heading'>Wallet</div>
                    <div className='settings_content_div'>
                        <div className='settings_left_div'>
                            <NavLink
                                to={"/wallet/account-details"}
                                className={({ isActive }) => ` ${isActive ? "setings_Nav_active" : ""}`
                                }
                            ><img src='\assets\images\settings\error.svg' alt='' />Account Details</NavLink>
                            <NavLink
                                to={"/wallet/deposit"}
                                className={({ isActive }) => ` ${isActive ? "setings_Nav_active" : ""}`
                                }
                            ><img src='\assets\images\settings\settings.svg' alt='' />Deposit</NavLink>
                            <NavLink
                                to={"/wallet/withdraw"}
                                className={({ isActive }) => ` ${isActive ? "setings_Nav_active" : ""}`
                                }
                            ><img src='\assets\images\settings\security.svg' alt='' />Withdraw</NavLink>
                            <NavLink
                                to={"/wallet/transaction"}
                                className={({ isActive }) => ` ${isActive ? "setings_Nav_active" : ""}`
                                }
                            ><img src='\assets\images\settings\preference.svg' alt='' />Transactions</NavLink>
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

export default WalletPage
