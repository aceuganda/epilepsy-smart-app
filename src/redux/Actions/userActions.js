import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOGIN_USER_URL, REGISTER_USER_URL } from '../../config/urls';

import axios from 'axios';

export const registerUser = createAsyncThunk('user/register', async (data, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    await axios.post(REGISTER_USER_URL, data, config);
  } catch (err) {
    if (err.response && err.response.data) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data.message);
    } else {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
});

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
        return rejectWithValue(err.response.data.message);
      } else {
        console.log(err);
        return rejectWithValue(err.message);
      }
    }
  }
);

// export const requestPasswordReset = async (data) => {
//   try {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     };
//     await axios.post(`${PASSWORD_RESET_INITIATIATION}`, data, config);
//   } catch (err) {
//     if (err.response && err.response.data) {
//       // console.log(err.response.data);
//       return err.response.data;
//     } else {
//       // console.log(err);
//       return err;
//     }
//   }
// };


// export const resetPassword = async (token, data) => {
//   try {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     };
//     await axios.post(`${PASSWORD_RESET_URL}/${token}`, data, config);
//   } catch (err) {
//     if (err.response && err.response.data) {
//       // console.log(err.response.data);
//       return err.response.data;
//     } else {
//       // console.log(err);
//       return err;
//     }
//   }
// };
