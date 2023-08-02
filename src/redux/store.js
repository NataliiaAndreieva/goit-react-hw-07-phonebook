// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    isLoading: false,
  },
});

