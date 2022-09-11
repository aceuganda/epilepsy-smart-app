import { combineReducers } from '@reduxjs/toolkit';
import seizureReducer from '../Seizure/reducers';

export default combineReducers({
  seizure: seizureReducer
});
