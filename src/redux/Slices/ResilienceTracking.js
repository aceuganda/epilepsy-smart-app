import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllResilienceTallies, postResilience } from '../../apis';

export const postResilienceFormData = createAsyncThunk(
  'resilienceTracking/postData',
  async (postData) => {
    const res = await postResilience(postData);
    return res;
  }
);

const userId = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo')).data.id
  : null;

export const getResilienceTallies = async (dispatch) => {
  const response = await getAllResilienceTallies(userId);
  try {
    const res = dispatch(getUserTallies(response.data));
    return res;
  } catch (error) {
    console.log(error);
    console.log(response.message);
    const res = dispatch(getUserTallies(response.message));
    return res;
  }
};

export const resilienceTrackingSlice = createSlice({
  name: 'resilienceTracking',
  initialState: {
    user_id: userId,
    engaged_socially_today: false,
    engagement_activities: [],
    feelings_experienced: [],
    reason_for_feelings: '',
    treatment_scale_by_other: 0,
    type_of_feelings: '',
    resilience_tallies: []
  },
  reducers: {
    setUserID: (state, action) => {
      state.user_id = action.payload;
    },
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
    getUserTallies: (state, action) => {
      state.resilience_tallies = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(postResilienceFormData.fulfilled, (state, action) => {
      return action.payload;
    });
  }

  // extraReducers: {
  //   //Post Resilience Data
  //   [postResilienceFormData.fulfilled]: (state, action) => {
  //     state = action.payload;
  //   }
  // }
});

export const {
  setEngagedSocially,
  setEngagement,
  setTypeOfFeelings,
  setFeelingToday,
  setReasonForFeeling,
  setTreatmentScaleByOthers,
  getUserTallies,
  setUserID
} = resilienceTrackingSlice.actions;

export const loadUserTallies = (state) => state.resilienceTracking.resilience_tallies;

export default resilienceTrackingSlice.reducer;
