import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsSlice from "./reducer";
import userSlice  from "./userReducer";

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const userPersistConfig = {
  key: 'userSlice',
  storage,
  whitelist: ['token'],
}

export const store = configureStore({
    reducer: {
    contactsSlice,
    userSlice: persistReducer(userPersistConfig, userSlice),
  },
  middleware
});

export const  persistor = persistStore(store);









