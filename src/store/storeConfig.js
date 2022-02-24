import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'redux/user/ueserSlice';

export const store = configureStore({
  reducer: {
    user : userReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});
