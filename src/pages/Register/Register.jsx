import React, { useEffect, useState } from 'react';
import { useFormik } from "formik";
import { IoIosClose } from "react-icons/io";
import { basicSchema } from '../../ValidationSchema';
import { useDispatch } from 'react-redux';
import { userDetailError, userDetailRequest, userDetailSuccess } from '../../sclices/userDetailsSlice';
import axios from 'axios';
import { API_URL } from '../../../constants/Url';
import "./Register.css";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [isChecked, setIsChecked] = useState(false);
    const [register, setRegister] = useState(false);


    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const onSubmit = async (values, actions) => {
        try {
            dispatch(userDetailRequest());
            const { data } = await axios.post(
                `${API_URL}/user/user-details`, values,
                { withCredentials: true }
            );
            console.log(data.user);
            dispatch(userDetailSuccess(data.user));
            actions.resetForm()
            window.location.reload("/")
        } catch (error) {
            toast.error("Email already registered")
            dispatch(userDetailError(error));
        }
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phoneno: "",
            dateofbirth: ""
        },
        validationSchema: basicSchema,
        onSubmit: (values, actions) => onSubmit(values, actions, dispatch),
    });

    const { values, handleBlur, handleChange, errors, handleSubmit, touched, isSubmitting } = formik;


    const handleClose = () => {
        navigate(-1);
    }

    return (
        <>
            <div className='Login_maindiv'>
                <form onSubmit={handleSubmit} autoComplete='off' className='Login_div'>
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
                        <div className='reg_check_box_div'>
                            <div>
                                <input type="checkbox"
                                    id="customCheckbox"
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="customCheckbox"></label>
                            </div>
                            <div>I read the <a href="#">terms & conditions</a> and <a href="#">privacy policy</a>, and I accept it*</div>
                        </div>
                        <button
                            type='submit'
                            disabled={!isChecked || !formik.isValid || formik.isSubmitting}
                            className={`btn reg_continue_btn ${isChecked && formik.isValid ? '' : 'reg_continue_btn_disabled'}`}
                        >CONFIRM</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;
