import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postSeizureAssessment } from '../../apis';

export const postSeizureFormData = createAsyncThunk(
  'seizureTracking/postData',
  async (postData) => {
    const res = await postSeizureAssessment(postData);
    return res;
  }
);

const userId = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo')).data.id
  : null;
export const seizureTrackingSlice = createSlice({
  name: 'seizureTracking',
  initialState: {
    user_id: parseInt(userId),
    seizure_severity: '',
    seizure_duration: '',
    seizure_time_of_day: '',
    lost_awareness: false,
    experienced_aura: false,
    aura_kind_experienced: '',
    seizure_trigger: '',
    seizure_impact: '',
    was_seizure_triggered: false,
    seizure_impact_upset_you: 0
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
    setTrigger: (state, action) => {
      state.was_seizure_triggered = action.payload;
    },
    setSeizureTrigger: (state, action) => {
      state.seizure_trigger = action.payload;
    },
    setSeizureImpact: (state, action) => {
      state.seizure_impact = action.payload;
    },
    setSeizureUpsetRange: (state, action) => {
      state.seizure_impact_upset_you = action.payload;
    }
  },
  extraReducers: {
    //Post Seizure Data
    [postSeizureFormData.fulfilled]: (state, action) => {
      state = action.payload;
    }
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
  setTrigger,
  setSeizureTrigger,
  setSeizureUpsetRange
} = seizureTrackingSlice.actions;

export default seizureTrackingSlice.reducer;
