import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postResilience } from '../../apis';

export const postResilienceFormData = createAsyncThunk(
  'resilienceTracking/postData',
  async (postData) => {
    const res = await postResilience(postData);
    return res;
  }
);

export const resilienceTrackingSlice = createSlice({
  name: 'resilienceTracking',
  initialState: {
    engaged_socially: null,
    engagement: null,
    type_of_feelings: null,
    feeling_today: null,
    reason_for_feeling: null,
    treatment_scale_by_others: null
  },
  reducers: {
    setEngagedSocially: (state, action) => {
      state.engaged_socially = action.payload;
    },
    setEngagement: (state, action) => {
      state.engagement = action.payload;
    },
    setTypeOfFeelings: (state, action) => {
      state.type_of_feelings = action.payload;
    },
    setFeelingToday: (state, action) => {
      state.feeling_today = action.payload;
    },
    setReasonForFeeling: (state, action) => {
      state.reason_for_feeling = action.payload;
    },
    setTreatmentScaleByOthers: (state, action) => {
      state.treatment_scale_by_others = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(postResilienceFormData.fulfilled, (state, action) => {
      state = action.payload;
    });
  }
});

export const {
  setEngagedSocially,
  setEngagement,
  setTypeOfFeelings,
  setFeelingToday,
  setReasonForFeeling,
  setTreatmentScaleByOthers
} = resilienceTrackingSlice.actions;

export default resilienceTrackingSlice.reducer;
