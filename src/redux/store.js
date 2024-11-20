import { configureStore ,combineReducers} from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';

const reducer =combineReducers({
  data:dataReducer
})
const store = configureStore({
  reducer
});

export default store;
