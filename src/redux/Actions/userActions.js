import { createAsyncThunk } from '@reduxjs/toolkit';
import { REGISTER_USER_URL } from '../../config/urls';
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
        return rejectWithValue(err.response.data);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);
