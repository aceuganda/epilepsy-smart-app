import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postSeizureAssessment } from '../../apis';

export const postSeizureFormData = createAsyncThunk(
  'seizureTracking/postData',
  async (postData) => {
    const res = await postSeizureAssessment(postData);
    return res;
  }
);

export const seizureTrackingSlice = createSlice({
  name: 'seizureTracking',
  initialState: {
    seizure_severity: null,
    seizure_duration: null,
    seizure_time_of_day: null,
    lost_awareness: null,
    experienced_aura: null,
    aura_kind_experienced: null,
    seizure_trigger: null,
    seizure_impact: null
  },
  reducers: {
    setSeizureSeverity: (state, action) => {
      state.seizure_severity = action.payload;
    },
    setSeizureDuration: (state, action) => {
      state.seizure_duration = action.payload;
    },
    setSeizureTimeOfDay: (state, action) => {
      state.seizure_time_of_day = action.payload;
    },
    setLostAwareness: (state, action) => {
      state.lost_awareness = action.payload;
    },
    setSeizureExperiencedAura: (state, action) => {
      state.aura_kind_experienced = action.payload;
    },
    setSeizureAura: (state, action) => {
      state.experienced_aura = action.payload;
    },
    setSeizureTrigger: (state, action) => {
      state.seizure_trigger = action.payload;
    },
    setSeizureImpact: (state, action) => {
      state.seizure_impact = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(postSeizureFormData.fulfilled, (state, action) => {
      state = action.payload;
    });
  }
});

export const {
  setSeizureDuration,
  setSeizureSeverity,
  setLostAwareness,
  setSeizureTimeOfDay,
  setSeizureAura,
  setSeizureExperiencedAura,
  setSeizureImpact,
  setSeizureTrigger
} = seizureTrackingSlice.actions;

export default seizureTrackingSlice.reducer;
