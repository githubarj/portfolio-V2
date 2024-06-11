import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import navReducer from './slices/navSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    currentPage: navReducer,
  },
});

export default store;
