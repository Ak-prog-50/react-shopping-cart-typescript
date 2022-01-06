import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from '../features/shopSlice'
import counterReducer from '../features/counter/counterSlice';


export const store = configureStore({
  reducer: {
    products : productReducer,
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
