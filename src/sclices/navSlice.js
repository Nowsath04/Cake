import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'nav',
  initialState: {
    isNavVisible: true,
  },
  reducers: {
    toggleNav(state) {
      state.isNavVisible = !state.isNavVisible;
    },
  },
});

export const { toggleNav } = navSlice.actions;
export default navSlice.reducer;