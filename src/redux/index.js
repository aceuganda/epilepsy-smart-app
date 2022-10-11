import { combineReducers } from '@reduxjs/toolkit';
import { seizureTrackingSlice } from './Slices/SeizureTrackingSlice';
import { resilienceTrackingSlice } from './Slices/ResilienceTracking';

export default combineReducers({
  [seizureTrackingSlice.name]: seizureTrackingSlice.reducer,
  [resilienceTrackingSlice.name]: resilienceTrackingSlice.reducer
});
