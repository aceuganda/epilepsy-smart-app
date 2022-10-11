import { combineReducers } from '@reduxjs/toolkit';
import { seizureTrackingSlice } from './Slices/SeizureTrackingSlice';
import { resilienceTrackingSlice } from './Slices/ResilienceTracking';
import { usersSlice } from './Slices/UsersSlice';

export default combineReducers({
  [seizureTrackingSlice.name]: seizureTrackingSlice.reducer,
  [resilienceTrackingSlice.name]: resilienceTrackingSlice.reducer,
  [usersSlice.name]: usersSlice.reducer
});


