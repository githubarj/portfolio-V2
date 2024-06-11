import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'currentPage',
  initialState: {
    value: 'hello',
  },
  reducers: {
    navTo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { navTo } = navSlice.actions;

export default navSlice.reducer;
