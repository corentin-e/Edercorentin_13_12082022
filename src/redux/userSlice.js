import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: null,
    lastName: null,

};

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateProfile: (state,  action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
    },
});


export const { updateProfile } = authSlice.actions;
export default authSlice.reducer;
export const selectFirstName = (state) => state.auth.firstName
export const selectLastName = (state) => state.auth.lastName