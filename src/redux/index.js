import { combineReducers } from '@reduxjs/toolkit';
import { seizureTrackingSlice } from './Slices/SeizureTrackingSlice';

export default combineReducers({
  [seizureTrackingSlice.name]: seizureTrackingSlice.reducer
});
