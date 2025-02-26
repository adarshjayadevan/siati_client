import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './slice';

const store = configureStore({
  reducer: {
    client: clientReducer,
  },
});

export default store;