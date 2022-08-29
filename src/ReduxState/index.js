import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

const initialState = {
  countryId: '',
  checkedRadio: '',
  theme: 'light',
};

export const setCountryId = createAction('setCountryId');
export const setCheckedRadio = createAction('setCheckedRadio');
export const setTheme = createAction('setTheme');

const reducer = createReducer(initialState, {
  [setCountryId]: (state, action) => {
    state.countryId = action.payload;
  },
  [setCheckedRadio]: (state, action) => {
    state.checkedRadio = action.payload;
  },
  [setTheme]: (state, action) => {
    state.theme = action.payload;
  },
});

export const storage = configureStore({
  reducer: reducer,
});