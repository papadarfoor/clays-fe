import { configureStore } from '@reduxjs/toolkit';
import notesReducer, { NotesState } from './notesSlice';

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

export type RootState = {
  notes: NotesState;
};

export type AppDispatch = typeof store.dispatch;

export default store;
