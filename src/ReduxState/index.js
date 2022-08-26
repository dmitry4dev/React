import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

const initialState = {
  countryId: '',
  checkedRadio: '',
};

export const setCountryId = createAction('setCountryId');

export const setCheckedRadio = createAction('setCheckedRadio');

const reducer = createReducer(initialState, {
  [setCountryId]: (state, action) => {
    state.countryId = action.payload;
  },
  [setCheckedRadio]: (state, action) => {
    state.checkedRadio = action.payload;
  }
});

export const storage = configureStore({
  reducer: reducer,
});