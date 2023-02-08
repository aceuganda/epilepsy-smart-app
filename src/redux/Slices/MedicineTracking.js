import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postMedicine, getMedicine } from '../../apis';

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

export const getMedicineData = createAsyncThunk('medicineTracking/getData', async () => {
  const res = await getMedicine(userId);
  return res;
});

export const medicineTrackingSlice = createSlice({
  name: 'medicineTracking',
  initialState: {
    user_id: userId,
    name: ''
  },
  reducers: {
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

export const { setMedicineName } = medicineTrackingSlice.actions;

export default medicineTrackingSlice.reducer;
