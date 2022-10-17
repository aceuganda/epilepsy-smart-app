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
    user_id: null,
    engaged_socially_today: false,
    engagement_activities: [],
    feelings_experienced: [],
    reason_for_feelings: '',
    treatment_scale_by_other: 0,
    type_of_feelings: ''
  },
  reducers: {
    setEngagedSocially: (state, action) => {
      state.engaged_socially_today = action.payload;
    },
    setEngagement: (state, action) => {
      state.engagement_activities = action.payload;
    },
    setTypeOfFeelings: (state, action) => {
      state.type_of_feelings = action.payload;
    },
    setFeelingToday: (state, action) => {
      state.feelings_experienced = action.payload;
    },
    setReasonForFeeling: (state, action) => {
      state.reason_for_feelings = action.payload;
    },
    setTreatmentScaleByOthers: (state, action) => {
      state.treatment_scale_by_other = action.payload;
    },
    setResilienceUserID: (state, action) => {
      state.user_id = parseInt(action.payload);
    }
  },
  extraReducers: {
    //Post Resilience Data
    [postResilienceFormData.fulfilled]: (state, action) => {
      state = action.payload;
    }
  }
});


export const {
  setEngagedSocially,
  setEngagement,
  setTypeOfFeelings,
  setFeelingToday,
  setReasonForFeeling,
  setResilienceUserID,
  setTreatmentScaleByOthers
} = resilienceTrackingSlice.actions;

export default resilienceTrackingSlice.reducer;
