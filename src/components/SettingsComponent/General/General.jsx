import React, { useEffect, useState } from 'react'
import "./General.css"
import { useSelector } from 'react-redux'
import EditProfile from '../../../pages/Register/EditProfile';

function General() {

    const [edit, setEdit] = useState(false)

    const { user } = useSelector((useSelector) => useSelector.auth)


    useEffect(() => {
        console.log(user);
    }, [user])

    return (
        <div className='General_div'>
            <div className='General_heading'>My Account</div>
            <div className='General_content_box_div'>
                <div className='General_content_box'>
                    <div className='General_content_box_heading'>Username</div>
                    <div className='General_content_box_subheading'>Login <span>{user?.name}</span></div>
                </div>
                <div className='General_content_box'>
                    <div className='General_content_box_heading'>Email <span> ✓ verified</span></div>
                    <div className='General_content_box_subheading'>Email <span>{user?.email}</span></div>
                </div>
                <div className='General_content_box'>
                    <div className='General_content_box_heading'>Phone No.</div>
                    <div className='General_content_box_subheading'>Email <span>{user?.phoneno}</span></div>
                </div>
                <div className='General_content_box'>
                    <div className='General_content_box_heading'>DOB </div>
                    <div className='General_content_box_subheading'>Email <span>{user?.dateofbirth}</span></div>
                </div>
                <button style={{ fontWeight: "700" }} className='btn' onClick={() => setEdit(!edit)}>
                    EDIT
                </button>
                {
                    edit && <EditProfile setEdit={setEdit} user={user} />
                }
            </div>
        </div>
    )
}

export default General
