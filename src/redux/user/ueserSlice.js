import { createAsyncThunk, createSlice, rejectWithValue } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false, // 로그인 성공
  logInError: null, // 로그인 에러
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false, // 로그아웃 성공
  logOutError: null, // 로그아웃 에러
  userInfo: null, // 유저정보
};

export const loginAsync = createAsyncThunk('user/login', async(action) => {
  const { data } = action;
  return axios
    .post('http://localhost:5000/login', data)
    .then((res) => res.data)
    .catch((e) => e);
});

export const logOutAsync = createAsyncThunk('user/logout', async() => {
  return axios
    .post('')
    .then((res) => res.data)
    .catch((e) => e)
});

export const userSlice = createSlice({
  name : 'user',
  initialState,
  reducers : {},
  extraReducers : (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.logInLoading = true;
        state.logInError = null;
        state.logInDone = false;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        console.log('action')
        // state.logInLoading = false;
        // state.userInfo = action.payload;
        // state.logInDone = true;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        console.log(action)
        // state.logInLoading = false;
        // state.userInfo = null;
        // state.logInError = action.payload.error;
      })
  }
});

export default userSlice.reducer;