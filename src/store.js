import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./redux/authSlice";
import userReducer from "./redux/userSlice";
/* import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist'; */

/* const persistConfig = {
  key: 'root',
  storage,
} */

/* const persistedReducer = persistReducer(persistConfig, authReducer, userReducer) */

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
})

/* export const persistor = persistStore(configureStore) */