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
    value: typeof window !== 'undefined' ? window.innerWidth <= 576 : false,
  },
  reducers: {
    resize: (state, action) => {
      state.value = action.payload;
    },
  },
});

const openKeysSlice = createSlice({
  name: 'openKeys',
  initialState: {
    value: ['personal-info', 'bio', 'projects', 'contacts', 'find-me-also-on'],
  },
  reducers: {
    setOpenKeys: (state, action) => {
      state.value = action.payload;
    },
    addOpenKeys: (state, action) => {
      action.payload.map((item) => state.value.push(item));
    },
  },
});

const selectedKeys = createSlice({
  name: 'selectedKeys',
  initialState: {
    value: ['personal-info', 'bio', 'overview', 'React', 'Solidity'],
  },
  reducers: {
    setSelectedKeys: (state, action) => {
      state.value = action.payload;
      //takes in an array with only one value - for menus which only once can be selected at a time
    },
    addSelectedKeys: (state, action) => {
      action.payload.map((item) => state.value.push(item));
      // for menus which take up more than one item like projects
    },
  },
});

export const { setOpenKeys, addOpenKeys } = openKeysSlice.actions;
export const { navTo } = navSlice.actions;
export const { resize } = mobileSlice.actions;

const layoutReducer = combineReducers({
  currentPage: navSlice.reducer,
  isMobile: mobileSlice.reducer,
  openKeys: openKeysSlice.reducer,
});

export default layoutReducer;
