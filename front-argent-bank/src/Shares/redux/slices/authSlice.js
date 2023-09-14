import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isAuthenticated: false,
    profile: null,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.profile = null; 
    },
    setProfile: (state, action) => {
      state.profile = action.payload.body;
    }
  },
});

export const { login, logout, setProfile } = authSlice.actions;
export default authSlice.reducer;