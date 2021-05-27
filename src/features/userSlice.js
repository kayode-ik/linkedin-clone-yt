import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  // status: 'idle',
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {

      state.user = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    logout: (state) => {
      state.user = null;
    },
  },

});

export const { login, logout } = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user.user;


export default userSlice.reducer;