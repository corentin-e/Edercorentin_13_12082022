import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from "./redux/authSlice";
import userReducer from "./redux/userSlice";

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
})

export default configureStore({
  reducer,
})
