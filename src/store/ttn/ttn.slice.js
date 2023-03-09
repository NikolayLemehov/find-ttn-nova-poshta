import { createSlice } from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import {getTtn} from './ttn.operations';
import {ttnApi} from './ttn.api';

const initialState = {
  history: [],
  current: {},
};

const ttnSlice = createSlice({
  name: 'ttnHistory',
  initialState,
  reducers: {
    setFilterValue: (state, action) => {
      state.history.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(ttnApi.endpoints.getTtn.matchFulfilled, (state, {payload}) => {
        state.current = payload.data[0];
        if (state.history.includes(payload.data[0].Number)) return;
        state.history = [payload.data[0].Number, ...state.history];
      });
  },
});

// export const { addContact, removeContactById, setFilterValue } = ttnSlice.actions;

const persistConfig = {
  key: 'myNovaPoshta/ttn',
  storage,
};

// export const persistedTtnReducer = persistReducer(persistConfig, ttnSlice.reducer);
ttnSlice.persistedReducer = persistReducer(persistConfig, ttnSlice.reducer);
// export const phonebookReducer = ttnSlice.reducer;


export default ttnSlice;
