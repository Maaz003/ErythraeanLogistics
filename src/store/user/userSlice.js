import {createSlice} from '@reduxjs/toolkit';
import {serviceApi} from '../services';

const initialState = {
  user: undefined,
  userToken: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    userLogin: (state, {payload}) => {
      state.user = payload.user;
      state.userToken = payload.token;
    },
  },
});

export const {userLogin} = userSlice.actions;

export default userSlice.reducer;
