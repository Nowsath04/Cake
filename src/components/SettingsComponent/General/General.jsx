import React from 'react'
import "./General.css"

function General() {
    return (
        <div className='General_div'>
            <div className='General_heading'>My Account</div>
            <div className='General_content_box_div'>
                <div className='General_content_box'>
                    <div className='General_content_box_heading'>Username</div>
                    <div className='General_content_box_subheading'>Login <span>Test1</span></div>
                </div>
                <div className='General_content_box'>
                    <div className='General_content_box_heading'>Email <span> ✓ verified</span></div>
                    <div className='General_content_box_subheading'>Email <span>test@gmail.com</span></div>
                </div>
            </div>
        </div>
    )
}

export default General
