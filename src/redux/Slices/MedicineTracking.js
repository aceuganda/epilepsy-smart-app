import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postMedicine, getMedicine, deleteMedicine } from '../../apis';

export const postMedicineFormData = createAsyncThunk(
  'medicineTracking/postData',
  async (postData) => {
    const res = await postMedicine(postData);
    return res;
  }
);

const userId = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo')).data.id
  : null;

export const getMedicineData = createAsyncThunk('medicineTracking/getData', async (userID) => {
  const res = await getMedicine(userID);
  return res;
});

export const deleteMedicineData = createAsyncThunk(
  'medicineTracking/deleteData',
  async (medicineID) => {
    const res = await deleteMedicine(medicineID);
    return res;
  }
);

export const medicineTrackingSlice = createSlice({
  name: 'medicineTracking',
  initialState: {
    user_id: userId,
    name: ''
  },
  reducers: {
    setUserID: (state, action) => {
      state.user_id = action.payload;
    },
    setMedicineName: (state, action) => {
      state.name = action.payload;
    }
  },
  extraReducers: {
    //Post medicine Data
    [postMedicineFormData.fulfilled]: (state, action) => {
      state = action.payload;
    }
  }
});

export const { setMedicineName, setUserID } = medicineTrackingSlice.actions;

export default medicineTrackingSlice.reducer;
