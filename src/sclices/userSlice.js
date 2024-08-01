import { createSlice } from "@reduxjs/toolkit";

const connectAccount = createSlice({
    name: "auth",
    initialState: {
        isAuthentication: false,
        loading: false,
    },
    reducers: {
        loginRequest(state, action) {
            return {
                ...state,
                loading: true,
            };
        },
        loginSuccess(state, action) {
            return {
                loading: false,
                user: action.payload,
                isAuthentication: true,
            };
        },
        loginError(state, action) {
            return {
                ...state,
                err: action.payload
            };
        },
        LoadingUserRequest(state, action) {
            return {
                ...state,
                isAuthentication: false,
                loading: true
            }
        },
        LoadingUserSucccess(state, action) {
            return {
                loading: false,
                isAuthentication: true,
                user: action.payload.user
            }
        },
        LoadinUserError(state, action) {
            return {
                loading: false,
                isAuthentication: false,
                error: action.payload
            }
        },

        logoutSuccess(state, action) {
            return {
                loading: false,
                isAuthentication: false,
            };
        },
        logoutError(state, action) {
            return {
                ...state,
                err: action.payload
            };
        },

    },
});


const { reducer, actions } = connectAccount;

export const { loginRequest, loginSuccess, loginError, logoutError, logoutRequest, logoutSuccess, LoadinUserError, LoadingUserRequest, LoadingUserSucccess } = actions

export default reducer

