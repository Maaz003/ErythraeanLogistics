import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

//REDUCERS
import userReducer from './user/userSlice';

//SERVICES
import {serviceApi} from './services';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

const rootReducer = combineReducers({
  user: userReducer,
  [serviceApi.reducerPath]: serviceApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(serviceApi.middleware),
});

setupListeners(store.dispatch); // NOTE this addition

export default store;
