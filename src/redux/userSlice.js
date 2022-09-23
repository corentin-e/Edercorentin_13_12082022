import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: null,
    lastName: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateProfile: (state,  action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
    },
});


const { reducer } = userSlice;
export const { updateProfile } = userSlice.actions;
export default reducer;
export const selectFirstName = (state) => state.user.firstName
export const selectLastName = (state) => state.user.lastName