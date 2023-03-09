import { configureStore } from '@reduxjs/toolkit';
import ttnSlice from './ttn/ttn.slice';
import { persistStore } from 'redux-persist';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist/es/constants';
import {ttnApi} from './ttn/ttn.api';
import {warehouseApi} from './warehouse/warehouse.api';

export const store = configureStore({
  reducer: {
    ttn: ttnSlice.persistedReducer,
    [ttnApi.reducerPath]: ttnApi.reducer,
    [warehouseApi.reducerPath]: warehouseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(ttnApi.middleware).concat(warehouseApi.middleware),
});

export const persistor = persistStore(store);
