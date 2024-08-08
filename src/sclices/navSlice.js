import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    isNavVisible: true,
    slectedCoin: null,
  },
  reducers: {
    toggleNav(state) {
      state.isNavVisible = !state.isNavVisible;
    },
    coinSelect(state, action) {
      return {
        ...state,
        slectedCoin: action.payload,
      };
    },
  },
});

export const { toggleNav ,coinSelect} = navSlice.actions;
export default navSlice.reducer;
