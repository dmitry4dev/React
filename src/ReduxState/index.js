// Redux toolkit это вспомогательный модуль Redux, он упрощает использование чистого Redux
// Redux это модуль который хранит и передает глобальный state/значение приложения
// Redux это способ управления состоянием приложения
// Этот state можем передавать из разных компонентов в Redux, чтобы о них знало всё приложение
// И данные из этого state берут только те компоненты, в которых он нужен, что не запускает ререндер
// всего приложения, это правильная практика

import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

// Как и у useState, у state всегда должно быть первоначальное состояние/initialState
const initialState = {
  countryId: '',
  checkedRadio: '',
  theme: 'light',
};

// Функция createAction объявляет action функцию, которую в дальнейшем мы используем для
// изменения Redux state/значение

export const setCountryId = createAction('setCountryId');
export const setCheckedRadio = createAction('setCheckedRadio');
export const setTheme = createAction('setTheme');

// Reducer это функция, которая вычисляет следующее состояние дерева
// на основании его предыдущего состояния - initialState и применяемого действия. - action
// Метод action'а payload - назначает это состояние для initialState

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

// Здесь создается хранилище storage, в котором хранится состояние приложения
// которое мы можем контролировать через action
// Далее мы помещаем этот storage в самый главный компонент, которым обёрнуто всё приложение
// там где происходит главный render всего приложения, тоесть в index.js
export const storage = configureStore({
  reducer: reducer,
});