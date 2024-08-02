import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from "formik";
import "./Register.css";
import { IoIosClose } from "react-icons/io";
import { basicSchema } from '../../ValidationSchema';
import { useDispatch } from 'react-redux';
import { userDetailError, userDetailRequest, userDetailSuccess } from '../../sclices/userDetailsSlice';
import axios from 'axios';
import { API_URL } from '../../../constants/Url';

const EditProfile = ({ setEdit, user }) => {

    const menuRef = useRef()
    const dispatch = useDispatch();

    console.log(user);

    const [isChecked, setIsChecked] = useState(false);

    // const handleCheckboxChange = (event) => {
    //     setIsChecked(event.target.checked);
    // };

    const onSubmit = async (values, actions) => {
        try {
            dispatch(userDetailRequest());
            const { data } = await axios.post(
                `${API_URL}/user/user-details`, values,
                { withCredentials: true }
            );
            console.log(data.user);
            dispatch(userDetailSuccess(data.user));
            setEdit(false);
            window.location.reload()
        } catch (error) {
            dispatch(userDetailError(error));
        }
    };


    useEffect(() => {
        let handleLogin = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setEdit(false);
                console.log(menuRef.current);
            }
        };
        document.addEventListener("mousedown", handleLogin)
    });

    const handleClose = () => {
        setEdit(false);
    }


    const formik = useFormik({
        initialValues: {
            name: user.name || "",
            email: user.email || "",
            phoneno: user.phoneno || "",
            dateofbirth: user.dateofbirth || ""
        },
        validationSchema: basicSchema,
        onSubmit: (values, actions) => onSubmit(values, actions, dispatch),
    });

    const { values, handleBlur, handleChange, errors, handleSubmit, touched, isSubmitting } = formik;

    return (
        <>
            <div className='Login_maindiv'>
                <form onSubmit={handleSubmit} autoComplete='off' className='Login_div' ref={menuRef}>
                    <div className='Login_in_div'>
                        <div className='login_logo_div'>
                            <img src="\assets\images\nav\Frame 96.svg" alt='' />
                            <div onClick={handleClose}><IoIosClose className='close_icon' /></div>
                        </div>
                        <div className='Login_heading'>User Details</div>
                        <div className='Login_input_div'>
                            <div>Name <span>*</span></div>
                            <input
                                id='name'
                                type='text'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                className={errors.name && touched.name ? "input_error" : ""}
                            />
                            {errors.name && touched.name ? <p className='formik_error'>{errors.name}</p> : ""}
                        </div>
                        <div className='Login_input_div'>
                            <div>Email <span>*</span></div>
                            <input
                                id='email'
                                type="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className={errors.email && touched.email ? "input_error" : ""}
                            />
                            {errors.email && touched.email ? <p className='formik_error'>{errors.email}</p> : ""}
                        </div>
                        <div className='Login_input_div'>
                            <div>Phone No <span>*</span></div>
                            <input
                                type="number"
                                id='phoneno'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phoneno}
                                className={errors.phoneno && touched.phoneno ? "input_error" : ""}
                            />
                            {errors.phoneno && touched.phoneno ? <p className='formik_error'>{errors.phoneno}</p> : ""}
                        </div>
                        <div className='Login_input_div'>
                            <div>Date Of Birth <span>*</span></div>
                            <input
                                type="date"
                                id='dateofbirth'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.dateofbirth}
                                className={errors.dateofbirth && touched.dateofbirth ? "input_error" : ""}
                            />
                            {errors.dateofbirth && touched.dateofbirth ? <p className='formik_error'>{errors.dateofbirth}</p> : ""}
                        </div>
                        <button
                            type='submit'
                            disabled={!formik.isValid || formik.isSubmitting}
                            className={`btn reg_continue_btn ${isChecked && formik.isValid ? '' : 'reg_continue_btn_disabled'}`}
                        >CONFIRM</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditProfile;
