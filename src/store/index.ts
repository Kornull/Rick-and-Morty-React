import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsSlice/cardsSlice';
import pagesReducer from './searchSlice/searchSlice';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    search: pagesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
