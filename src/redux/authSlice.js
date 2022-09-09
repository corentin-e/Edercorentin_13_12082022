import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,

};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.token = action.payload.token;
        },
        logOut: (state) => {
            state.email = null;
        },
    },
});


export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectToken = (state) => state.auth.token;