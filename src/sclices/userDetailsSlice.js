import { createSlice } from "@reduxjs/toolkit";

const userDetails = createSlice({
    name: "auth",
    initialState: {
        isAuthentication: false,
        loading: false,
    },
    reducers: {
        userDetailRequest(state, action) {
            return {
                ...state,
                loading: true,
            };
        },
        userDetailSuccess(state, action) {
            return {
                loading: false,
                user: action.payload,
                isAuthentication: true,
            };
        },
        userDetailError(state, action) {
            return {
                ...state,
                err: action.payload
            };
        }

    },
});


const { reducer, actions } = userDetails;

export const { userDetailRequest, userDetailSuccess, userDetailError } = actions

export default reducer

