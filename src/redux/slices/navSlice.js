import { combineReducers, createSlice } from '@reduxjs/toolkit';

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

const mobileSlice = createSlice({
  name: 'isMobile',
  initialState: {
    value: typeof window !== 'undefined' ? window.innerWidth <= 581 : false,
  },
  reducers: {
    resize: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { navTo } = navSlice.actions;
export const { resize } = mobileSlice.actions;

const layoutReducer = combineReducers({
  currentPage: navSlice.reducer,
  isMobile: mobileSlice.reducer,
});

export default layoutReducer;
