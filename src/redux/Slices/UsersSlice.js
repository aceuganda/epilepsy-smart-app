import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from '../Actions/userActions';
import { editUserDetails, getUserDetails, updatePassword } from '../../apis';

const userToken = localStorage.getItem('userToken')
  ? JSON.parse(localStorage.getItem('userToken'))
  : null;

const userInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

// const userId = localStorage.getItem('userInfo')
//   ? JSON.parse(localStorage.getItem('userInfo')).data.id
//   : null;

const initialState = {
  loading: false,
  userInfo,
  error: null,
  userToken,
  success: false,
  userDetails: {}
};

export const editUserData = createAsyncThunk('user/edit', async (data) => {
  const userId = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')).data.id
    : null;
  const res = await editUserDetails(userId, data);
  return res;
});

export const updatePassWord = createAsyncThunk('user/password', async (data) => {
  const userId = data.id;
  delete data.id;
  const res = await updatePassword(userId, data);
  return res;
});

export const getSingleUserDetails = createAsyncThunk('user/details', async () => {
  const userId = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')).data.id
    : null;
  const res = await getUserDetails(userId);
  return res;
});

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken');
      localStorage.removeItem('userInfo');
      state.userToken = null;
      state.userInfo = null;
      state.loading = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    // register user
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //login user
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.userToken = action.payload.data.access_token;
        state.success = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // get user details
      .addCase(getSingleUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getSingleUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.userDetails = action.payload.data.data;
      })
      .addCase(getSingleUserDetails.pending, (state) => {
        state.loading = true;
      })
      // edit user
      .addCase(editUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editUserData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(editUserData.pending, (state) => {
        state.loading = true;
      });
  }
});

export const { logout } = usersSlice.actions;

export default usersSlice.reducer;
