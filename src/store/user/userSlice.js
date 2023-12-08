import {createSlice} from '@reduxjs/toolkit';
import {serviceApi} from '../services';

const initialState = {
  user: undefined,
  userToken: undefined,
  isLogin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    userLogin: (state, {payload}) => {
      state.user = payload?.data?.user;
      state.userToken = payload?.data?.access_token;
      state.isLogin = true;
    },
    userLogout: state => {
      state.user = undefined;
      state.userToken = undefined;
      state.isLogin = false;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      serviceApi.endpoints.loginUser.matchFulfilled,
      (state, {payload}) => {
        state.user = payload?.data?.user;
        state.userToken = payload?.data?.access_token;
      },
    );
    builder.addMatcher(
      serviceApi.endpoints.getUser.matchFulfilled,
      (state, {payload}) => {
        state.user = payload?.data;
      },
    );
  },
});

export const {userLogin, userLogout} = userSlice.actions;

export default userSlice.reducer;
