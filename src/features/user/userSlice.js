import { createSlice } from "@reduxjs/toolkit";

// at start keep everything blank
const initialState = {
    name: '',
    email: '',
    photo: '',
}


// reducers - it says when user logs in, remember the user info (name, email, photo)
const userSlice = createSlice({
    name: 'user',
    initialState : initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },

        setSignOutState: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        },
    }
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
export const selectUserName = state => state.user.name;
export const selectUserEmail = state => state.user.email;
export const selectUserPhoto = state => state.user.photo;

export default userSlice.reducer;