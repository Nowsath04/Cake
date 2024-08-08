import { configureStore, combineReducers } from "@reduxjs/toolkit"
import navReducer from "./sclices/navSlice"
import chatReducer from "./sclices/chatSlice"
import auth from "./sclices/userSlice"
import userDetailReducer from "./sclices/userDetailsSlice"
import { thunk } from 'redux-thunk';

const reducer = combineReducers({
    navReducer: navReducer,
    chatReducer: chatReducer,
    auth: auth,
    userDetailReducer: userDetailReducer
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)

})
export default store;