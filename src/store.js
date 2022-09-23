import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from "./redux/authSlice";
import userReducer from "./redux/userSlice";

/* import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist'; */

/* const persistConfig = {
  key: 'root',
  storage,
} */

/* const persistedReducer = persistReducer(persistConfig, authReducer, userReducer) */

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
})

export default configureStore({
  reducer,
})

/* export const persistor = persistStore(configureStore) */