import { configureStore, combineReducers } from "@reduxjs/toolkit" 
import navReducer from "./sclices/navSlice" 
import chatReducer from "./sclices/chatSlice"
const reducer=combineReducers({
navReducer:navReducer,
chatReducer:chatReducer
})

const store=configureStore({
    reducer:reducer
})
export default store