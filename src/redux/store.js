import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { usersReducer } from './users/slice';
import { filtersReducer } from './filter/slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const tweetsPersistConfig = {
  key: 'tweets',
  storage,
  whitelist: ['follow'],
};

export const store = configureStore({
  reducer: {
    users: persistReducer(tweetsPersistConfig, usersReducer),
    filter: filtersReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
