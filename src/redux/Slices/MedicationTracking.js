import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postMedication } from '../../apis';

const userId = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo')).data.id
  : null;

export const postMedicationFormData = createAsyncThunk(
  'medicationTracking/postData',
  async (postData) => {
    const res = await postMedication(postData);
    return res;
  }
);

export const medicationTrackingSlice = createSlice({
  name: 'medicationTracking',
  initialState: {
    user_id: userId,
    experienced_side_effects: false,
    medicine_id: '',
    medicine_name: '',
    reason_missed_dose: '',
    side_effects_experienced: '',
    took_medicine: ''
  },
  reducers: {
    setUserID: (state, action) => {
      state.user_id = action.payload;
    },
    setExperiencedSideEffects: (state, action) => {
      state.experienced_side_effects = action.payload;
    },
    setMedicineId: (state, action) => {
      state.medicine_id = action.payload;
    },
    setMedicationName: (state, action) => {
      state.medicine_name = action.payload;
    },
    setReasonForMissingDose: (state, action) => {
      state.reason_missed_dose = action.payload;
    },
    setSideEffects: (state, action) => {
      state.side_effects_experienced = action.payload;
    },
    setTookMedicine: (state, action) => {
      state.took_medicine = action.payload;
    }
  },
  extraReducers: {
    //Post medication Data
    [postMedicationFormData.fulfilled]: (state, action) => {
      state = action.payload;
    }
  }
});

export const {
  setExperiencedSideEffects,
  setMedicineId,
  setMedicationName,
  setReasonForMissingDose,
  setSideEffects,
  setTookMedicine,
  setUserID
} = medicationTrackingSlice.actions;

export default medicationTrackingSlice.reducer;
