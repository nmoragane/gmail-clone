import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/mailSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
