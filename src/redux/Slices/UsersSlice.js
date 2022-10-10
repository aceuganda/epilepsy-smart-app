import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from '../Actions/userActions';

const userToken = localStorage.getItem('userToken')
  ? JSON.parse(localStorage.getItem('userToken'))
  : null;

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  userToken,
  success: false
};

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken');
      state.userToken = null;
      state.userInfo = null;
      state.loading = false;
      state.error = null;
    }
  },
  extraReducers: {
    //register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.success = true;
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { logout } = usersSlice.actions;

export default usersSlice.reducer;
