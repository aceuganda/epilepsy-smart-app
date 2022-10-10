import { createAsyncThunk } from '@reduxjs/toolkit';
import { REGISTER_USER_URL } from '../../config/urls';
import { LOGIN_USER_URL } from '../../config/urls';
import axios from 'axios';

export const registerUser = createAsyncThunk(
  'user/register',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      await axios.post(REGISTER_USER_URL, { username, email, password }, config);
    } catch (err) {
      if (err.response && err.response.data) {
        console.log(err.response.data);
        return rejectWithValue(err.response.data);
      } else {
        console.log(err);
        return rejectWithValue(err.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const { data } = await axios.post(LOGIN_USER_URL, { email, password }, config);
      localStorage.setItem('userInfo', JSON.stringify(data));
      localStorage.setItem('userToken', JSON.stringify(data.data.access_token));
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
        console.log(err.response.data);
        return rejectWithValue(err.response.data);
      } else {
        console.log(err);
        return rejectWithValue(err.message);
      }
    }
  }
);
