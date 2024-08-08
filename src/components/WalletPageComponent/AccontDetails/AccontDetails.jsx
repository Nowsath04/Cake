import React, { useEffect, useState } from 'react'
import "./AccontDetails.css"
import { useSelector } from 'react-redux'

function AccontDetails() {


    const { user } = useSelector((useSelector) => useSelector.auth)


    useEffect(() => {
        console.log(user);
    }, [user])

    return (
        <div className='General_div'>
            <div className='General_heading'>Account Details</div>
            <div className='General_content_box_div'>
                <div className='General_content_box' style={{ width: "100%" }}>
                    <div className='General_content_box_heading'>Wallet Address</div>
                    <div className='General_content_box_subheading'><span>{user?.userid}</span></div>
                </div>
            </div>
        </div>
    )
}

export default AccontDetails
