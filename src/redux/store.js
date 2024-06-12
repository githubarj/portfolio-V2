import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import layoutReducer from './slices/navSlice';  

const store = configureStore({
  reducer: {
    counter: counterReducer,
    layout: layoutReducer,
  },
});

export default store;
