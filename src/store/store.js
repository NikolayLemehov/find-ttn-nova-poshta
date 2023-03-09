import { configureStore } from '@reduxjs/toolkit';
import ttnSlice from './ttn.slice';
import { persistStore } from 'redux-persist';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist/es/constants';
import {ttnApi} from './ttn.api';

export const store = configureStore({
  reducer: {
    ttn: ttnSlice.persistedReducer,
    [ttnApi.reducerPath]: ttnApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(ttnApi.middleware),
});

export const persistor = persistStore(store);
