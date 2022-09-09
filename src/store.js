import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./redux/authSlice";
import userReducer from "./redux/userSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,

  },
})