import axios from "axios";
import { API_URL } from "../../constants/Url";
import { LoadingUserRequest, LoadingUserSucccess, LoadinUserError, loginError, loginRequest, loginSuccess, logoutError, logoutSuccess } from "../sclices/userSlice";
import { toast } from "react-toastify";
import { userDetailError, userDetailRequest, userDetailSuccess } from "../sclices/userDetailsSlice";


// login redux

export const loginUser = (address, nonce, signature) => async (dispatch) => {
    try {
        dispatch(loginRequest());
        const { data } = await axios.post(
            `${API_URL}/user/verify-login`,
            { userid: address, nonce: nonce, signature: signature },
            { withCredentials: true }
        );
        console.log(data.user);
        dispatch(loginSuccess(data.user));
        toast.success("logIn successfull", {
            className: 'custom-toast'
        });
    } catch (error) {
        dispatch(loginError(error));
    }
};

export const LoadingUser = async (dispatch) => {
    try {
        dispatch(LoadingUserRequest());
        const { data } = await axios.get(`${API_URL}/user/myprofile`, { withCredentials: true });
        console.log(data);
        dispatch(LoadingUserSucccess(data));
    } catch (error) {
        dispatch(LoadinUserError(error.response ? error.response.data.message : "Server error"))
    }
};



export const LogOutUser = async (dispatch) => {
    try {
        await axios.get(`${API_URL}/user/logout`, { withCredentials: true });
        dispatch(logoutSuccess());
        toast.success("Logout successfull", {
            className: 'custom-toast'
        });
        window.location.reload("/");
    } catch (error) {
        dispatch(logoutError(error));
    }
};

// user details

// export const UserDetails = (values) = async (dispatch) => {
//     try {
//         dispatch(userDetailRequest());
//         const { data } = await axios.post(
//             `${API_URL}/user/user-details`,
//             { withCredentials: true }
//         );
//         console.log(data.user);
//         dispatch(userDetailSuccess(data.user));
//     } catch (error) {
//         dispatch(userDetailError(error));
//     }
// };