import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'chat',
  initialState: {
    isChatVisible: true,
  },
  reducers: {
    showChat(state) {
      state.isChatVisible = true;
    },
    hideChat(state) {
      state.isChatVisible = false;
    },
  },
});

export const { showChat, hideChat } = navSlice.actions;
export default navSlice.reducer;