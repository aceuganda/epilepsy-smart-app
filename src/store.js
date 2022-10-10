import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux';
export default configureStore({
  reducer: rootReducer
});
