import { configureStore, combineReducers } from "@reduxjs/toolkit" 
import navReducer from "./sclices/navSlice" 
const reducer=combineReducers({
navReducer:navReducer
})

const store=configureStore({
    reducer:reducer
})
export default store